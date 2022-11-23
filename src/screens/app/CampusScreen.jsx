import React, { useContext, useState, useEffect } from 'react';
import { ScrollView, Heading, Divider, Skeleton, HStack, Pressable, StatusBar, Stack, Badge, Button } from 'native-base';
import Header from '../../components/Header';
import AuthContext from '../../contexts/auth';
import { styles } from '../../components/styles';
import TaskCard from '../../components/TaskCard';
import { SafeAreaView } from 'react-native-safe-area-context';


const CampusScreen = (props) => {
  const { user, campusPosts } = useContext(AuthContext)
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState(false)
  const [filteredPosts, setFilteredPosts] =  useState([{}])
  
  useEffect(() => {
    setLoading(false)
    if(!filter) {
      setFilteredPosts(campusPosts)
    } else {
      setFilteredPosts(campusPosts.filter(post => post.type == Object.keys(filter)[0]))
    }
  }, [filter])
  
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#f2f2f2'} />
      <ScrollView px={5}>
        <Header picture={user.picture} />
        <Skeleton startColor={'gray.400'} rounded="md" w={"40%"} mb={3} isLoaded={!loading} endColor={'gray.200'}>
          <Heading mb={5}>Campus</Heading>
        </Skeleton>
        <Skeleton rounded={'md'} startColor={'gray.400'} endColor={'gray.200'} isLoaded={!loading}>
          <HStack space={2}>
            <Pressable onPress={() => {
              (!filter || !filter.estrutura) ? setFilter({estrutura: true}) : setFilter(false)
            }}>
              <Badge colorScheme={!filter ? "green" : filter.estrutura ? "green" : "light" } style={styles.badge}>Estrutura</Badge>
            </Pressable>
            <Pressable onPress={() => {
              (!filter || !filter.vidaEstudantil) ? setFilter({vidaEstudantil: true}) :  setFilter(false)
            }}>
              <Badge colorScheme={!filter ? "yellow" : filter.vidaEstudantil ? "yellow" : "light" } style={styles.badge}>Vida Estudantil</Badge>
            </Pressable>
            <Pressable onPress={() => {
              (!filter || !filter.ingresso) ? setFilter({ingresso: true}) : setFilter(false)
            }}>
              <Badge colorScheme={!filter ? "red" : filter.ingresso ? "red" : "light" } style={styles.badge}>Ingresso</Badge>
            </Pressable>
          </HStack>
        </Skeleton>
        <Divider my={5} />
        <Stack space={3} pb={5}>
          {filteredPosts.map((post, i) => {
            return (
              <TaskCard 
                title={post.title}
                description={post.description}
                color={post.bg + ".300"}
                colorPressed={post.bg + ".200"}
                key={i}
                checked={post.checked}
                time={post.duration}
                isLoaded={!loading}
              />
            )
          })}
            {/* <TaskCard
            title="Laboratórios de informática"
            description="Os laboratórios de informática..."
            time="5 min"
            color="green.300"
            colorPressed="green.200"
            isLoaded={!loading}
            
            />
            <TaskCard
            title="Biblioteca"
            description="A biblioteca do campus conta com mais de..."
            time="5 min"
            color="green.300"
            colorPressed="green.200"
            isLoaded={!loading}
            />
          <TaskCard
            title="Programa de Auxílio Estudantil"
            description="O programa de Auxílio Estudantil é destinado para..."
            time="30 min"
            color="yellow.300"
            colorPressed="yellow.200"
            isLoaded={!loading}
          />
          <TaskCard
            title="Horário do Ensino Médio"
            description="Horário atualizado para os cursos técnicos integrados ao ensino médio."
            time="5 min"
            color="yellow.300"
            colorPressed="yellow.200"
            isLoaded={!loading}
          />
          <TaskCard
            title="Provas anteriores"
            description="Veja as provas de classificação dos anos anteriores."
            time="30 min"
            color="red.300"
            colorPressed="red.200"
            isLoaded={!loading}
            />
          <TaskCard
            title="Edital de ingresso 2022"
            description="Leia cuidadosamente o edital de ingresso."
            time="50 min"
            color="red.300"
            colorPressed="red.200"
            isLoaded={!loading}
            /> */}
        </Stack>
      </ScrollView>
    </SafeAreaView>

  )
}

export default CampusScreen