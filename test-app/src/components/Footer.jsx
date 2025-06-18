import Navlink from "./ui/Navlink";
const FooterStyles = {
    display: "flex",
      justifyContent: "space-evenly",
      width: '100%',
      border:'1px solid #00FF00',
      marginBottom: "20px"
}
function Footer () {
    return (
    <div style={FooterStyles}>
      <Navlink texto={"Redes"} ruta={"/media"} />
      <Navlink texto={"Mapa"} ruta={"/mapa"} />
      <Navlink texto={"Contacto"} ruta={"/contact"} />
    </div>
    )
}

export default Footer;