import Navbar from './components/Navbar';
import Index from './pages/Index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Create from './pages/Create';
import Show from './pages/Show';

function App() {
  return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/create" element={<Create />} />
              <Route path="/recipes/:recipeId" element={<Show />} />
            </Routes>
          </div>
        </div>
      </Router>
  );
}

export default App;
