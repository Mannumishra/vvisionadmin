import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar'
import axios from 'axios'

const Contact = () => {
    const [data,setData] = useState([])

    const getApiData = async()=>{
        try {
           let res = await axios.get("http://localhost:8000/api/category/api/contact")
           console.log(res) 
           setData(res.data.data)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        getApiData()
    },[])
  return (
   <>
   <div className="container-fluid" style={{marginTop:80}}>
    <div className="row">
        <div className="col-md-3">
            <Sidebar />
        </div>
        <div className="col-md-9">
        <div className='text-center fs-4 mb-2'>Contact List</div>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th>Company Name</th>
                        <th>Message</th>
                        <th>Data</th>
                        {/* <td>Action</td> */}
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item,index)=>
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td>{item.companyname}</td>
                            <td>{item.business}</td>
                            <td>{new Date(item.updatedAt).toLocaleDateString().toLowerCase()}</td>

                            {/* <td><button className='btn btn-danger'>Delete</button></td> */}
                        </tr>
                    )
                    }
                </tbody>
            </table>
        </div>
    </div>
   </div>
   </>
  )
}

export default Contact