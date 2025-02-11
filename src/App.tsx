import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Quotes from './pages/Quotes';
import Quote from './pages/Quote';
import Header from './components/Header';
import Footer from './components/Footer';

// @ts-expect-error - doesn't recognize env on import meta
const basename = import.meta.env.BASE_URL;

const App = () => {
  // Dark mode state: load from localStorage if available.
  const [darkMode, setDarkMode] = useState<boolean>(
    localStorage.getItem('darkMode') === 'true'
  );

  useEffect(() => {
    document.body.classList.toggle('light-mode', !darkMode);
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  return (
    <BrowserRouter basename={basename}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className='py-8 flex-1'>
        <div className='container mx-auto'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/quotes' element={<Quotes />} />
            <Route path='/quotes/:id' element={<Quote />} />
            <Route path='/test/:id?' element={<Quote shuffle />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
