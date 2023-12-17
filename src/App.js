import React from 'react';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import HomePage from './index';

function App() {
  return (
    <ChakraProvider>
      <CSSReset />
      <HomePage />
    </ChakraProvider>
  );
}

export default App;