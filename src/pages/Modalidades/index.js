import { Box, Text, Grid, Image } from "@chakra-ui/react";
import CardModalidade from "../../components/CardModalidade";


export default function Modalidades() {


  const data = [
    {
      imagemSrc: "https://img.freepik.com/fotos-premium/terapeuta-feminina-e-paciente-triste-em-aconselhamento-em-saude-mental-ou-psicologia-para-cuidados-de-saude-pessoa-do-sexo-feminino-ou-psicologa-conversando-com-cliente-com-ansiedade-ou-estresse-em-consulta-terapeutica_590464-190707.jpg?w=740",
      texto: (
        <strong>
          Adultos procuram a psicoterapia para enfrentar desafios emocionais, como estresse, ansiedade e relacionamentos complexos. A psicanálise proporciona uma abordagem profunda, explorando as raízes inconscientes dos padrões de comportamento. Ao compreender e transformar esses aspectos, os adultos cultivam autoconsciência, promovendo mudanças positivas e alcançando equilíbrio emocional duradouro. A terapia oferece um espaço seguro para explorar a complexidade das emoções, auxiliando na descoberta de ferramentas para enfrentar adversidades. Com o apoio do terapeuta, os adultos podem desenvolver estratégias para lidar com os desafios cotidianos, promovendo uma vida mais saudável e plena.
        </strong>
      ),
      frase: "Psicoterapia para Adultos",
    },
    {
      imagemSrc: "https://as2.ftcdn.net/v2/jpg/04/92/41/01/1000_F_492410147_hAi7Oftw5BFSdxB2lE3I8uqxeSbo6Cz1.jpg",
      texto: (
        <strong>
          A psicoterapia infantil desempenha um papel fundamental no desenvolvimento emocional das crianças, fornecendo um espaço seguro para expressar pensamentos e sentimentos. Ao compreender suas experiências, os pequenos aprendem a lidar com desafios, promovendo resiliência e autoconhecimento. Além disso, a terapia auxilia na identificação precoce de questões emocionais, prevenindo problemas mais complexos no futuro. Ao fortalecer habilidades sociais e emocionais, as crianças conseguem enfrentar melhor as demandas da vida. Investir na saúde mental desde a infância é crucial para construir alicerces sólidos para um bem-estar duradouro.
        </strong>
      ),
      frase: "Psicoterapia para Crianças",
    },
    {
      imagemSrc: "https://img.freepik.com/fotos-gratis/mao-com-coracao-arco-iris_23-2148514726.jpg?w=740&t=st=1703181989~exp=1703182589~hmac=4344c0725c734386d69f3e64137966075bfcbf6dbed59b3cfaaa1f7e30dcff03",
      texto: (
        <strong>
          "A psicoterapia para pessoas LGBTQIA+ desempenha um papel crucial no apoio à saúde mental, oferecendo um espaço seguro para explorar questões específicas relacionadas à identidade de gênero e orientação sexual. Os profissionais buscam compreender as experiências únicas enfrentadas por indivíduos LGBTQIA+, como discriminação, preconceito e questões de aceitação. A terapia pode ajudar a lidar com o estresse relacionado ao processo de revelar sua identidade, fortalecer a autoestima e promover o bem-estar emocional. Além disso, terapeutas culturalmente sensíveis podem ser fundamentais para criar um ambiente acolhedor e de apoio, contribuindo para a construção de uma identidade positiva e saudável.
        </strong>
      ),
      frase: "Psicoterapia para LGBTQIA+",
    },
  ];

  return (
    <Box display="flex" flexDirection="column" alignItems="center">



      <Text
        fontFamily="'Century Gothic', sans-serif"
        fontStyle="italic"
        fontWeight="bold"
        fontSize="1.6rem"
        marginRight="-40px"
        marginTop="50px"
        marginBottom="2%"
        color="#FA8072"
        textAlign="right"
      >
        <strong>Modalidades de Atendimento:</strong>
      </Text>
      <Grid templateColumns="repeat(3, 1fr)" gap={4} justifyContent="center">
        {data.map((bloco, index) => (
          <CardModalidade key={index} {...bloco} />
        ))}
      </Grid>
      <Box style={{ textAlign: 'center' }}>
        <Image
          src={"/Foto_Modalidades_Capa.jpg"}
          alt="Imagem_Modalidades"
          style={{ maxWidth: '40%', maxHeight: '40%', margin: 'auto' }}
        />
      </Box>
    </Box >
  );
}