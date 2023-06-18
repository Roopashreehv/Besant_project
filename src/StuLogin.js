import "./Reg.css"
import { initializeApp } from "firebase/app";
import { useState } from "react";
import {signInWithEmailAndPassword, getAuth, } from "firebase/auth"
import { Link} from "react-router-dom";


function StuLogin() {
   
    const [email, setEmail] = useState("")
    const [pswd, setPswd] = useState("")


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

      if( email==""|| pswd=="" ){
        alert("All Fields Are mandatory")
      }
      else {
        alert("Logged in.....")
      }
        let obj={
            a:email,
            b:pswd
        }
        signInWithEmailAndPassword(auth,obj.a,obj.b)
        .then(()=>{
            alert("Saved")
        }).catch((err)=>{
            alert("Check the credentials")
        })
    }

    return (
        <div className="roop">
            <form  className="card p-3 m-3" style={{ width: "500px"}} onSubmit={store}>
                <h1>Log In</h1>
              
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" value={pswd} onChange={e => setPswd(e.target.value)} className="form-control" id="exampleInputPassword1" />
                </div>
                <Link className="btn btn-success" to="/list">Login</Link>
                <br></br>
             
              
            </form>
        </div>
    )
    }
export default StuLogin;