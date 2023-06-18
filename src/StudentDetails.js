import { useParams } from "react-router-dom"
import "./Student.css"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom";

function StudentDetails() {
    const [data, setData] = useState(null)
    const {studid}=useParams()
    useEffect(() => {
        fetch("http://localhost:3008/Students/"+studid)
            .then((res) => {
                return res.json()
            })
            .then((res) => {
                console.log(res)
                setData(res)
            })
    }, [])

    return (
        <div className="container-fluid"  >
            <div className="card" style={{width:"500px"}}>
                {data && 
                <div className="card-body">
                    <h5 className="card-title">Student Id:{data.id}</h5>
                    <p className="card-text">Student Name:{data.name}</p>
                    <p className="card-text">Grade:{data.grade}</p>
                    <p className="card-text">Mobile:{data.mobile}</p>
                    <Link className="btn btn-danger" to="/list">Back</Link>
                    
                </div>
}
            </div>
        </div>
    )
}
export default StudentDetails;


//from filter you have to start

