import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import Navbar from './components/Navbar';
import AddStudents from './pages/AddStudents';
import AddStudentForm from './components/AddStudentForm';
import ViewStudent from './pages/ViewStudent';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import EditStudent from './pages/EditStudent';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login/>}  />
          <Route path="/viewstudent" element={<ViewStudent/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/addstudent" element={<AddStudents/>} />
          <Route path='/editstudent' element={<EditStudent/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
