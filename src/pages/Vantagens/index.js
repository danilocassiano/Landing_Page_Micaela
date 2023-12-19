import { Box, Image, Text, Button } from "@chakra-ui/react";
import { FaWhatsapp } from 'react-icons/fa';


export default function Vantagens() {
 const handleWhatsAppClick = () => {
        window.open('https://wa.me/5581996551624', '_blank');
    };

    return (
        <div style={{ position: "absolute" }}>
            <Box
                w="320px"
                h="850px"
                marginLeft="-150px"
                bg="#FA8072"
                transform="skew(20deg)"
                position="absolute"
                zIndex={1}
            ></Box>
            <Image
                src={process.env.PUBLIC_URL + "/Vantagens.png"}
                alt="Logo"
                style={{ position: "absolute", zIndex: 2, top: "150px" }}
            />
            <Text fontFamily="'Century Gothic', sans-serif" fontStyle="italic" fontWeight="bold" fontSize='1.6rem' marginRight="-40px" marginTop='100px' color="#FA8072" textAlign="right" position="relative">
                Entenda as Vantagens da Terapia On-line
            </Text>

            <Box display="flex" alignItems="center" marginBottom="20px" marginTop="50px" marginLeft="600px">
                {/* Quadrado com numeração */}
                <Box
                    width="50px"
                    height="50px"
                    backgroundColor="#FA8072"
                    marginRight="10px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    color="white"
                    fontWeight="bold"
                >
                    1
                </Box>

                {/* Retângulo com vantagem */}
                <Box
                    width="400px"
                    height="120px"
                    backgroundColor="#E0E0E0"
                    padding="10px"
                >
                    <Text fontSize="1rem" color="#333333" textAlign="center">
                        <strong>Acessibilidade:</strong> Permite aos pacientes  a possibilidade de atendimentos psicológicos de qualquer lugar, eliminando barreiras geográficas e facilitando o atendimento a pessoas em regiões remotas.
                    </Text>
                </Box>
            </Box>
            <Box display="flex" alignItems="center" marginBottom="20px" marginTop="50px" marginLeft="600px">
                {/* Quadrado com numeração */}
                <Box
                    width="50px"
                    height="50px"
                    backgroundColor="#FA8072"
                    marginRight="10px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    color="white"
                    fontWeight="bold"
                >
                    2
                </Box>

                {/* Retângulo com vantagem */}
                <Box
                    width="400px"
                    height="120px"
                    backgroundColor="#E0E0E0"
                    padding="10px"
                >
                    <Text fontSize="1rem" color="#333333" textAlign="center">
                        <strong>Respeito à Privacidade:</strong> Oferece a oportunidade de realizar sessões em ambientes confortáveis e privados, contribuindo com a segurança e confidencialidade.
                    </Text>
                </Box>
            </Box>
            <Box display="flex" alignItems="center" marginBottom="20px" marginTop="50px" marginLeft="600px">
                {/* Quadrado com numeração */}
                <Box
                    width="50px"
                    height="50px"
                    backgroundColor="#FA8072"
                    marginRight="10px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    color="white"
                    fontWeight="bold"
                >
                    3
                </Box>

                {/* Retângulo com vantagem */}
                <Box
                    width="400px"
                    height="160px"
                    backgroundColor="#E0E0E0"
                    padding="10px"
                >
                    <Text fontSize="1rem" color="#333333" textAlign="center">
                        <strong>Adaptação a Necessidades Específicas:</strong> Atendimento online pode ser adaptado para atender às necessidades específicas de pacientes, incluindo aqueles com mobilidade reduzida ou condições de saúde que dificultam a presença física em um consultório.
                    </Text>
                </Box>
            </Box>
            <Button onClick={handleWhatsAppClick}
                mb={4}
                leftIcon={<FaWhatsapp />}
                marginTop="50px"
                marginLeft="450px"
                sx={{
                    background: 'linear-gradient(to left, rgba(250, 128, 114, 0.5), #FA8072)', 
                    '&:hover': {
                        background: 'linear-gradient(to left, #FA8072, rgba(250, 128, 114, 0.2))',
                    },
                }}>
                Agende sua primeira consulta
            </Button>
        </div>
    );
}
