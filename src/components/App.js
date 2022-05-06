import "./App.scss";
import "../sassStyles/_colours.scss";
import Navbar from "./Navbar/Navbar.js";
import PageContainer from "./PageContainer/PageContainer.js";

function App() {
  return (
    <div className="app">
      <Navbar />
      <PageContainer />
    </div>
  );
}

export default App;
