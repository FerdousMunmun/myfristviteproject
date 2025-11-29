
import './App.css'
import Button from './components/Button';
import Container from './components/Container';
import Flex from './components/Flex';
import Home from './Components/Pages/Home';

function App() {
 

  return (
    <>
     <Container>
      <Flex>
        <Home/>
        <Button/>
      </Flex>
     </Container>
    </>
  )
}

export default App
