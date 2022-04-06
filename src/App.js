import AppContextProvider from './contexts/AppContext';
import Header from './components/Header';
import Store from './components/Store';
import Cart from './components/Cart';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <AppContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Store />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </AppContextProvider>
    </div>
  );
}

export default App;
