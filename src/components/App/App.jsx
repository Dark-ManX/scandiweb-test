import { useState } from 'react';
import {Routes, Route} from 'react-router-dom';
import { lazy } from 'react';
import Gallery from 'components/pages/Gallery';
import Home from 'components/pages/Home';

const AsyncProductItem = lazy(() => import('../pages/ProductCard'));
const AsyncCart = lazy(() => import('../pages/Cart'));

export default function App() {

  return (
    <Routes>
      <Route path='/' element={<Home/>}>
        <Route index element={<Gallery/>} />
        <Route path='products/:productId' element={<AsyncProductItem/>} />
        <Route path='cart' element={<AsyncCart/>} />
      </Route>
      <Route path='*' element={<p>Sorry, we don't know this address</p>} />
    </Routes>
  );
}