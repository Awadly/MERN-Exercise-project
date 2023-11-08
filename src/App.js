import { BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./components/navbar.component";
import ExerciseList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component"
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<ExerciseList />} />
          <Route path="/edit/:id" element={<EditExercise />} />
          <Route path="/create" element={<CreateExercise />} />
          <Route path="/user" element={<CreateUser />} />
        </Routes>
      </BrowserRouter>
    );
}

export default App;
