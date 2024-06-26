import React, { useState } from 'react'

const Login = () => {
  const [isLogin, setIsLogin] = useState(false)
  const [data, setData] = useState({
    email: "",
    password: ""
  })
  const getInputData = (e) => {
    const { name, value } = e.target
    setData({ ...data, [name]: value })
  }
  const postData = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    const validEmail = "admin@gmail.com";
    const validPassword = "Mannu@2207";

    try {
      if (email === validEmail && password === validPassword) {
        setIsLogin(true)
        sessionStorage.setItem("login", true)
        window.location.href="/home"
      } else {
        alert("Invalid email or password");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="container" style={{ marginTop: "100px" }}>
        <div className="row">
          <div className="col-md-12">
            <h5 className='text-center'>Login</h5>
          </div>
          <div className="col-md-12">
            <form action="" onSubmit={postData}>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" name='email' class="form-control" placeholder="Email Address" onChange={getInputData} />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Password</label>
                <input type="password" name='password' class="form-control" placeholder="password" onChange={getInputData} />
              </div>
              <div class="mb-3">
                <button className='btn btn-dark'>Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login