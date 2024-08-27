import { Container, Stack } from '@chakra-ui/react'
import {Navbar, TodoForm,TodoList} from './components'

export const BASE_URL = "http://127.0.0.1:5000/api/todos"; 

function App() {
  return (
    <Stack h="100vh">
      <Navbar />
      <Container>
        <TodoForm/>
        <TodoList/>
      </Container>
    </Stack>
  )
}

export default App
