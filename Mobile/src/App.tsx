import store from './store/redux';
import { Provider } from 'react-redux'
import AppContent from "./AppContent";

const App = () => {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  )
};

export default App;
