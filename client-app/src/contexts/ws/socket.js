import socketio from 'socket.io-client';
import { createContext } from 'react';
import socketHandler from './util';

export const socket = socketio.connect(process.env.REACT_APP_SOCKET_URL, { 
  transports: ['websocket'] 
});
export const SocketContext = createContext();

socketHandler(socket);