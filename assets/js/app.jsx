import React from "react";
import axios from "axios";

import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";
import Layout from "./components/Layout";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { setupGlobalErrorHandlers } from "./lib/errorUtils";

axios.defaults.xsrfHeaderName = "x-csrf-token";

// Setup global error handlers
setupGlobalErrorHandlers();

createInertiaApp({
  progress: {
    showSpinner: true,
  },
  resolve: async (name) => {
    const page = await import(`./pages/${name}.tsx`);
    page.default.layout =
      page.default.layout || ((page) => <Layout children={page} />);

    return page;
  },
  setup({ App, el, props }) {
    createRoot(el).render(
      <ErrorBoundary>
        <App {...props} />
      </ErrorBoundary>
    );
  },
});
