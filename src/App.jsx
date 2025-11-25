
import './App.css'
import Button from './components/Button'
import Container from './components/Container'
import Flex from './components/Flex'


function App() {
 

  return (
    <>
      <Container>
       <Flex>
           <div className="bg-red-500 w-5 py-5"></div>
         <div className="bg-green-500 w-5 py-5"></div>
          <div className="bg-blue-500 w-5 py-5">
            <Button btnTxt={"contact us"}/>
          </div>
       </Flex>
      
      </Container>
    </>
  )
}

export default App
