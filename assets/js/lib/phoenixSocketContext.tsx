import React, { createContext, useEffect, useState } from "react";
import { Socket } from "phoenix";

const PhoenixSocketContext = createContext({ socket: null });

const PhoenixSocketProvider = ({ children, userId }) => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    if (!socket) {
      // TODO: This should be a signed token
      const newSocket = new Socket("/socket", { params: { userId: userId } });
      newSocket.connect();
      setSocket(newSocket);
    }
  }, []);

  if (!socket) return null;

  return (
    <PhoenixSocketContext.Provider value={socket}>
      {children}
    </PhoenixSocketContext.Provider>
  );
};

export { PhoenixSocketContext, PhoenixSocketProvider };
