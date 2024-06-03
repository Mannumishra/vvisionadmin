import React, { useState } from 'react'
import Sidebar from '../Sidebar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const CreateCategory = () => {
    const [data, setData] = useState({
        categoryname: "",
        image: ""
    })
    const navigate = useNavigate()
    const getInputData = (e) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })
    }
    const getFileData = (e) => {
        const { name, files } = e.target
        setData({ ...data, [name]: files[0] })
    }
    const postData = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append("categoryname", data.categoryname)
        formData.append("image", data.image)
        try {
            let res = await axios.post("http://localhost:8000/api/category", formData)
            console.log(res)
            if (res.status === 200) {
                toast.success("Product Category is created")
                navigate("/category")
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <div className="container-fluid" style={{ marginTop: 80 }}>
                <div className="row">
                    <div className="col-md-3">
                        <Sidebar />
                    </div>
                    <div className="col-md-9">
                        <h2 className=' p-2 text-dark text-center'>Create Product Category</h2>
                        <div className="form-container">
                            <form onSubmit={postData}>
                                <div className="mb-2">
                                    <label htmlFor="productName" className="form-label">Product Category Name</label>
                                    <input type="text" name="categoryname" id="productName" className="form-control" onChange={getInputData} />
                                </div>
                                <div className="mb-2">
                                    <label htmlFor="productName" className="form-label">Product Category Image</label>
                                    <input type="file" name="image" id="productName" className="form-control" onChange={getFileData} />
                                </div>
                                <button type="submit" className="btn btn-dark w-100">Add Product Category</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateCategory