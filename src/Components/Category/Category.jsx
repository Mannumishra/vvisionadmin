import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar'
import { Link } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'

const Category = () => {
    const token = sessionStorage.getItem("token")
    const [data, setData] = useState([])
    const getApiData = async () => {
        try {
            let res = await axios.get("http://localhost:8000/api/category/api/category")
            console.log(res)
            setData(res.data.data)
        } catch (error) {
            console.log(error);
        }
    }
    const deleteRecord = async (_id) => {
        try {
            let res = await axios.delete("http://localhost:8000/api/category/api/category/" + _id )
            if (res.status === 200) {
                toast.success("Category Deletd Succssfully")
            }
            getApiData()
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getApiData()
    }, [])
    return (
        <>
            <div className="container-fluid" style={{ marginTop: 80 }}>
                <div className="row">
                    <div className="col-md-3">
                        <Sidebar />
                    </div>
                    <div className="col-md-9">
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <h2>Product Category</h2>
                            <span><Link to='/createcategory' className='btn btn-dark'>Create Product Category</Link></span>
                        </div>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Image</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.categoryname}</td>
                                        <td>{item.description}</td>
                                        <td><img src={item.image} alt="" style={{height:100}}/></td>
                                        <td>
                                            <Link to={`/updatecategory/${item._id}`}>
                                                <button className='btn btn-success'>Edit</button>
                                            </Link>
                                        </td>
                                        <td>
                                            <button className='btn btn-danger' onClick={() => { deleteRecord(item._id) }}>Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Category