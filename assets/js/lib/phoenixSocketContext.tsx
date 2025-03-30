import React, { createContext, useEffect, useState } from "react";
import { Socket } from "phoenix";

const PhoenixSocketContext = createContext({ socket: null });

interface Props {
  children: React.ReactNode;
  userId?: string;
}
const PhoenixSocketProvider = ({ children, userId }: Props) => {
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    // Disconnect the socket if the userId has changed (eg logout/login)
    if (socket) {
      socket.disconnect();
    }
    // TODO: This should be a signed token
    const params = userId ? { userId } : {};
    const newSocket = new Socket("/socket", { params });
    newSocket.connect();
    setSocket(newSocket);
  }, [userId]);

  if (!socket) return null;

  return (
    <PhoenixSocketContext.Provider value={socket}>
      {children}
    </PhoenixSocketContext.Provider>
  );
};

export { PhoenixSocketContext, PhoenixSocketProvider };
