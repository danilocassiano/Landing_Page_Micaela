import { Box, Image } from "@chakra-ui/react";
import Header from "../../components/Header";
import Whatsapp from "../../components/Whatsapp";
import Email from "../../components/Email";

export default function HomePage() {

    return (
        <Box
            w='100vw'
        >
            <Header />
            <Box p={4} bg="#A52A2A" h='100vh' position="relative">
                <Box display="flex" alignItems="center" justifyContent="space-between" height="100%">
                    <div>
                        <h1>Precisa de Ajuda pra enfrentar <br /> as dificuldades da Vida?</h1>
                        <p>Olá, Sou Micaela Santos, psicóloga.</p>
                        <p>
                            <strong>
                                Vamos conversar?
                            </strong>
                        </p>

                        <Whatsapp />
                    </div>

                    <Image
                        src={"/IMG-apresentacao.png"}
                        alt="Imagem de Apresentação"
                        backgroundColor="transparent"
                        
                        h="auto"
                        />
                </Box>
            </Box>
            <Email />
            
        </Box>
    );
};