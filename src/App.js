

//Project Student management System

import{BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"

import StuRegister from "./StuRegister";
import StuLogin from "./StuLogin";
import StudentList from "./StudentList";
import StudentForm from "./StudentForm";
import StudentEdit from "./StudentEdit";
import StudentDetails from "./StudentDetails";
function App(){
    return(
        <div>
<Router>
         
    <Routes>
        <Route path="/login" element={<StuLogin/>}/>
        <Route path="/" element={<StuRegister/>}/>
        <Route path="/list" element={<StudentList/>}/>
        <Route path="/form" element={<StudentForm/>}/>
        <Route path="/studedit/:studid" element={<StudentEdit/>}/>
        <Route path="/studdetails/:studid" element={<StudentDetails/>}/>
    </Routes>
</Router>
        </div>
    )
}
export default App;