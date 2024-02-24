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
            H='100vh'
            flexDir='column'
            color='white'
            pd='5rem'
            gap={'3rem'}
            bgGradient='linear(to right, #a52a2a, #a52)'
        >
            <Heading
               fontSize="2rem"
               fontFamily="Poppins, sans-serif"
               color="white"
               marginTop="5rem"
            > O que a terapia pode cuidar ?</Heading>

            <SimpleGrid
                templateColumns={'1fr 1fr'}
                columnGap='10'
                rowGap='5'
                w='60%'
            >
                {
                    content.map(sick =>
                    (
                        <HStack
                            borderBottom='1px solid rgba(255   ,255   ,255   ,0.1)'
                            pb='.3rem'

                        >
                            <FaCheck /><Text>{sick[0].toUpperCase() + sick.substring(1)}</Text>
                        </HStack>
                    )
                    )
                }
            </SimpleGrid>
            <Whatsapp
                mb="3rem"
            />
        </Center>
    );
}

export default Cuidados;