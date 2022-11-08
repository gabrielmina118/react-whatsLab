import styled from "styled-components"

export const FooterMain = styled.div`
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    div:first-child{
        width: 80%;
        display: flex;
        align-items: center;
        input{
            height: 50px;
            width:80%;
        }
    }

    div:last-child{
        width: 10%;
        a{
            display: flex;
            justify-content: end;
            margin: 5px;
            img{
                width: 50px;
                height: 50px;
                background-color: green;
                border-radius: 50px;
            }
        }
    }
`