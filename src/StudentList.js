import { useEffect,useState } from "react";
import "./index.css"

import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function StudentList() {
    const [data,setData]=useState(null)
    const navigate=useNavigate()
    const [value,setValue]=useState("")
    const option=["name","grade","mobile"]
    const [sort,setSort]=useState("")
    useEffect(() => {
        fetch("http://localhost:3008/Students?_start=${0}&_end$=${3}")
        .then((res)=>{
            return res.json()
        })
        .then((resp)=>{
            console.groupCollapsed(resp)
            setData(resp)
        })
    },[]) 

    const deleteData = (id) => {
        if (window.confirm("Are you sure to delete the Entry")) {
            fetch("https://json-rest-api-y046.onrender.com/Students" + id, {
                method: "DELETE"
            })
                .then((s) => {
                    alert("Deleted  Successfully")
                    console.log(s)
                    window.location.reload()
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }

    const editData = (id) => {
        navigate("/studedit/" + id)
    }
    
    const detailsData = (id) => {
        navigate("/studdetails/" + id)
    }

    const updateUser=(e)=>{
        console.log(e.target.value)
        setValue(e.target.value)
    }

    const searchData=async (e)=>{
        e.preventDefault()
      return await axios.get(`http://localhost:3008/Students?q${value}`)
      .then((res)=>{
        console.log(res)
        setData(res.data)
        setValue("")
    })
}

    const loadData=(e)=>{
    e.preventDefault()
        fetch("http://localhost:3008/Students")
        .then((res)=>{
            return res.json()
        })
        .then((resp)=>{
            console.groupCollapsed(resp)
            setData(resp)
        })
    }

    const sortData=async (e)=>{
        let value=e.target.value
        console.log(value)
        setSort(value)
        return await axios.get(`http://localhost:3008/Students?_sort=${value}&_order=asc`)
        .then((res)=>{
            console.log(res)
            setData(res.data)
            setValue("")
        })
    }

    return (
        <div className="container">
            <div className="card">
                <div className="card-title">
                    <h1 style={{marginTop:"10px",marginBottom:"10px",marginLeft:"25%"}}>Student Management System</h1>
                </div>
                <div className="card-body">
                    <Link to="/form" className="btn btn-success" style={{marginTop:"10px",marginBottom:"10px"}}>Add New(+)</Link>
                   
                    <form onSubmit={searchData}> 
                    <input value={value} type="text" placeholder="Filter Records" onChange={updateUser} className="form-control" id="exampleInputName" />
                      <button className="btn btn-primary" type="submit" style={{marginTop:"10px",marginBottom:"10px"}} >Search</button>
                      <button onClick={loadData} className="btn btn-danger" style={{marginLeft:"20px",marginTop:"10px",marginBottom:"10px"}}>Reset</button>
                    </form>

                    <select value={sort} onChange={sortData} style={{marginTop:"10px",marginBottom:"10px"}}>
                    <option >--Select--</option>
                    {option.map((data)=>(
                         <option>{data}</option>
                    ))}
                </select>

                    <table className="table table-bordered">
                        <thead className="table-dark text-white">
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Grade</th>
                                <th>Mobile</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data?.map((item) => (
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.grade}</td>
                                    <td>{item.mobile}</td>
                                    <td>
                                        <button onClick={() =>  deleteData(item.id) } className="btn btn-danger"  style={{marginLeft:"10px"}}>Delete</button>
                                        <button onClick={() => editData(item.id)} className="btn btn-primary" style={{marginLeft:"10px"}}>Edit</button>
                                        <button onClick={() => detailsData(item.id)} className="btn btn-success" style={{marginLeft:"10px"}}>Show Details</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default StudentList;