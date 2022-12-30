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

const InfoScreen = (props) => {
  const { user } = useContext(AuthContext)

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#f2f2f2'} />
      <ScrollView px={5}>
        <Header picture={user.picture} />
        <Heading mb={3}>Informática para Internet</Heading>
        <Box w='100%' h={200} style={styles.image}>
          <Image source={{
            uri: "https://images.unsplash.com/photo-1561736778-92e52a7769ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=670&q=80"
          }} alt="Imagem" size="100%" style={{ borderRadius: 3 }} />
        </Box>
        <Divider my={5} />
        <Heading mb={2} size={'md'}>Objetivo</Heading>
        <Text textAlign={'justify'} fontSize={'md'} mb={5}>O curso tem como objetivo formar profissionais éticos e capazes de planejar, projetar, desenvolver e implementar programas e sistemas web empregando tecnologias atuais às novas tendências de mercado, dando ênfase à utilização de ferramentas livres. Ao final do curso, o técnico em informática para internet estará capacitado para desenvolver websites, analisar e criar sistemas voltados para internet, projetar banco de dados, instalar e configurar servidores, bem como desenvolver aplicativos para dispositivos móveis.</Text>
        <Divider />
        <List.Section>
          <Text fontSize={'sm'} bold opacity={0.8} mb={2}>Grade Curricular:</Text>
          <List.Accordion style={styles.brutalButton} title="1º Ano">
            <Box mb={2} />
            <BrutalCard mb={2}>
              <Heading size={'md'} mb={2}>Introdução à Computação</Heading>
              <Text textAlign={'justify'}>História da Computação; Sistemas de Numeração; Classificação de Programas; Ética do profissional da informática; Segurança da Informação; Informática e Meio Ambiente; Noções de Hardware e Software; Introdução aos sistemas operacionais; Introdução à Internet; Aspectos Legais do Software; Ferramentas de Edição de Planilhas, Documentos e Apresentações.</Text>
            </BrutalCard>

            <BrutalCard mb={2}>
              <Heading size={'md'} mb={2}>Programação I</Heading>
              <Text textAlign={'justify'}>Introdução (Conceitos de programa de computador, Resolução de problemas no computador, Algoritmos); Representação de dados (Tipos de dados simples e compostos, Variáveis e Constantes); Operadores (Aritméticos, Lógicos, Relacionais, Expressões); Estruturas de Controle (Sequencial, Condicional, Repetição); Funções; Introdução à programação estruturada; Introdução ao desenvolvimento de sistemas com linguagem de programação de alto nível.</Text>
            </BrutalCard>

            <BrutalCard mb={2}>
              <Heading size={'md'} mb={2}>Desenvolvimento Web I</Heading>
              <Text textAlign={'justify'}>Linguagem de marcação de texto (HTML); Linguagem de Folhas de Estilo (CSS); Linguagem de tratamento de dados no front-end (Javascript); Introdução a frameworks Web para front-end.</Text>
            </BrutalCard>

            <BrutalCard mb={2}>
              <Heading size={'md'} mb={2}>Matemática e Informática</Heading>
              <Text textAlign={'justify'}>Geometria dinâmica com o uso do Geogebra; bases numéricas; estudo das funções do 1º e 2º grau com o auxílio de planilha eletrônica.</Text>
            </BrutalCard>

            <BrutalCard mb={2}>
              <Heading size={'md'} mb={2}>Tópicos em Ciências Humanas e Tecnologia</Heading>
              <Text textAlign={'justify'}>Relações entre ciência, tecnologia e sociedade ao longo da história; diferenças culturais e espaciais nas concepções de ciência e tecnologia e de suas relações com as sociedades; relações entre ciência e tecnologia na sociedade contemporânea; assimetrias no desenvolvimento científico-tecnológico entre regiões; temas atuais de cidadania e direitos humanos.</Text>
            </BrutalCard>

          </List.Accordion>

          <Box mb={2} />
          <List.Accordion style={styles.brutalButton} title="2º Ano">
            <Box mb={2} />
            <BrutalCard mb={2}>
              <Heading size={'md'} mb={2}>Desenvolvimento Web II</Heading>
              <Text textAlign={'justify'}>Frameworks para desenvolvimento front-end; padrões de desenvolvimento front-end; integração entre back-end e front-end; Programação Orientada a Objetos.</Text>
            </BrutalCard>

            <BrutalCard mb={2}>
              <Heading size={'md'} mb={2}>Banco de Dados</Heading>
              <Text textAlign={'justify'}>Introdução à Banco de Dados; projeto de Banco de Dados; linguagem de consulta de Banco de Dados; controle de acesso à Banco de Dados. backup e restauração de Banco de Dados.</Text>
            </BrutalCard>

            <BrutalCard mb={2}>
              <Heading size={'md'} mb={2}>Projetos de Software</Heading>
              <Text textAlign={'justify'}>Análise de documentação e requisitos de projeto de sistemas utilizando UML; Metodologias de Desenvolvimento Ágil; controle de versionamento de código; testes de software.</Text>
            </BrutalCard>

          </List.Accordion>

          <Box mb={2} />
          <List.Accordion style={styles.brutalButton} title="3º Ano">
            <Box mb={2} />
            <BrutalCard mb={2}>
              <Heading size={'md'} mb={2}>Desenvolvimento Web III</Heading>
              <Text textAlign={'justify'}>Tecnologias de Desenvolvimento Web do lado Servidor; Desenvolvimento ágil com frameworks; Plataformas de desenvolvimento de aplicativos para a web.</Text>
            </BrutalCard>
            
            <BrutalCard mb={2}>
              <Heading size={'md'} mb={2}>Redes de Computadores</Heading>
              <Text textAlign={'justify'}>Protocolos Internet TCP/IP; Servidores de redes (Instalação e Configuração de Servidores, conceitos de Webservices, camadas, protocolos, segurança).</Text>
            </BrutalCard>

            <BrutalCard mb={2}>
              <Heading size={'md'} mb={2}>Desenvolvimento para Dispositivos Móveis</Heading>
              <Text textAlign={'justify'}>Aplicativos para dispositivos móveis; Ferramentas e ambientes integrados de desenvolvimento para dispositivos móveis.</Text>
            </BrutalCard>

            <BrutalCard mb={2}>
              <Heading size={'md'} mb={2}>Empreendedorismo Digital</Heading>
              <Text textAlign={'justify'}>Gestão de pequenos negócios; Identificação de oportunidades de novos negócios, fomentando uma postura empreendedora; Fomentar a discussão de negócios totalmente digitais; Apresentar conceitos de empreendedorismo no ambiente digital e suas especificidades; Estudar as características e estrutura de Startups; Trabalhar o papel do empreendedor na composição e gerenciamento de equipes; Marketing digital básico.</Text>
            </BrutalCard>

            <BrutalCard mb={2}>
              <Heading size={'md'} mb={2}>Metodologia Científica</Heading>
              <Text textAlign={'justify'}>Ciência e conhecimento científico; Ética em pesquisa; Estrutura básica de trabalho acadêmico conforme normas da Associação Brasileira de Normas Técnicas (ABNT) e da Sociedade Brasileira de Computação (SBC); Revisão de Literatura; Planejamento dos projetos de pesquisa ou extensão; Direitos autorais.</Text>
            </BrutalCard>

            
          </List.Accordion>

        </List.Section>
        <Divider mt={9} />
      </ScrollView>
    </SafeAreaView>
  )
}

export default InfoScreen