import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from "axios";

import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";
import Layout from "./components/layout";

import socket from "./user_socket"
import { Socket } from "phoenix"

import {PhoenixSocketProvider, PhoenixSocketContext} from "./lib/phoenix_socket_context"




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
      <PhoenixSocketProvider>
        <App { ...props } />
      </PhoenixSocketProvider>
    );
  },
});
