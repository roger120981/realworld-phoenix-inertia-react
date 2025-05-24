import React, { useState } from "react";
import { Head } from "@inertiajs/react";
import { CommonPageProps } from "@/types";
import { AlertTriangle, Bug, Zap, Globe, Database } from "lucide-react";
import { errorTriggers } from "@/lib/errorUtils";

interface ErrorTestPageProps extends CommonPageProps {}

const ErrorTestPage: React.FC<ErrorTestPageProps> = () => {
  const [isLoading, setIsLoading] = useState(false);
  const isDevelopment = process.env.NODE_ENV === "development";

  if (!isDevelopment) {
    return (
      <div className="container page">
        <div className="row">
          <div className="col-md-8 offset-md-2 col-xs-12">
            <div className="text-center">
              <AlertTriangle className="mx-auto h-16 w-16 text-yellow-500 mb-4" />
              <h1>Page Not Available</h1>
              <p className="text-muted">This page is only available in development mode.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const handleSyncError = () => {
    errorTriggers.throwError?.("Synchronous error triggered from test page");
  };

  const handleAsyncError = async () => {
    setIsLoading(true);
    try {
      await errorTriggers.throwAsyncError?.("Async error triggered from test page");
    } catch (error) {
      // This will be caught by the error boundary
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const handleComponentError = () => {
    const BadComponent = errorTriggers.throwComponentError?.();
    if (BadComponent) {
      // This will cause a render error
      return <BadComponent />;
    }
  };

  const handleNetworkError = () => {
    errorTriggers.simulateNetworkError?.();
  };

  const handleUndefinedPropertyError = () => {
    const obj: any = null;
    console.log(obj.undefinedProperty.deepProperty);
  };

  const handleTypeError = () => {
    const str: any = null;
    str.toLowerCase();
  };

  const TestButton: React.FC<{
    onClick: () => void;
    icon: React.ComponentType<any>;
    title: string;
    description: string;
    variant?: "danger" | "warning" | "info";
  }> = ({ onClick, icon: Icon, title, description, variant = "danger" }) => {
    const buttonClass = {
      danger: "btn btn-danger",
      warning: "btn btn-warning", 
      info: "btn btn-info"
    }[variant];

    return (
      <div className="col-md-6 mb-3">
        <div className="card h-100">
          <div className="card-body d-flex flex-column">
            <div className="d-flex align-items-center mb-2">
              <Icon className="h-5 w-5 mr-2" />
              <h5 className="card-title mb-0">{title}</h5>
            </div>
            <p className="card-text text-muted flex-grow-1">{description}</p>
            <button
              onClick={onClick}
              className={buttonClass}
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Trigger Error"}
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <Head title="Error Testing - Development" />
      <div className="container page">
        <div className="row">
          <div className="col-md-12">
            <div className="text-center mb-5">
              <Bug className="mx-auto h-16 w-16 text-red-500 mb-3" />
              <h1 className="article-preview">Error Boundary Testing</h1>
              <p className="lead text-muted">
                Test different types of errors to see how the error boundary handles them.
                <br />
                <small className="text-warning">⚠️ Development mode only</small>
              </p>
            </div>

            <div className="alert alert-info mb-4">
              <h5>How to use:</h5>
              <ul className="mb-0">
                <li>Click any button below to trigger different types of errors</li>
                <li>The error boundary should catch the error and display a user-friendly error page</li>
                <li>In development, you'll see detailed error information</li>
                <li>You can also use <code>window.__triggerError()</code> in the browser console</li>
              </ul>
            </div>

            <div className="row">
              <TestButton
                onClick={handleSyncError}
                icon={Zap}
                title="Synchronous Error"
                description="Throws an immediate error that will be caught by the error boundary."
                variant="danger"
              />

              <TestButton
                onClick={handleAsyncError}
                icon={Globe}
                title="Async Error"
                description="Triggers an async error after a delay. Tests error handling in async operations."
                variant="danger"
              />

              <TestButton
                onClick={handleComponentError}
                icon={Bug}
                title="Component Render Error"
                description="Creates a component that throws an error during rendering."
                variant="danger"
              />

              <TestButton
                onClick={handleNetworkError}
                icon={Database}
                title="Network Error"
                description="Simulates a network-related error for testing API error handling."
                variant="warning"
              />

              <TestButton
                onClick={handleUndefinedPropertyError}
                icon={AlertTriangle}
                title="Undefined Property Error"
                description="Tries to access a property on null/undefined, causing a TypeError."
                variant="danger"
              />

              <TestButton
                onClick={handleTypeError}
                icon={AlertTriangle}
                title="Type Error"
                description="Calls a method on null/undefined, causing a TypeError."
                variant="danger"
              />
            </div>

            <div className="card mt-4">
              <div className="card-header">
                <h5 className="mb-0">Console Commands</h5>
              </div>
              <div className="card-body">
                <p>You can also trigger errors from the browser console:</p>
                <div className="bg-light p-3 rounded">
                  <code>window.__triggerError("Custom error message")</code><br />
                  <code>window.__triggerAsyncError("Custom async error")</code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorTestPage;