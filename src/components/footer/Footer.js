import { useState } from "react"
import { FooterMain } from "./footerStyled"
import mic from "../../assets/microphone.svg"
import smile from "../../assets/smiley.svg"
import paperclip from "../../assets/paperclip.svg"

function Footer(props) {

    // o valor da mensagem do input
    const [message, setMessage] = useState("");

    // funcao nomeada = function nomeDaFuncao()
    // funcao nao nomeada = ()=>
    // function onChangeInput(event) {
    //     setMessage(event.target.value)
    // }

    function oneKeyDownInput(event) {
        if (event.key === "Enter") {
            // Quando trabalhar com array , eu faço a copia do array,insiro a informacao e altero o estado do array

            // crio a copia do meu array
            const novaMensage = [...props.messages]

            //Criamos esse objeto , para saber quem é a pessoa que esta mandando a mensagem e qual é a mensagem
            const objetoMensagem = {
                idDoAutor: Date.now(),
                nomeDoAutor: props.person,
                mensagemDoAutor: message,
                horario: new Date().toLocaleString("pt-BR", {
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true
                })
            }
            // altero a copia com a nova informação
            novaMensage.push(objetoMensagem)

            // altero o estado do array original , com o valor do array de cópia.
            props.setMessages(novaMensage)

            setMessage("")
        }
    }

    return (
        <FooterMain>
            <div>
                <a href="#">
                    <img src={smile} alt="smile icon" />
                </a>

                <input
                    type={"text"}
                    value={message}
                    onChange={(event)=>setMessage(event.target.value)}
                    onKeyDown={oneKeyDownInput}
                />

                <a href="#">
                    <img src={paperclip} alt="paperclip icon" />
                </a>
            </div>
            <div>
                <a href="#">
                    <img src={mic} alt="microfone" />
                </a>
            </div>
        </FooterMain>
    )
}

export default Footer



