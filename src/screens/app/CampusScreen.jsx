import React, { useContext } from 'react';
import { ScrollView, Heading, Divider, Text, Box, Icon, HStack, Checkbox, Center, Pressable, Stack, Badge } from 'native-base';
import Header from '../../components/Header';
import AuthContext from '../../contexts/auth';
import { styles } from '../../components/styles';
import TaskCard from '../../components/TaskCard';


const CampusScreen = (props) => {
  const { user } = useContext(AuthContext)
  return (
    <Box flex={1} safeAreaTop>

      <ScrollView safeAreaTop px={5}>
        <Header picture={user.picture} />
        <Heading mb={5}>Campus</Heading>
        <HStack space={2}>
          <Badge colorScheme="green" style={styles.badge}>Estrutura</Badge>
          <Badge colorScheme="yellow" style={styles.badge}>Vida Estudantil</Badge>
          <Badge colorScheme="red" style={styles.badge}>Ingresso</Badge>
        </HStack>
        <Divider my={5} />
        <Stack space={3} pb={5}>
          <TaskCard
            title="Laboratórios de informática"
            description="Os laboratórios de informática..."
            time="5 min"
            color="green.300"
            colorPressed="green.200"
          />
          <TaskCard
            title="Biblioteca"
            description="A biblioteca do campus conta com mais de..."
            time="5 min"
            color="green.300"
            colorPressed="green.200"
          />
          <TaskCard
            title="Programa de Auxílio Estudantil"
            description="O programa de Auxílio Estudantil é destinado para..."
            time="30 min"
            color="yellow.300"
            colorPressed="yellow.200"
          />
          <TaskCard
            title="Horário do Ensino Médio"
            description="Horário atualizado para os cursos técnicos integrados ao ensino médio."
            time="5 min"
            color="yellow.300"
            colorPressed="yellow.200"
          />
          <TaskCard
            title="Provas anteriores"
            description="Veja as provas de classificação dos anos anteriores."
            time="30 min"
            color="red.300"
            colorPressed="red.200"
          />
          <TaskCard
            title="Edital de ingresso 2022"
            description="Leia cuidadosamente o edital de ingresso."
            time="50 min"
            color="red.300"
            colorPressed="red.200"
          />

        </Stack>
      </ScrollView>
    </Box>

  )
}

export default CampusScreen