import { SocketContext, socket } from '../../context/socket';
import App from './App';

const Root = () => {
  return (
    <SocketContext.Provider value={socket}>
      <App />
    </SocketContext.Provider>
  );
};

export default Root;