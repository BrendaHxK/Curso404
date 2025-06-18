import Navlink from "./ui/Navlink";

const NavStyles = {
      display: "flex",
      justifyContent: "space-evenly",
      width: '100%',
      border:'1px solid #f00',
      marginBottom: "20px",
};

function Navbar() {
  return (
    <div style={NavStyles}>
      <Navlink texto={"Inicio"} ruta={"/Home"} />
      <Navlink texto={"Acerca"} ruta={"/about"} />
      <Navlink texto={"Productos"} ruta={"/products"} />
    </div>
  );
}


export default Navbar;
