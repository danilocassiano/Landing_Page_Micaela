import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { constants } from '../../config/constants';


export default function Apresentacao() {

    return (

        <Box position="relative">
            <Box
                h="100vh"
                bg="#ffcaba"
                justifyContent="center"
                zIndex="1"
                position="relative"
            ></Box>
            
            <Image
                width={'30%'}
                left={'5%'}
                top={'10%'}
                src={"/Apresentacao.png"}
                alt="Imagem de Apresentação"
                zIndex="2"
                position="absolute"
            />
            <Box>
                <Text
                    fontSize="1.4rem"
                    fontFamily="Poppins, sans-serif"
                    marginBottom="8px"
                    left="40%"
                    top="5%"
                    zIndex="1"
                    position="absolute"
                    color="white">
                    Micaela Santos
                </Text>
                <Text
                    fontSize="1.1rem"
                    fontFamily="Poppins, sans-serif"
                    marginBottom="8px"
                    left="40%"
                    top="10%"
                    zIndex="1"
                    position="absolute"
                    color="white">
                    CRP 02/27486
                </Text>
                <Text
                    fontSize="1.1rem"
                    fontFamily="Poppins, sans-serif"
                    marginBottom="8px"
                    left="40%"
                    top="20%"
                    right="10%"
                    textAlign="left"
                    zIndex="1"
                    position="absolute"
                    color="white">
                    Olá! Meu nome é Micaela Santos e sou Psicóloga Clínica Psicanalítica. Com vasta experiência na área, atuo tanto em atendimento clínico presencial quanto online, oferecendo suporte emocional e terapia para adultos, adolescentes e crianças.
                    <br />
                    <br />
                    Tenho uma abordagem sensível e empática, priorizando a escuta atenta e o acolhimento de cada pessoa que busca minha ajuda. Acredito profundamente na importância do processo terapêutico como uma jornada de autoconhecimento e transformação, onde é possível explorar pensamentos, sentimentos e experiências, compreendendo as raízes dos conflitos e buscando soluções que promovam um bem-estar emocional duradouro.
                    <br />
                    <br />
                    Se você está enfrentando desafios emocionais, buscando compreender melhor a si mesmo ou lidar com questões específicas, estou aqui para ajudar. Entre em contato e vamos juntos iniciar essa jornada rumo ao seu equilíbrio emocional e desenvolvimento pessoal.

                </Text>
            </Box>


        </Box>
    );
}