import { MainChatBox,Message } from "./chatBoxStyled"
import tickGreen from "../../assets/tick-green-double.svg"


function ChatBox(props) {

    // funcao de array , para mostrar na tela
    const mostraMensagem = props.messages.map((message,index)=>{
        return(
            <Message 
                key={index}
                person={message.person}    
            >
                <h1>{message.person}</h1>
                <div>
                    <p>{message.message}</p>
                    <div>
                        <img src={tickGreen} alt="ticket"/>
                    </div>
                </div>
            </Message>
        )
    })

    return (
        <MainChatBox>
            {mostraMensagem}
        </MainChatBox>
    )
}

export default ChatBox


