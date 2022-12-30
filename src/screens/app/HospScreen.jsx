import React, { useContext } from 'react';
import { StatusBar, ScrollView, Heading, Divider, Text, Box, Image, FlatList } from 'native-base';
import Header from '../../components/Header';
import AuthContext from '../../contexts/auth';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../../components/styles';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';
import { List } from 'react-native-paper';

const BrutalCard = (props) => <Box p={3} {...props} bg={'white'} style={styles.brutalButton}>{props.children}</Box>

const HospScreen = (props) => {
  const { user } = useContext(AuthContext)

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#f2f2f2'} />
      <ScrollView px={5}>
        <Header picture={user.picture} />
        <Heading mb={3}>Hospedagem</Heading>
        <Box w='100%' h={200} style={styles.image}>
          <Image source={{
            uri: "https://centralpronatec.com.br/wp-content/uploads/2014/12/Fotolia_57158143_Subscription_Monthly_M.jpg"
          }} alt="Imagem" size="100%" style={{ borderRadius: 3 }} />
        </Box>
        <Divider my={5} />
        <Heading mb={2} size={'md'}>Objetivo</Heading>
        <Text textAlign={'justify'} fontSize={'md'} mb={5}>O curso tem como objetivo capacitar o aluno aos processos de organização e avaliação de produtos e serviços inerentes ao turismo, hospitalidade e lazer, dando ao estudante capacidade de conduzir as atividades profissionais ligadas à hospedagem e à hospitalidade integradas ao lazer, turismo, eventos e restauração. Ao final do curso, o técnico em hospedagem prestará atendimento e suporte aos clientes por meio da operacionalização e supervisão das atividades de recepção, reservas, governança, eventos e entretenimento, bem como comercializará os espaços e serviços dos diferentes tipos de meios de hospedagem.</Text>
        <Divider />
        <List.Section>
          <Text fontSize={'sm'} bold opacity={0.8} mb={2}>Grade Curricular:</Text>
          <List.Accordion style={styles.brutalButton} title="1º Ano">
            <Box mb={2} />
            <BrutalCard mb={2}>
              <Heading size={'md'} mb={2}>Relações interpessoais</Heading>
              <Text textAlign={'justify'}>Relações humanas com valorização das características socioculturais. Relações interpessoais no ambiente de trabalho. Trabalho em equipe. Administração de conflitos e etiqueta empresarial.</Text>
            </BrutalCard>

            <BrutalCard mb={2}>
              <Heading size={'md'} mb={2}>Introdução aos meios de hospedagem</Heading>
              <Text textAlign={'justify'}>Evolução histórica dos meios de hospedagem. Classificação e tipologia de meios de hospedagem. Terminologia hoteleira. Organograma e estrutura funcional dos meios de hospedagem. Tendências e perspectivas em meios de hospedagem.</Text>
            </BrutalCard>

            <BrutalCard mb={2}>
              <Heading size={'md'} mb={2}>Fundamentos de Hospitalidade e Turismo</Heading>
              <Text textAlign={'justify'}>A evolução histórica da hospitalidade e do turismo. Conceitos, definições e tipologias da hospitalidade e do turismo. Instituições públicas e privadas relacionadas aos setores de turismo e de viagens. Segmentos turísticos. Turismo e patrimônio cultural. Regiões e roteiros turísticos de Santa Catarina.</Text>
            </BrutalCard>

            <BrutalCard mb={2}>
              <Heading size={'md'} mb={2}>Iniciação científica</Heading>
              <Text textAlign={'justify'}>Ciência e conhecimento científico. Ética em pesquisa. Referências, citações e formatação de trabalhos educacionais conforme normas da ABNT. Revisão de Literatura. Expressão corporal e utilização de ferramentas audiovisuais em apresentações de trabalhos. Planejamento dos projetos de pesquisa ou extensão de acordo com as linhas de pesquisa descritas no Projeto Pedagógico do Curso.</Text>
            </BrutalCard>

            <BrutalCard mb={2}>
              <Heading size={'md'} mb={2}>Técnicas de Lazer e Entretenimento</Heading>
              <Text textAlign={'justify'}>Conceito de lazer e recreação. Recreação como uma opção de lazer. Perfil e responsabilidades do recreador. Estudo e vivência de atividades socioculturais e recreativas voltadas a diferentes públicos e faixas etárias. Políticas públicas voltadas ao lazer. Processo de envelhecimento, respeito e valorização do idoso. Planejamento, organização e execução de projetos voltados à atividades de lazer e recreação em diferentes meios de hospedagem. Atividades recreativas adaptadas com vistas à inclusão social.</Text>
            </BrutalCard>

          </List.Accordion>

          <Box mb={2} />
          <List.Accordion style={styles.brutalButton} title="2º Ano">
            <Box mb={2} />
            <BrutalCard mb={2}>
              <Heading size={'md'} mb={2}>Recepção e Reservas</Heading>
              <Text textAlign={'justify'}>Procedimentos operacionais e rotinas do setor de recepção e reservas nos meios de hospedagem. Funções, habilidades, competências e atribuições do setor: portaria, telefonia, caixa, conciergeria. Reservas e Revenue Management. Programas informatizados. Documentos necessários ao setor de reservas e recepção. Comunicação no atendimento.</Text>
            </BrutalCard>

            <BrutalCard mb={2}>
              <Heading size={'md'} mb={2}>Projetos Aplicados ao Turismo, Hospitalidade e Lazer</Heading>
              <Text textAlign={'justify'}>Execução de projeto de pesquisa ou extensão, com acompanhamento por meio de diversos controles, como caderno de campo, plano de atividades, instrumento de coleta de dados, apresentação dos resultados e discussões, relatório parcial e relatório final. Desenvolvimento de resumo expandido ou artigo científico para inscrição em evento técnico científico, em apresentações orais ou pôster.</Text>
            </BrutalCard>

            <BrutalCard mb={2}>
              <Heading size={'md'} mb={2}>Alimentos e bebidas na hotelaria</Heading>
              <Text textAlign={'justify'}>História da gastronomia; Tipologia de restaurantes, bares e serviços; boas práticas em serviços de alimentos e bebidas; Princípios básicos da nutrição; Elaboração e apresentação de cardápios; Ficha técnica: instrumento de gestão da cozinha; Administração de custos em restauração e análise de preços e produtos.</Text>
            </BrutalCard>

            <BrutalCard mb={2}>
              <Heading size={'md'} mb={2}>Gerenciamento operacional</Heading>
              <Text textAlign={'justify'}>Cargos e funções na hotelaria; Almoxarifado em alimentos e bebidas em meios de hospedagem; principais tradições culinárias internacionais; A cozinha brasileira e seus regionalismos.</Text>
            </BrutalCard>

            <BrutalCard mb={2}>
              <Heading size={'md'} mb={2}>Eventos em meios de hospedagem</Heading>
              <Text textAlign={'justify'}>O mercado de eventos. Classificação e características dos eventos. Recursos humanos, financeiros e materiais necessários para o planejamento dos eventos. Técnicas para a operacionalização dos eventos em meios de hospedagem. Captação de eventos. Cerimonial e protocolo.</Text>
            </BrutalCard>

          </List.Accordion>

          <Box mb={2} />
          <List.Accordion style={styles.brutalButton} title="3º Ano">
            <Box mb={2} />
            <BrutalCard mb={2}>
              <Heading size={'md'} mb={2}>Sustentabilidade nos Meios de Hospedagem</Heading>
              <Text textAlign={'justify'}>Educação ambiental e o Desenvolvimento sustentável no turismo. A atividade turística em unidades de conservação. Os impactos ambientais, culturais, sociais e econômicos do turismo. Boas práticas de sustentabilidade para gestão e operação em meios de hospedagem.</Text>
            </BrutalCard>
            
            <BrutalCard mb={2}>
              <Heading size={'md'} mb={2}>Técnicas de Vendas em Meios de Hospedagem</Heading>
              <Text textAlign={'justify'}>Conceitos básicos de marketing. A atividade de vendas. O profissional de vendas. Apresentação de vendas. Negociação. Objeções. Fechamento. Pós-venda.</Text>
            </BrutalCard>

            <BrutalCard mb={2}>
              <Heading size={'md'} mb={2}>Governança</Heading>
              <Text textAlign={'justify'}>Competências, habilidades e atribuições do profissional de governança. Estrutura física e funcional da governança nos meios de hospedagem. Prática operacional, procedimentos e rotinas do setor. Microbiologia na governança. Programas informatizados.</Text>
            </BrutalCard>

            <BrutalCard mb={2}>
              <Heading size={'md'} mb={2}>Projetos</Heading>
              <Text textAlign={'justify'}>Projetos aplicados ao turismo, hospitalidade e lazer II e trabalho de conclusão de curso.</Text>
            </BrutalCard>
          </List.Accordion>

        </List.Section>
        <Divider mt={9} />
      </ScrollView>
    </SafeAreaView>
  )
}

export default HospScreen