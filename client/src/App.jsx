import React from 'react';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='min-h-screen bg-gray-50 text-gray-950'>
      <Header></Header>
      <Toaster />
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default App;