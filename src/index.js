import React from 'react';
import ReactDOM from 'react-dom';
import { Box, Heading, Button, Center, Image, ChakraProvider, CSSReset } from '@chakra-ui/react';

const HomePage = () => {
  const handleWhatsAppClick = () => {
    window.location.href = 'https://api.whatsapp.com/send?phone=+5581996551624';
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:micaelaeeloyse22@gmail.com';
  };

  return (
    <ChakraProvider>
      <CSSReset />
      <Box p={4} bg="#FFF5EE">
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
              margin="auto"            
              
            />
          </Heading>
        </Center>
      </Box>
      <Box p={4} bg="#A52A2A" position="relative">
      <Box display="flex" alignItems="center" justifyContent="space-between" height="100%">
        <div>
          <h1>Precisa de Ajuda pra enfrentar <br /> as dificuldades da Vida?</h1>
          <p>Olá, Sou Micaela Santos, psicóloga.</p>
          <p>
            <strong>
              Vamos conversar?
            </strong>
          </p>

          <Button colorScheme="whatsapp" onClick={handleWhatsAppClick} mb={4}>
            Entrar em Contato pelo WhatsApp
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
          }}
        />
      </Box>
    </Box>
      <Box>
        <Button onClick={handleEmailClick}>
          Enviar Mensagem por E-mail
        </Button>
      </Box>
    </ChakraProvider >
  );
};

ReactDOM.render(<HomePage />, document.getElementById('root'));