import { Center, HStack, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';
import Whatsapp from '../../components/Whatsapp';
import { FaCheck } from "react-icons/fa";

function Cuidados() {
    const content = [
        'Depressão',
        'transtorno de personalidade',
        'ansiedade',
        'transtorno de humor',
        'suicidio',

        'insegurança',
        'bipolaridade',
        'timidez',
        'medo',
        'disfunções sexuais',
        'dependência quimica',
        'distúbios do sono',
        'estresse pós-traumático',
        'baixa autoconfiança',
        'baixa autoestima',
        'relacionaento abusivo',
        'ciúmes',
        'traumas do passado'

    ]

  return ( 
  <Center
    w='100vw'
    maxW='1900px'
    minH='100vh'
    flexDir='column'
    color='#222121'
    pd='5rem'
    gap={'5rem'}
    bgGradient= 'linear( #fff, #ffcaba)'
    >
    <Heading
        fontFamily="Poppins"
    > O que a terapia pode cuidar ?</Heading>

    <SimpleGrid 
        templateColumns={'1fr 1fr'}
        columnGap='20'
        rowGap='5'
        w='50%'
    >
    {
        content.map(sick => 
            (
                <HStack
                   borderBottom='1px solid #0505051c'
                   pb='.3rem'
                   key={sick}
                   fontFamily="Poppins"
                >
                    <FaCheck /><Text>{sick[0].toUpperCase() + sick.substring(1)}</Text>
                </HStack>
            )
            )
    }
    </SimpleGrid>
    <Whatsapp />
  </Center>
  );
}

export default Cuidados;