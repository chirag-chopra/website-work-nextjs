import React from 'react'
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import HeaderTwo from "../component/header/HeaderTwo"
import Link from "next/link"

const Login = () => {
    return (
        <>
            <PageHelmet pageTitle='Login' />

            <HeaderTwo className="mb-5" headertransparent="header--transparent" colorblack="color--black" logoname="logo.png" />
            {/* <h1 className='mt-5'>DOne</h1> */}
            <div className='container'>
                <div className='row justify-content-center mt-3 mb-3' >
                    <div className='col-xl-4 col-lg-6 col-md-6 col-sm-12' style={{ border: "1px solid white", borderRadius: "20px 0px 0px 20px", backgroundImage: `url("https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80")`, backgroundSize: "cover", height: "460px", width: "350px" }}>
                    </div>
                    <div className='col-xl-4 col-lg-6 col-md-6 col-sm-12' style={{ border: "1px solid white", boxShadow: "5px 10px 5px #888888", borderRadius: "0px 20px 20px 0px" }}>
                        <div className="p-3">
                            {/* <img src="../../public/assets/images/avatar.png" height="40px" width="40px" /> */}
                            <p class="">Welcome back!</p>
                            <p class="">Login</p>
                            <form>
                                <div className="mt-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">Email Address
                                    </label>
                                    <input name="email" className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email" />
                                </div>
                                <div className="mt-4">
                                    <div className="flex justify-between">
                                        <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>

                                    </div>
                                    <input name="password" type="password" />
                                    <span class="text-xs text-gray-500"><a href="/forgotpassword/">Forget Password?</a></span><br></br>
                                </div>
                                <button className='btn btn-primary mt-4 mb-4' style={{ width: "full", padding: "8px 24px" }}>Login</button><br></br>
                                <span class="text-xs text-gray-500"><Link href="/register"><a >Don't have account? Create Now</a></Link></span>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Login