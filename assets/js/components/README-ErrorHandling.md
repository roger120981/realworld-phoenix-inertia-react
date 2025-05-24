# React Error Handling Implementation

This document explains the error handling system implemented in the Realworld Phoenix-Inertia-React application.

## Overview

The error handling system provides comprehensive error catching and user-friendly error pages when React components fail to render. It includes:

- **Error Boundary Component**: Catches React rendering errors
- **Custom Error Page**: User-friendly error display matching app styling
- **Development Tools**: Error testing utilities and detailed error information
- **Global Error Handlers**: Catches unhandled promise rejections and JavaScript errors

## Components

### ErrorBoundary (`components/ErrorBoundary.tsx`)

A React Error Boundary that catches JavaScript errors anywhere in the child component tree.

**Features:**
- Catches and logs React rendering errors
- Provides fallback UI when errors occur
- Offers recovery actions (reload, go home, try again)
- Shows detailed error information in development mode

**Usage:**
```jsx
import { ErrorBoundary } from './components/ErrorBoundary';

// Wrap your app or specific components
<ErrorBoundary>
  <YourComponent />
</ErrorBoundary>

// With custom fallback
<ErrorBoundary fallback={(error, errorInfo) => <CustomErrorUI />}>
  <YourComponent />
</ErrorBoundary>
```

### ErrorPage (`components/ErrorPage.tsx`)

A styled error page component that matches the application's design.

**Features:**
- Consistent styling with the rest of the application
- Action buttons for recovery (reload, go home, try again)
- Development-only error details
- Responsive design

### Error Utilities (`lib/errorUtils.ts`)

Utility functions for error handling and testing.

**Functions:**
- `logError()`: Enhanced error logging with context
- `setupGlobalErrorHandlers()`: Sets up global error listeners
- `errorTriggers`: Development-only error testing utilities
- `handleAsyncError()`: Handle async errors outside React lifecycle

## Integration

### App-Level Integration

The ErrorBoundary is integrated at the app level in `app.jsx`:

```jsx
import { ErrorBoundary } from "./components/ErrorBoundary";
import { setupGlobalErrorHandlers } from "./lib/errorUtils";

// Setup global error handlers
setupGlobalErrorHandlers();

createInertiaApp({
  setup({ App, el, props }) {
    createRoot(el).render(
      <ErrorBoundary>
        <App {...props} />
      </ErrorBoundary>
    );
  },
});
```

### Global Error Handling

Global error handlers catch:
- Unhandled promise rejections
- Global JavaScript errors
- Network errors (when properly configured)

## Error Testing (Development Only)

### Error Test Page

Access the error test page at `/error-test` (development only) to test different error scenarios:

- Synchronous errors
- Asynchronous errors
- Component rendering errors
- Network simulation errors
- Type errors

### Console Commands

In development, use these console commands to trigger errors:

```javascript
// Trigger a basic error
window.__triggerError("Test error message");

// Trigger an async error
window.__triggerAsyncError("Test async error");
```

### HOC for Component-Level Error Boundaries

Use the `withErrorBoundary` higher-order component to wrap specific components:

```jsx
import { withErrorBoundary } from './components/ErrorBoundary';

const MyComponent = () => {
  // Component that might throw errors
  return <div>Content</div>;
};

export default withErrorBoundary(MyComponent);
```

## Error Logging

### Development
- Detailed console logging with error context
- Component stack traces
- Full error information display

### Production
- Basic error logging
- User-friendly error messages
- No sensitive debugging information exposed

## Best Practices

### For Developers

1. **Wrap Critical Components**: Use ErrorBoundary around components that might fail
2. **Handle Async Errors**: Use try-catch for async operations and handleAsyncError() utility
3. **Test Error Scenarios**: Use the error test page to verify error handling works
4. **Log with Context**: Use logError() utility for consistent error logging

### Error Boundary Limitations

Error boundaries do **NOT** catch errors in:
- Event handlers (use try-catch)
- Asynchronous code (use handleAsyncError utility)
- Server-side rendering
- Errors thrown in the error boundary itself

### Handling These Cases

```jsx
// Event handlers
const handleClick = () => {
  try {
    // risky operation
  } catch (error) {
    logError(error, undefined, 'Button click handler');
  }
};

// Async operations
const fetchData = async () => {
  try {
    await apiCall();
  } catch (error) {
    handleAsyncError(error, 'Data fetching');
  }
};
```

## Configuration

### Environment Detection

The system automatically detects the environment and adjusts behavior:

- **Development**: Full error details, testing utilities, console helpers
- **Production**: User-friendly messages only, no sensitive information

### Customization

You can customize error handling by:

1. **Custom Error Pages**: Pass a `fallback` prop to ErrorBoundary
2. **Custom Logging**: Modify `logError()` to send to your logging service
3. **Custom Recovery Actions**: Override the default recovery methods

## Troubleshooting

### Common Issues

1. **Blank Page**: If you see a blank page, check the browser console for error details
2. **Error Boundary Not Catching**: Ensure the error occurs during React rendering, not in event handlers
3. **Testing Not Working**: Verify you're in development mode and using the correct testing functions

### Debugging

1. Enable verbose logging in development
2. Use the error test page to verify functionality
3. Check browser console for detailed error information
4. Use React DevTools to inspect component tree

## Future Enhancements

Potential improvements to consider:

- Integration with error tracking services (Sentry, LogRocket, etc.)
- User error reporting functionality
- Error analytics and monitoring
- Progressive error recovery strategies
- Offline error handling