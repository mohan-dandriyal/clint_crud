import { useContext, useState } from "react"
import { ClintContext } from "../context/context";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";


export const EditClint = () => {
    const [clints, setClints] = useContext(ClintContext)
    const navigate = useNavigate()

    const {id, name} = useParams()
    console.log(id, name);
      

    const [clint, setclint] = useState({
      fistName: clints.fistName,
        lastName: clints.lastName,
        email: clints.email,
        contact: clints.contact,
        project: clints.project
      })

      const EditClintData = () => {
        axios.put(`http://localhost:4000/api/v1/update/${clints._id}`, clint).then((res) => {
     
        clint.contact = ""
        clint.name = ""
        clint.email = ""
        clint.project = ""
        clint.lastName = ""
    
        document.getElementById("name").value = ""
        document.getElementById("last").value = ""
        document.getElementById("email").value = ""
        document.getElementById("contact").value = ""
        document.getElementById("project").value = ""
        navigate("/")
        }).catch((err) => {
          console.log(err);
        })
      }
    return(
        <>
              <form action="" className='mt-5 w-25 mx-auto my-5'>
            <div className="input-box">
              <input type="text" value={clint.fistName } className='form-control' id="name" required placeholder='name' onInput={(e) => setclint((prev) => ({ ...prev, fistName: e.target.value }))} />
            </div>

            <div className="input-box my-3">
              <input type="text" value={clint.lastName}  className='form-control' id='last' required placeholder='Last Name' onInput={(e) => setclint((prev) => ({ ...prev, lastName: e.target.value }))} />
            </div>

            <div className="input-box my-3">
              <input type="email" value={clint.email}  className='form-control' id='email' required placeholder='email' onInput={(e) => setclint((prev) => ({ ...prev, email: e.target.value }))} />
            </div>

            <div className="input-box my-3">
              <input type="text" value={clint.contact}  className='form-control' id='contact' required placeholder='contact' onInput={(e) => setclint((prev) => ({ ...prev, contact: e.target.value }))} />
            </div>

            <div className="input-box">
              <input type="text" value={clint.project}  className='form-control' id='project' required placeholder='project' onInput={(e) => setclint((prev) => ({ ...prev, project: e.target.value }))} />
            </div>

            <div className="box">
              <button type="button" onClick={EditClintData} >create clint</button>
              {/* <button type="button" onClick={() => navigate("/")} >cancle</button> */}
              <Link to="/"></Link>
            </div>
          </form>
        </>
    )
}