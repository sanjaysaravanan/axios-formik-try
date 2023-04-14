import { Route, BrowserRouter, Routes } from 'react-router-dom';

import './App.css';

import Layout from './Layout';
import AddEdit from './pages/AddEdit/AddEdit';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<h1>Home</h1>} />
            <Route path="/movies" element={<h1>Movies</h1>} />
            <Route path="/editMovie/:id" element={<AddEdit />} />
            <Route path="/addMovie" element={<AddEdit />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
