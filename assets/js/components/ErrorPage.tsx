import React from "react";
import { Link } from "@inertiajs/react";
import { AlertTriangle, Home, RotateCcw, Bug } from "lucide-react";

interface ErrorPageProps {
  error?: Error;
  errorInfo?: React.ErrorInfo;
  onReload?: () => void;
  onGoHome?: () => void;
  onRetry?: () => void;
}

export const ErrorPage: React.FC<ErrorPageProps> = ({
  error,
  errorInfo,
  onReload,
  onGoHome,
  onRetry,
}) => {
  const isDevelopment = process.env.NODE_ENV === "development";

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header>
        <nav className="navbar navbar-light">
          <div className="container">
            <Link className="navbar-brand" href="/">
              conduit
            </Link>
          </div>
        </nav>
      </header>

      {/* Main Error Content */}
      <div className="container page">
        <div className="row">
          <div className="col-md-8 offset-md-2 col-xs-12">
            <div className="text-center">
              <AlertTriangle className="mx-auto h-24 w-24 text-red-500 mb-4" />

              <h1 className="article-preview h1">Oops! Something went wrong</h1>

              <p className="lead text-muted mb-5">
                We encountered an unexpected error while loading this page. This
                might be a temporary issue.
              </p>

              {/* Action Buttons */}
              <div className="flex justify-center gap-3 mb-4">
                {onReload && (
                  <button
                    onClick={onReload}
                    className="btn btn-primary btn-lg w-52"
                  >
                    <RotateCcw className="inline h-4 w-4 mr-1" />
                    Reload Page
                  </button>
                )}

                {onGoHome && (
                  <button
                    onClick={onGoHome}
                    className="btn btn-outline-secondary btn-lg w-52"
                  >
                    <Home className="inline h-4 w-4 mr-1" />
                    Go Home
                  </button>
                )}

                {onRetry && (
                  <button
                    onClick={onRetry}
                    className="btn btn-outline-primary btn-lg w-52"
                  >
                    Try Again
                  </button>
                )}
              </div>

              {/* Helpful suggestions */}
              <div className="mt-4 p-4 bg-light rounded">
                <h5 className="mb-3">What you can try:</h5>
                <ul className="list-unstyled text-left">
                  <li className="mb-2">
                    • Refresh the page to see if the issue resolves
                  </li>
                  <li className="mb-2">• Check your internet connection</li>
                  <li className="mb-2">
                    • Go back to the homepage and try again
                  </li>
                  <li className="mb-2">
                    • If the problem persists, please contact support
                  </li>
                </ul>
              </div>

              {/* Development Error Details */}
              {isDevelopment && error && (
                <div className="card mt-4 text-left">
                  <div className="card-header bg-danger text-white">
                    <Bug className="inline h-4 w-4 mr-2" />
                    Development Error Details
                  </div>
                  <div className="card-body p-4">
                    <h6 className="text-danger">Error Message:</h6>
                    <div className="bg-light p-3 rounded mb-3">
                      <p className="font-monospace text-danger mb-0">
                        {error.message}
                      </p>
                    </div>

                    {error.stack && (
                      <>
                        <h6 className="text-danger">Stack Trace:</h6>
                        <div className="bg-light p-3 rounded">
                          <pre
                            className="text-dark small overflow-auto mb-0"
                            style={{ maxHeight: "200px" }}
                          >
                            {error.stack}
                          </pre>
                        </div>
                      </>
                    )}

                    {errorInfo?.componentStack && (
                      <>
                        <h6 className="text-danger mt-3">Component Stack:</h6>
                        <div className="bg-light p-3 rounded">
                          <pre
                            className="text-dark small overflow-auto mb-0"
                            style={{ maxHeight: "200px" }}
                          >
                            {errorInfo.componentStack}
                          </pre>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer>
        <div className="container">
          <Link href="/" className="logo-font">
            conduit
          </Link>
          <span className="attribution">
            An interactive learning project from{" "}
            <Link href="https://thinkster.io">Thinkster</Link>. Code &amp;
            design licensed under MIT.
          </span>
        </div>
      </footer>
    </div>
  );
};
