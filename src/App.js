import React from 'react';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import HomePage from './pages/Homepage';
import Vantagens from './pages/Vantagens';
import Modalidades from './pages/Modalidades';

export default function App() {
  return (
    <ChakraProvider>
      <CSSReset />
      <div>
        <HomePage />
        <Vantagens />
        <Modalidades />
      </div>     
    </ChakraProvider>
  );
}
