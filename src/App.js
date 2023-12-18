import React from 'react';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import HomePage from './pages/Homepage';

export default function App() {
  return (
    <ChakraProvider>
      <CSSReset />
      <HomePage />
    </ChakraProvider>
  );
}