import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";
import Layout from "./components/Layout";

import { PhoenixSocketProvider } from "./lib/phoenixSocketContext";

axios.defaults.xsrfHeaderName = "x-csrf-token";

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
      <PhoenixSocketProvider userId={props.initialPage?.props?.user?.id}>
        <App {...props} />
      </PhoenixSocketProvider>
    );
  },
});
