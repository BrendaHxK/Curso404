import Navlink from "./ui/Navlink";
const FooterStyles = {
    display: "flex",
      justifyContent: "space-evenly",
      width: '100%',
      marginBottom: "20px",
      backgroundColor: "#685762",
      color: "#FFFFFF",
      a: "unset"
      
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