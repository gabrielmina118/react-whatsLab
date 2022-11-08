import phone from "../../assets/phone.svg"
import camera from "../../assets/video-cam.svg"
import hamburguer from "../../assets/hamburger.svg"
import { MainHeader, MainPerson , Icons} from "./headerStyled"

function Header() {
  return (
    <MainHeader>

      <MainPerson>
        <img src="https://picsum.photos/200/300" alt="imagem perfil" />
        <div>
          <p>Nikolas</p>
          <p>Online</p>
        </div>
      </MainPerson>

      <Icons>
        <a><img src={phone} alt="phon" /></a>
        <a><img src={camera} alt="camera" /></a>
        <a><img src={hamburguer} alt="hamburguer" /></a>
      </Icons>

    </MainHeader>
  )
}

export default Header