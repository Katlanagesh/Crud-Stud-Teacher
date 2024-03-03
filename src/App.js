
import "./App.css";
import Navbar from "./Components/Navbar"
import Navsidebar from "./Components/Navsidebar";
import CreateStudent from "./Components/CreateStudent"
import CreateTeacher from "./Components/CreateTeacher"
import {Route, Routes} from "react-router-dom";
import NavFooter from "./Components/NavFooter";
import Student from "./Components/Student";
import Teacher from "./Components/Teacher";
import Dashboard from "./Components/Dashboard";
import StudentEdit from "./Components/StudentEdit";
import TeacherEdit from "./Components/TeacherEdit";


function App() {
  return (
   
    
      <div id="wrapper">
        <Navsidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Navbar />
            <Routes>
            <Route path="/" element={<Dashboard />} />

            <Route path="Dashboard" element={<Dashboard />} />


            <Route path="Student" element={<Student />} />
            <Route path="CreateStudent" element={<CreateStudent />} />
            <Route path="studentedit/:id" element={<StudentEdit />} />

            <Route path="Teacher" element={<Teacher />} />
            <Route path="CreateTeacher" element={<CreateTeacher/>} />
            <Route path="teacheredit/:id" element={<TeacherEdit />} />
            </Routes>
          </div>
          <NavFooter/>
        </div>
      
      </div>
      
   


  );
}

export default App;









