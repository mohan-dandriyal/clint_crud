


import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { ClintContext } from '../context/context';
// import { editData, clintData } from './context';


function Clint() {
    
const navigate = useNavigate()
  const [data, setData] = useState([])
  const [clints, setClints] = useContext(ClintContext)

  const [clint, setclint] = useState({
    name: "",
    lastName: "",
    email: "",
    contact: "",
    project: ""
  })

  useEffect(() => {
    fatchData()
  }, [])

  // get all clint 
  const fatchData = () => {
    axios.get("http://localhost:4000/api/v1/clint").then((res) => {
      setData(res.data.data)
    }).catch((err) => {
      console.log(err);
    })
  }

  // create clint 
  const hendleClint = (e) => {
    axios.post("http://localhost:4000/api/v1/create",clint ).then((res) => {
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
      fatchData()
    }).catch((err) => {
      console.log(err);
    })

  }

  // delete clint 
  const deleteClint = (id) => {
    console.log(id);
    axios.delete(`http://localhost:4000/api/v1/delete/${id}` ).then((res) => {
      console.log(res);
      fatchData()
    }).catch((err) => {
      console.log(err);
    }) 
  }


  return (
    <div className="App">

      <div className="row">
        <div className="col-7">

          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Mobail No</th>
                <th>Project</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {
                data.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td key={index}>{ item.fistName}</td>
                      <td> { item.lastName}</td>
                      <td>{ item.email}</td>
                      <td>{ item.contact}</td>
                      <td>{ item.project}</td>

                        <td>
                          <button className='me-2' onClick={() =>{setClints(item); navigate('/edit')}} >Edit</button>
                        <button onClick={()=> {deleteClint(item._id)}}>delete</button>
                        
                        </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>

        <div className="col-4">
          <form action="" className='mt-5'>
            <div className="input-box">
              <input type="text" className='form-control' id="name" required placeholder='name' onInput={(e) => setclint((prev) => ({ ...prev, name: e.target.value }))} />
            </div>

            <div className="input-box my-3">
              <input type="text" className='form-control' id='last' required placeholder='Last Name' onInput={(e) => setclint((prev) => ({ ...prev, lastName: e.target.value }))} />
            </div>

            <div className="input-box my-3">
              <input type="email" className='form-control' id='email' required placeholder='email' onInput={(e) => setclint((prev) => ({ ...prev, email: e.target.value }))} />
            </div>

            <div className="input-box my-3">
              <input type="text" className='form-control' id='contact' required placeholder='contact' onInput={(e) => setclint((prev) => ({ ...prev, contact: e.target.value }))} />
            </div>

            <div className="input-box">
              <input type="text" className='form-control' id='project' required placeholder='project' onInput={(e) => setclint((prev) => ({ ...prev, project: e.target.value }))} />
            </div>

            <div className="box">
              <button onClick={hendleClint} >create clint</button>
            </div>
          </form>
        </div>
      </div>

   
    </div>
  );
}

export default Clint;
