import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function CreateProduct() {
    const navigate = useNavigate();
    const [catedata, setCatedata] = useState([]);

    const getApiData = async () => {
        try {
            let res = await axios.get("http://localhost:8000/api/category");
            console.log(res);
            setCatedata(res.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    const [data, setData] = useState({
        categoryname: '',
        machinetype: '',
        invter: '',
        inteldia: '',
        outletdia: '',
        maxdia: '',
        linespeed: '',
        bodysctru: '',
        drawing: '',
        slipratio: '',
        upmotor: '',
        fixspeed: '',
        transtmission: '',
        lubrication: '',
        annealingvoltage: '',
        annealingcurrent: '',
        upbobbinsize: '',
        traversingtype: '',
        tensioncontrol: '',
        brake: '',
        weight: '',
        image1: '',
        image2: '',
        image3: '',
        image4: ''
    });

    const getInputData = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const getInputfile = (e) => {
        const { name, files } = e.target;
        setData({ ...data, [name]: files[0] });
    };

    const postData = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append("categoryname", data.categoryname)
            formData.append("machinetype", data.machinetype)
            formData.append("invter", data.invter)
            formData.append("inteldia", data.inteldia)
            formData.append("outletdia", data.outletdia)
            formData.append("maxdia", data.maxdia)
            formData.append("linespeed", data.linespeed)
            formData.append("bodysctru", data.bodysctru)
            formData.append("drawing", data.drawing)
            formData.append("slipratio", data.slipratio)
            formData.append("upmotor", data.upmotor)
            formData.append("fixspeed", data.fixspeed)
            formData.append("transtmission", data.transtmission)
            formData.append("lubrication", data.lubrication)
            formData.append("annealingvoltage", data.annealingvoltage)
            formData.append("annealingcurrent", data.annealingcurrent)
            formData.append("upbobbinsize", data.upbobbinsize)
            formData.append("traversingtype", data.traversingtype)
            formData.append("tensioncontrol", data.tensioncontrol)
            formData.append("brake", data.brake)
            formData.append("weight", data.weight)
            formData.append("image1", data.image1);
            formData.append("image2", data.image2);
            formData.append("image3", data.image3);
            formData.append("image4", data.image4);
            const res = await axios.post("http://localhost:8000/api/product", formData);
            console.log(res);
            if (res.status === 200) {
                toast.success("New Product created");
                navigate("/product");
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    useEffect(() => {
        getApiData();
    }, []);

    return (
        <div className="container-fluid" style={{ marginTop: 80 }}>
            <div className="row">
                <div className="col-md-3">
                    <Sidebar />
                </div>
                <div className="col-md-9">
                    <h1 className="mt-5">Add A New Machine</h1>
                    <div className="container-fluid">
                        <form onSubmit={postData} className="mt-4">
                            <div className="row">
                                <div className="col-md-4 mb-3">
                                    <label htmlFor="category">Select Product Category</label>
                                    <select name="categoryname" id="category" onChange={getInputData} className="form-control">
                                        <option disabled selected>Choose Category</option>
                                        {
                                            catedata.map((item, index) =>
                                                <option key={index} value={item.categoryname}>{item.categoryname}</option>
                                            )
                                        }
                                    </select>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label htmlFor="name" className="form-label">Machine Type:</label>
                                    <input type="text" id="name" name="machinetype" onChange={getInputData} className="form-control" required />
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label htmlFor="description" className="form-label">Inverter control</label>
                                    <input type="text" name="invter" onChange={getInputData} id="" className='form-control' />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <label htmlFor="">Max. Inlet Dia. (mm)</label>
                                    <input type="text" name='inteldia' onChange={getInputData} className='form-control' />
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="">Outlet Dia. (mm)</label>
                                    <input type="text" name='outletdia' onChange={getInputData} className='form-control' />
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="">Max. Dia. No.</label>
                                    <input type="text" name='maxdia' onChange={getInputData} className='form-control' />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <label htmlFor="">Max. line speed (m/min)</label>
                                    <input type="text" name='linespeed' onChange={getInputData} className='form-control' />
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="">Body structure</label>
                                    <input type="text" name='bodysctru' onChange={getInputData} className='form-control' />
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="">Drawing capstan</label>
                                    <input type="text" name='drawing' onChange={getInputData} className='form-control' />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <label htmlFor="">Slip ratio of m/c (%)</label>
                                    <input type="text" name='slipratio' onChange={getInputData} className='form-control' />
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="">Take-up motor (kw)</label>
                                    <input type="text" name='upmotor' onChange={getInputData} className='form-control' />
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="">Fix speed capstan Dia. (mm)</label>
                                    <input type="text" name='fixspeed' onChange={getInputData} className='form-control' />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <label htmlFor="">Transmission type</label>
                                    <input type="text" name='transtmission' onChange={getInputData} className='form-control' />
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="">Lubrication type</label>
                                    <input type="text" name='lubrication' onChange={getInputData} className='form-control' />
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="">Max. annealing voltage (V)</label>
                                    <input type="text" name='annealingvoltage' onChange={getInputData} className='form-control' />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <label htmlFor="">Max. annealing current (A)</label>
                                    <input type="text" name='annealingcurrent' onChange={getInputData} className='form-control' />
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="">Take-up bobbin size (mm)</label>
                                    <input type="text" name='upbobbinsize' onChange={getInputData} className='form-control' />
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="">Traversing type</label>
                                    <input type="text" name='traversingtype' onChange={getInputData} className='form-control' />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <label htmlFor="">Tension control</label>
                                    <input type="text" name='tensioncontrol' onChange={getInputData} className='form-control' />
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="">Brake</label>
                                    <input type="text" name='brake' onChange={getInputData} className='form-control' />
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="">Weight (KG)</label>
                                    <input type="text" name='weight' onChange={getInputData} className='form-control' />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 mb-3">
                                    <label htmlFor="pic1" className="form-label">Picture 1:</label>
                                    <input type="file" name="image1" onChange={getInputfile} className="form-control" />
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label htmlFor="pic2" className="form-label">Picture 2:</label>
                                    <input type="file" name="image2" onChange={getInputfile} className="form-control" />
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label htmlFor="pic3" className="form-label">Picture 3:</label>
                                    <input type="file" name="image3" onChange={getInputfile} className="form-control" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 mb-3">
                                    <label htmlFor="pic4" className="form-label">Picture 4:</label>
                                    <input type="file" name="image4" onChange={getInputfile} className="form-control" />
                                </div>
                            </div>
                            <button type="submit" className="btn btn-dark w-100" style={{ marginBottom: 100 }}>Add Machine</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateProduct;
