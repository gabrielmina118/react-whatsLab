import { Main} from "./appStyled";
import ChatBox from "./components/chatBox/chatbox";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

// Componentes são selfClose , as tags de html , dependendo , não são.
function App() {
  return (
    <Main>
      <Header/>
      <ChatBox/>
      <Footer/>
    </Main>
  );
}

export default App;
