import { Box, Button, Center, Heading, Image, Text } from "@chakra-ui/react";
import { FaWhatsapp } from 'react-icons/fa';

export default function HomePage() {
    const handleWhatsAppClick = () => {
        window.location.href = 'https://api.whatsapp.com/send?phone=+5581996551624';
    };

    const handleEmailClick = () => {
        window.location.href = 'mailto:micaelaeeloyse22@gmail.com';
    };

    return (
        <><Box p={4} bg="#FFF5EE">
            <Center>
                <Heading as="h1" mb={2} color="white" fontFamily="Poppins, sans-serif" fontSize="1.5rem" maxH="15vh">
                    <Image
                        src={process.env.PUBLIC_URL + "/Logo1.png"}
                        alt="Logo"
                        maxW="30%"
                        h="45%"
                        mb={2}
                        top="40%"
                        left="50%"
                        display="block"
                        margin="auto" />
                </Heading>
            </Center>
        </Box><Box p={4} bg="#A52A2A" position="relative">
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

                        <Button colorScheme="whatsapp" onClick={handleWhatsAppClick} mb={4} leftIcon={<FaWhatsapp />}>
                            Agende sua primeira consulta
                        </Button>
                    </div>

                    <Image
                        src={process.env.PUBLIC_URL + "/Foto_Apresentacao.jpg"}
                        alt="Imagem de Apresentação"
                        backgroundColor="transparent"
                        w="30%"
                        h="auto"
                        style={{
                            maskImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.8), transparent 70%)',
                            WebkitMaskImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.8), transparent 70%)', // Para navegadores baseados no Webkit
                        }} />
                </Box>
            </Box><Box>
                <Button onClick={handleEmailClick}>
                    Enviar Mensagem por E-mail
                </Button>
            </Box></>
    );
};