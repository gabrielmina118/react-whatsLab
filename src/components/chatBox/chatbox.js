import { MainChatBox } from "./chatBoxStyled"

function ChatBox(props) {

    const MostraMensagem = props.messages.map((mensagem)=>{
        return(
            <div>
                <p>{mensagem}</p>
            </div>
        )
    })

    return (
        <MainChatBox>
            {MostraMensagem}
        </MainChatBox>
    )
}

export default ChatBox


