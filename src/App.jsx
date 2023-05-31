import "./App.css";
import { BrowserRouter as Router , Routes ,Route } from "react-router-dom";
import Hairsalon from "./Components/Hairsalon/Hairsalon";

function App() {
  return (
    <>
      <Router>
        <Routes>

          <Route path="/" element={<Hairsalon/>} />
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
