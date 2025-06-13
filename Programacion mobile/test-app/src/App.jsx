import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Card from "./components/Card.jsx";
function App() {
  return (
    <div style={{display: "flex", width: "100vw", flexDirection: "column"}}>
        <Navbar />

      <div className="Cards">
          <Card/>
      </div>
        <Footer style={{display: "flex", width: "100vw", flexDirection: "column"}}/>
    </div>
  );
}

const divStyle = { background: "#ccc" };

export default App;
