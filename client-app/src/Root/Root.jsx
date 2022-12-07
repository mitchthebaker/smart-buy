import { SocketContext, socket } from '../contexts/ws/socket';
import App from './App';

const Root = () => {
  return (
    <SocketContext.Provider value={socket}>
      <App />
    </SocketContext.Provider>
  );
};

export default Root;