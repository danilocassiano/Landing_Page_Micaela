import { Box, Button, Center, Heading, Image, Text } from "@chakra-ui/react";
import { FaWhatsapp } from 'react-icons/fa';

export default function HomePage() {
    const handleWhatsAppClick = () => {
        window.open('https://wa.me/5581996551624', '_blank');
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
                        <Text fontFamily="'Century Gothic', sans-serif" fontStyle="italic" fontSize='2.0rem' marginLeft="50px" marginBottom='8px' marginTop="-70px" color="white" textAlign="right">
                            Precisa de Ajuda pra enfrentar <br /> as dificuldades da Vida?
                        </Text>
                        <Text fontSize="1.5rem" fontFamily="'Candara', sans-serif" marginTop="60px" marginLeft="50px" marginBottom="8px" color="white" >
                            Olá, sou Micaela Santos, psicóloga clínica.
                        </Text>
                        <Text fontSize="1.5rem" fontFamily="'Candara', sans-serif" fontWeight="bold" marginTop="-15px" marginLeft="50px" marginBottom="8px" color="white">
                            Vamos conversar?
                        </Text>

                        <Button onClick={handleWhatsAppClick}
                            mb={4}
                            leftIcon={<FaWhatsapp />}
                            marginTop="50px"
                            marginLeft="50px"
                            sx={{
                                background: 'linear-gradient(to left, rgba(250, 128, 114, 0.5), #FA8072)',
                                '&:hover': {
                                    background: 'linear-gradient(to left, #FA8072, rgba(250, 128, 114, 0.2))',
                                },
                            }}>
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
            </Box>
        </>
    );
};