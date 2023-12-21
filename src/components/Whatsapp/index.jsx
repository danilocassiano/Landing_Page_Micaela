import { Button, Link } from '@chakra-ui/react';
import React from 'react';
import { constants } from '../../config/constants';

// import { Container } from './styles';

function Whatsapp() {

    return (
        <Link href={`https://api.whatsapp.com/send?phone=${constants.contato.whatsapp}&message=ola`}>
            <Button colorScheme="whatsapp" mb={4}>
                Entrar em Contato pelo WhatsApp
            </Button>
        </Link>

    );
}

export default Whatsapp;