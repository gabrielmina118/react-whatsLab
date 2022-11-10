import { useState } from "react";
import { Main } from "./appStyled";
import ChatBox from "./components/chatBox/chatbox";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

// Componentes são selfClose , as tags de html , dependendo , não são.
function App() {

  // array de mensagens
  const [messages, setMessages] = useState([])
  const [person,setPerson] = useState("me")

  // componentizacao é utilizada quando temos trechos de códigos que são repetidos
  // ou termos partes especificas do código que queremos dar um nome
  return (
    <Main>
      <Header
        person={person}
        setPerson={setPerson}
      />
     
      <ChatBox 
        messages={messages}
        setMessages={setMessages}
      />
      <Footer 
        person={person}
        messages={messages} 
        setMessages={setMessages}
      />
    </Main>
  );
}

export default App;
















