import { Route, Routes } from 'react-router-dom';
import { Drawer } from './Componetns/Drawer';
import { Header } from './Componetns/Header';
import { GlobalStyle } from './GlobalStyle';
import { Home } from './Pages/Home';
import { Settings } from './Pages/Settings';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Drawer />
      <div className="contentBox">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} end />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
