import  Hero  from './components/Hero'; // Make sure this is uncommented
import Model3Page from './pages/Model3Page';
import ModelSPage from './pages/ModelSPage';
import ModelXPage from './pages/ModelXPage';
import SolarRoofPage from './pages/SolarRoofPage';
import SolarPanelsPage from './pages/SolarPanelsPage';
import ModelYPage from "./pages/ModelYPage"
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/tesla-clone-vite/" element={<Hero className="snap-section"/>} />
        <Route path="/model3" element={<Model3Page />} />
        <Route path="/modelS" element={<ModelSPage />} />
        <Route path="/modelX" element={<ModelXPage />} />
        <Route path="/solarroof" element={<SolarRoofPage />} />
        <Route path="/solarPanels" element={<SolarPanelsPage />} />
        <Route path="/modelY" element={<ModelYPage />} />
        {/* ... other routes */}
      </Routes>
    </Router>
  );
}

export default App;