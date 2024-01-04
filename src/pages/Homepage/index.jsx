import { Box, Image, Text, Flex } from "@chakra-ui/react";
import Whatsapp from "../../components/Whatsapp";

export default function HomePage() {
    return (
        <Box
            maxW="100vw"
            maxH={'80vh'}
            overflow={'hidden'}
            display="flex"
            justifyContent="center" 
            alignItems="center"      
            // bg="#A52A2A"
            bg="#FA8072"
        >
            <Box
                w="50%"
                p="65"
                zIndex="2"
                textAlign="center"
                position="relative"
            >
                <Text
                    fontFamily="'Century Gothic', sans-serif"
                    fontStyle="italic"
                    fontWeight="bold"
                    fontSize="2.6rem"
                    color="white"
                    mb="15px"
                    position="absolute"
                    top="-50%"           
                    left="20%"
                    whiteSpace="nowrap"
                >
                    Precisa de Ajuda pra enfrentar
                </Text>
                <Text
                    fontSize="2.6rem"
                    fontFamily="'Century Gothic', sans-serif"
                    fontStyle="italic"
                    fontWeight="bold"
                    color="white"
                    mb="15px"
                    position="absolute"
                    top="-15%"
                    left="20%" 
                    whiteSpace="nowrap"
                >
                    as dificuldades da Vida?
                </Text>
                <Text
                    fontSize="1.2rem"
                    fontFamily="Poppins, sans-serif"
                    marginBottom="8px"
                    left="20%"
                    top="70%"
                    position="absolute"
                    color="white">
                    Olá, sou Micaela Santos, psicóloga clínica.
                </Text>
                <Text
                    fontSize="1.2rem"
                    fontFamily="Poppins, sans-serif"
                    marginBottom="16px"
                    color="white"
                    left="20%"
                    top="90%"
                    position="absolute"
                >
                    <strong>Vamos conversar?</strong>
                </Text>
                <Flex
                    position="absolute"
                    left="50%"  
                    top="130%"  
                    transform="translateX(-50%)"
                >
                    <Whatsapp />
                </Flex>

            </Box>
            <Box
                w="60%"
                position="relative"
                _after={{
                    content: '""',
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: '0px',
                    left: '0px',
                    // bgGradient: 'linear(to right, #a52a2a, transparent)',
                    bgGradient: 'linear(to right, #FA8072, transparent)',
                }}
                zIndex="1"
            >
                <Image
                    width={'100%'}
                    src={"/IMG_apresentacao.png"}
                    alt="Imagem de Apresentação"
                />
            </Box>
        </Box>
    );
}
