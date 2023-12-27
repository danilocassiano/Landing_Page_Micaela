import { Button, Link } from '@chakra-ui/react';
import React from 'react';
import { constants } from '../../config/constants';

// import { Container } from './styles';

function Email() {
  return (
    <Link
        target='_blank' 
        href={`mailto:${constants.contato.email}`}
    >
                <Button>
                    Enviar Mensagem por E-mail
                </Button>
            </Link>
  )
}

export default Email;