import './App.css';
import ViewAll from './components/ViewAll';
import AddForm from './components/AddForm';
import UpdateForm from './components/UpdateForm';
import { Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <h1>Favorite Authors</h1>
      <Routes>
        <Route path={"/"} element={<ViewAll/>} />
        <Route path={"/create"} element={<AddForm/>} />
        <Route path={"/update/:_id"} element={<UpdateForm/>} />
      </Routes>
    </div>
  );
}

export default App;
