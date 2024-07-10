import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { addUser } from '../Redux/Action/action'

const Add = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [name, setName] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        let obj = {
            name: name,
        }
        dispatch(addUser(obj))
        alert("record added...")
        navigate('/')
        setName('')
    }


    return (
        <div>
            <header style={{backgroundColor : "rgb(68 68 68)", padding:"15px"}}>
                <div className="header d-flex justify-content-between align-items-center">
                    <div className="col-3 logo">
                        <h2 style={{ color: "#fff", fontSize: "50px" }} >Todo List</h2>
                    </div>

                    <div className="col-3  d-flex justify-content-end">
                        <Link to={`/view`} className="btn btn-primary" style={{ color: "#fff", width: "80px" }}>View</Link>
                    </div>
                </div>
            </header>



            <div className="container">
                <div className="row">

                    <div className="col-lg-6 mx-auto mt-5 p-3 shadow">

                        <form onSubmit={handleSubmit}>

                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setName(e.target.value)} value={name} />
                            </div>

                            <button type="submit" className="btn" style={{backgroundColor : "rgb(68 68 68)", color:"#fff"}}>Submit</button>

                        </form>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Add
