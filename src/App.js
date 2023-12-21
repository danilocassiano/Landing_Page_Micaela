import React from 'react';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import HomePage from './pages/Homepage';
import Header from './components/Header';

export default function App() {
  return (
    <ChakraProvider>
      <CSSReset />
      <Header />
      <HomePage />
    </ChakraProvider>
  );
}