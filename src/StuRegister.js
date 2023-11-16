
import "./Reg.css"
import { initializeApp } from "firebase/app";
import { useState } from "react";
import {createUserWithEmailAndPassword, getAuth} from "firebase/auth"

function StuRegister() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [pswd, setPswd] = useState("")
    const [cpswd, setCpswd] = useState("")

    const firebaseConfig = {
        apiKey: "AIzaSyD_RDbaXHMyKIR1bfPKHi39zHsZRGQ2aJk",
        authDomain: "auth-27355.firebaseapp.com",
        projectId: "auth-27355",
        storageBucket: "auth-27355.appspot.com",
        messagingSenderId: "553384774135",
        appId: "1:553384774135:web:fd5b8e334872d7439506f2",
        measurementId: "G-7LMYX1HX76"
      };
      
      // Initialize Firebase
      const app = initializeApp(firebaseConfig);
      const auth = getAuth()
      
      const store=(e)=>{
        e.preventDefault()

      if(name== ""|| email==""|| pswd=="" ||cpswd==""){
        alert("All Fields Are mandatory")
      }
      else if(pswd != cpswd){
        alert("Password Does not match...")
      }
        let obj={
            a:email,
            b:pswd
        }
        createUserWithEmailAndPassword(auth,obj.a,obj.b)
        .then(()=>{
            alert("Saved")
        }).catch((err)=>{
            alert("Check the credentials")
        })
    }

    return (
        <div className="roop">
            <form  className="card p-3 m-3" style={{ width: "500px"}} onSubmit={store}>
                <h1>Registration Form</h1>
                <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input type="text" value={name} onChange={e => setName(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" value={pswd} onChange={e => setPswd(e.target.value)} className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Confirm Password</label>
                    <input type="password" value={cpswd} onChange={e => setCpswd(e.target.value)} className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-primary" style={{width:"150px"}}>Register</button>
                <br></br>
            </form>
        </div>
    )
    }
export default StuRegister;
