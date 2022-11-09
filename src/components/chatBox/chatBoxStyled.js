import styled from "styled-components"


export const MainChatBox = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: 16px;
`

export const Message = styled.div`
    background-color:${props => props.person === "me" ? "#61C554" : "gray"};
    color:${props => props.person === "me" ? "white" : "black"};;
    margin-left: ${props => props.person === "me" ? "auto" : 0};
    min-width: 80px;
    max-width: 300px;
    padding: 8px;
    border-radius: 8px;
    margin-bottom: 16px;
    
        h1 {
            font-weight: 500;
            font-size: 16px;
            padding-bottom: 4px;
        }
        
        div {
            display: flex;
            flex-direction: column;

            p {
                font-weight: 400;
                font-size: 16px;
                word-wrap: break-word;
            }

            div {
                font-weight: 500px;
                font-size: 11px;
                color: #727272;
                margin-left: auto;

            img {
                width: 16px;
                margin-left: 4px;
            }
        }
}

`