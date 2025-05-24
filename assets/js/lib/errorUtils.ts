export const isDevelopment = () => process.env.NODE_ENV === "development";

export const logError = (error: Error, errorInfo?: any, context?: string) => {
  const timestamp = new Date().toISOString();
  const logData = {
    timestamp,
    context: context || "React Error",
    error: {
      message: error.message,
      stack: error.stack,
      name: error.name,
    },
    errorInfo,
    userAgent: navigator.userAgent,
    url: window.location.href,
  };

  console.group(`🚨 ${logData.context} - ${timestamp}`);
  console.error("Error:", error);
  if (errorInfo) {
    console.error("Error Info:", errorInfo);
  }
  console.error("Full Log Data:", logData);
  console.groupEnd();

  // In production, you might want to send this to an error tracking service
  // Example: sendErrorToService(logData);
};

export const createTestError = (message: string = "Test error") => {
  throw new Error(message);
};

// Development-only error triggers for testing error boundaries
export const errorTriggers = isDevelopment() ? {
  throwError: (message?: string) => {
    createTestError(message || "Manual error trigger for testing");
  },
  
  throwAsyncError: async (message?: string) => {
    await new Promise(resolve => setTimeout(resolve, 100));
    createTestError(message || "Async error trigger for testing");
  },
  
  throwComponentError: () => {
    // This creates an error that will be caught by React's error boundary
    const BadComponent = () => {
      throw new Error("Component rendering error for testing");
    };
    return BadComponent;
  },

  simulateNetworkError: () => {
    throw new Error("Simulated network error");
  },

  addErrorTriggerToWindow: () => {
    // Add global error triggers for easy testing in dev tools
    (window as any).__triggerError = errorTriggers.throwError;
    (window as any).__triggerAsyncError = errorTriggers.throwAsyncError;
    console.log("🧪 Error triggers added to window: __triggerError() and __triggerAsyncError()");
  }
} : {};

export const handleAsyncError = (error: Error, context?: string) => {
  logError(error, undefined, context);
  
  // Create a custom event that can be caught by error boundaries
  const errorEvent = new CustomEvent('unhandledAsyncError', {
    detail: { error, context }
  });
  window.dispatchEvent(errorEvent);
};

export const setupGlobalErrorHandlers = () => {
  // Handle unhandled promise rejections
  window.addEventListener('unhandledrejection', (event) => {
    logError(
      new Error(event.reason?.message || 'Unhandled promise rejection'),
      { reason: event.reason },
      'Unhandled Promise Rejection'
    );
  });

  // Handle global JavaScript errors
  window.addEventListener('error', (event) => {
    logError(
      event.error || new Error(event.message),
      {
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno
      },
      'Global JavaScript Error'
    );
  });

  // Add error triggers in development
  if (isDevelopment()) {
    errorTriggers.addErrorTriggerToWindow?.();
  }
};