import { ChakraProvider } from '@chakra-ui/react'
import Listing from './page/listing';
import "./assets/style/index.css";

function App() {
  return (
    <ChakraProvider>
      <Listing/>
    </ChakraProvider>
  );
}

export default App;
