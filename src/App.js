import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { DataProvider } from './context/DataContext';
import Countries from './pages/Countries';
import Country from './pages/Country';
import { ThemeProvider } from './context/ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <DataProvider>
        <Routes>
          <Route path='/' element={<Countries />} />
          <Route path='/:name' element={<Country />} />
        </Routes>
      </DataProvider>
    </ThemeProvider>
  );
};

export default App;
