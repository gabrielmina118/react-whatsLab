import { useState } from "react"
import { FooterMain } from "./footerStyled"
import mic from "../../assets/microphone.svg"
import smile from "../../assets/smiley.svg"
import paperclip from "../../assets/paperclip.svg"

function Footer(props) {
    // aqui entra o react
    const [message, setMessage] = useState("");
    
    function onChangeInput(event) {
        setMessage(event.target.value)
    }

    function oneKeyDownInput(event) {
        if (event.key === "Enter") {
            // Quando trabalhar com array , eu faço a copia do array,insiro a informacao e altero o estado do array

            // crio a copia do meu array
            const novaMensage = [...props.messages]

            // altero a copia com a nova informação
            novaMensage.push(message)

            // altero o meu estado de array , com o valor da cópia.
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
                    onChange={onChangeInput}
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


//estrutura que armazena mais de uma informacao

// const arrayDeMensagens = ["salve galera","outra mensagem","outra mensagem"]


