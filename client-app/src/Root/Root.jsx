import { SocketContext, socket } from '../contexts/ws/socket';
import { Provider } from 'react-redux';
import store from '../store';

import App from './App';

// Separation of concerns mostly: abstract out providers and other configurations 
// and wrap around the main App component 
const Root = () => {
  return (
    <Provider store={store}>
      <SocketContext.Provider value={socket}>
        <App />
      </SocketContext.Provider>
    </Provider>
  );
};

export default Root;