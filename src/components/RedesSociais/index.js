import { Box, HStack, Link, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';

function RedesSociais() {
    const [hover, setHover] = React.useState(true);

    const redesSociais = [
        {
            nome: 'Facebook',
            color:'#020eb3',
            link: 'www.google.com',
            icon: <FaFacebook />
        },
        {
            nome: 'Facebook',
            color:'#d30348',
            link: 'www.google.com',
            icon: <FaInstagram />
        },
        {
            nome: 'Facebook',
            color:'#02bd12',
            link: 'www.google.com',
            icon: <FaWhatsapp />
        },
        {
            nome: 'twitter',
            color:'#0272db',
            link: 'www.google.com',
            icon: <FaTwitter />
        },

    ]
    return (
        <Box
            position='fixed'
            zIndex='100022'
            top={'50%'}
            right={'0'}
            borderEndRadius={'10px'}
            transform={`translate(${hover ? 0 : '4rem'}, -50%)`}
            transition={'.6s all'}
        >
            <HStack
                spacing={0}
                justify={'center'}
            >
                <Text
                    color='#fff'
                    fontSize='lg'
                    fontWeight={'bold'}
                    borderRadius='20px 20px 0 0'
                    bg={'#ff0055'}
                    p={2}
                    transform='rotate(-90deg) translate(0, 110%)'
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                >
                    Redes Sociais
                </Text>

                <VStack
                    bg={'#a10aa13a'}
                    width={'4rem'}
                    align={'center'}
                    spacing={'2'}
                    padding={2}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    boxShadow={'2xl'}
                    borderRadius={'20px'}
                >
                    {redesSociais.map((item) => (
                        <Box key={item.nome} fontSize='2.5rem' color={item.color}
                        rounded={'10'}
                        boxShadow={'2px 2px 2px #3020208e'}
                        p={1}
                        >
                            <Link href={item.link} target='_blank'>
                                {item.icon}
                            </Link>
                        </Box>
                    ))}
                </VStack>
            </HStack>

        </Box>
    );
}

export default RedesSociais;