import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


function StudentForm() {
    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [grade, setGrade] = useState("")
    const [mobile, setMobile] = useState("")

    const navigate = useNavigate()


    const sendData = (e) => {
        e.preventDefault()
        const data = { id, name, grade, mobile }
        fetch("http://localhost:3008/Students", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(() => {
                alert("Data Saved")
                navigate("/")
            })
            .catch((err) => {
                alert("error" + err)
            })

    }

    return (
        <div className="container">
           
            <form  className="card p-3 m-3" style={{ width: "500px"}} onSubmit={sendData}>
            <h2 style={{marginLeft:"30px",marginTop:"10px",marginBottom:"10px"}}>Add New Student Data</h2>
                <div className="mb-3">
                    <label className="form-label">ID</label>
                    <input type="text" value={id} onChange={e => setId(e.target.value)} disabled="disabled" className="form-control" id="exampleInputName" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Student Name</label>
                    <input type="text" value={name} onChange={e => setName(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Grade</label>
                    <input type="text" value={grade} onChange={e => setGrade(e.target.value)} className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Mobile</label>
                    <input type="Number" value={mobile} onChange={e => setMobile(e.target.value)} className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: "100px",marginTop:"10px"}}>Submit</button>
                <Link to="/list" className="btn btn-danger" style={{ width: "100px",marginLeft:"75%",marginTop:"10px"}}>Back</Link>
            </form>
        </div>
    )
}
export default StudentForm;