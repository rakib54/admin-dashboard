import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import './App.css'
import Home from "./components/pages/Home/Home";


const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Sidebar />
        <Home />
      </div>
    </div>
  );
}

export default App;
