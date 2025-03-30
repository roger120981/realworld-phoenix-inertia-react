import React, { useContext, useEffect, useState, useReducer } from "react";

import { PhoenixSocketContext } from "@/lib/phoenixSocketContext";
type ChannelMessage = {
  event: string;
  payload: any;
};

type BroadcastFunc = (event: string, message: any) => void;

export const useChannel = <T>(
  channelTopic: string,
  reducer: (prevState: T, message: ChannelMessage) => T,
  initialState: T
): [T, BroadcastFunc] => {
  const socket = useContext(PhoenixSocketContext);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [broadcast, setBroadcast] = useState<BroadcastFunc>(
    mustJoinChannelWarning
  );

  useEffect(
    () => joinChannel(socket, channelTopic, dispatch, setBroadcast),
    [channelTopic]
  );

  return [state, broadcast];
};

const joinChannel = (
  socket: any,
  channelTopic: string,
  dispatch: (message: ChannelMessage) => void,
  setBroadcast: (broadcast: (event: string, params: any) => void) => void
) => {
  socket.onClose = () => dispatch({ event: "closed", payload: {} });

  const channel = socket.channel(channelTopic, { client: "browser" });

  channel.onMessage = (event: string, payload: any) => {
    dispatch({ event, payload });
    return payload;
  };

  channel
    .join()
    .receive("ok", () => {})
    .receive("error", ({ reason }: { reason: any }) =>
      console.error("failed to join channel", reason)
    );

  setBroadcast(() => channel.push.bind(channel));

  return () => {
    channel.leave();
  };
};

const mustJoinChannelWarning = () => () =>
  console.error(
    `useChannel broadcast function cannot be invoked before the channel has been joined`
  );
