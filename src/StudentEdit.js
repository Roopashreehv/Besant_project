import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";


function StudentEdit() {
    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [grade, setGrade] = useState("")
    const [mobile, setMobile] = useState("")

    const navigate = useNavigate()

    const { studid } = useParams()

    useEffect(() => {
        fetch("https://json-rest-api-y046.onrender.com/Students/" + studid)
            .then((res) => {
                return res.json()
            })
            .then((res) => {
                console.log(res)
                setId(res.id)
                setName(res.name)
                setGrade(res.grade)
                setMobile(res.mobile)
            })
    }, [])

    const sendData = (e) => {
        e.preventDefault()
        const data = { id, name, grade, mobile }
        fetch("https://json-rest-api-y046.onrender.com/Students/" + studid, {
            method: "PUT",
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
            <h2>Edit Student Data</h2>
            <form onSubmit={sendData}>
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
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/list" className="btn btn-danger">Back</Link>
            </form>
        </div>
    )
}
export default StudentEdit;
