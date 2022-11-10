import { MainChatBox, Message } from "./chatBoxStyled"
import tickGreen from "../../assets/tick-green-double.svg"


function ChatBox(props) {

    // TODA VEZ , eu disse , TODA VEZ , que formos criar uma função dentro do map e fomos
    // querer um valor especifico (no caso , 1 mensagem especifica) , nos usamos a arrowFunction

    // A arrow function de onClick vai ser usada em 2 modos , 
    // quando eu passar um valor no parametro da funcao
    // ou qualquer eu quiser clicar numa div especifica

    function DeletaMensagem(idMensagem) {

        if (window.confirm("deseja deletar essa mensagem ? ")) {
            const apagaMensagem = props.messages.filter((mensagem) => {
                if (mensagem.idDoAutor !== idMensagem) {
                    return mensagem
                }
            })
            props.setMessages(apagaMensagem)
        }

    }

    // funcao de array , para mostrar na tela
    const mostraMensagem = props.messages.map((message, index) => {
        return (
            <Message
                key={index}
                autor={message.nomeDoAutor}
                onDoubleClick={() => DeletaMensagem(message.idDoAutor)}
            >
                <h1>{message.nomeDoAutor}</h1>
                <div>
                    <p>{message.mensagemDoAutor}</p>
                    <div>
                        <img src={tickGreen} alt="ticket" />
                    </div>
                    <p>{message.horario}</p>
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


