import { useState } from "react";
import { Main} from "./appStyled";
import ChatBox from "./components/chatBox/chatbox";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

// Componentes são selfClose , as tags de html , dependendo , não são.
function App() {

  const [messages, setMessages] = useState([])

  return (
    <Main>
      <Header/>
      <ChatBox 
        messages={messages}
      />
      <Footer 
        messages={messages} 
        setMessages={setMessages}
      />

    </Main>
  );
}

export default App;













