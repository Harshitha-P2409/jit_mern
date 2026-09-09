import './App.css';
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Welcome from "./components/Welcome";
function App() {
  return (
    <div>
  
      <Navbar />
      <Welcome />
      <Dashboard />
      
    </div>
  );
}

export default App;