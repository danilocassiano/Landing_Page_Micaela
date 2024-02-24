import React from 'react';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import HomePage from './pages/Homepage';
import Vantagens from './pages/Vantagens';
import Modalidades from './pages/Modalidades';
import Apresentacao from './pages/Apresentacao';
import Header from './components/Header';
import Cuidados from './pages/Cuidados';

export default function App() {
  return (
    <ChakraProvider>
      <CSSReset />
      <Header />
      <HomePage />
      <Vantagens />
      <Modalidades />
      <Cuidados />
      <Apresentacao />      
    </ChakraProvider>
  );
}
