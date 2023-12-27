import { Box, Image, Text } from "@chakra-ui/react";
import Whatsapp from "../../components/Whatsapp";

export default function HomePage() {

    return (
        <Box
            maxW='100vw'
            maxH={'80vh'}
            overflow={'hidden'}
        >
            <Box bg="#A52A2A">
                <Box display="flex" alignItems="center" justifyContent="space-between" height="100%">
                    <div>
                        <Text fontFamily="Calisto MT" fontSize='2rem' marginBottom='8px' color="white">
                            Precisa de Ajuda pra enfrentar <br /> as dificuldades da Vida?
                        </Text>
                        <Text fontSize="1.2rem" fontFamily="Poppins, sans-serif" marginBottom="8px">
                            Olá, sou Micaela Santos, psicóloga.
                        </Text>
                        <Text fontSize="1.2rem" fontFamily="Poppins, sans-serif" marginBottom="16px">
                            <strong>Vamos conversar?</strong>
                        </Text>

                        <Whatsapp />
                    </div>
                    <Box
                        w="60%"
                        position='relative'
                        _after={{
                            content: '""',
                            width: '100%',
                            height: '100%',
                            position: 'absolute',
                            top: '0px',
                            left: '0px',
                            bgGradient: 'linear(to right, #a52a2a, transparent)',
                        }}
                    >
                        <Image
                            width={'100%'}
                            src={"/IMG_apresentacao.png"}
                            alt="Imagem de Apresentação"
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};