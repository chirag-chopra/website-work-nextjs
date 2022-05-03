import PageHelmet from "../All Component/component/common/Helmet";
import { useState } from "react";
import Header from "../All Component/component/header/Header";
import Link from "next/link";
import styles from "./login.module.css";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const router = useRouter();
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (emailAdress) => {
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailAdress.match(regexEmail)) {
      return true;
    } else {
      return false;
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    // validation on client side only
    const isEmailValid = validateEmail(userEmail);

    // actual login

    const data = { email: userEmail, password: userPassword };
    let res = await fetch("http://localhost:3000/api/auth/user-signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    let response = await res.json();
    console.log("FINAL RESP : ", response);
    if (response.success) {
      localStorage.setItem("token", response.token);
      toast.success("Your account has been created!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setTimeout(() => {
        router.push("http://localhost:3000");
      }, 1000);
    }
    // try {
    //   e.preventDefault();
    //   console.log(userEmail, userPassword);
    //   const res = await signIn("credentials", {
    //     username: userEmail,
    //     password: userPassword,
    //     redirect: false,
    //   });
    //   console.log(res);
    //   if (res.error == null) {
    //     router.push("/");
    //   } else {
    //     setError(res.error);
    //   }
    // } catch (error) {}
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <PageHelmet pageTitle="Login" />

      <Header
        headertransparent="header--transparent"
        colorblack="color--black"
        logoname="logo.png"
      />

      <div
        className="breadcrumb-area rn-bg-color ptb--120 bg_image bg_image--1"
        data-black-overlay="6"
      />
      {/* <Breadcrumb title={"Login"} /> */}

      {/* <h1 className='mt-5'>DOne</h1> */}
      <div className="container my-5">
        <div
          styles={{ alignItems: "center" }}
          className="row justify-content-center mt-3 mb-3"
        >
          <div
            className={`${styles.respon} col-xl-4 col-lg-6 col-md-6 col-sm-12`}
            style={{
              border: "1px solid white",
              borderRadius: "10px 0px 0px 10px",
              backgroundImage: `url("https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80")`,
              backgroundSize: "cover",
              height: "520px",
              width: "350px",
            }}
          />
          <div
            className="col-xl-4 col-lg-6 col-md-6 col-sm-12"
            style={{
              border: "1px solid white",
              boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
              borderRadius: "0px 10px 10px 0px",
            }}
          >
            <div className="p-3">
              {/* <img src="../../public/assets/images/avatar.png" height="40px" width="40px" /> */}
              <h4 className="text-center">Trydo</h4>
              <p className="text-center">Welcome Back!</p>
              {error && (
                <div
                  className="alert alert-danger alert-dismissible fade show"
                  style={{ position: "relative" }}
                  role="alert"
                >
                  {error}
                  <button
                    type="button"
                    className="close text-end"
                    data-dismiss="alert"
                    style={{
                      position: "absolute",
                      right: 0,
                      padding: "1px",
                      marginRight: "22px",
                      fontSize: "24px",
                    }}
                    aria-label="Close"
                  >
                    <span aria-hidden="true" onClick={() => setError("")}>
                      ×
                    </span>
                  </button>
                </div>
              )}
              <form onSubmit={(e) => onSubmit(e)} method="POST">
                <div className="">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Email Address
                  </label>
                  <input
                    style={{ backgroundColor: "#dedede" }}
                    className="bg-gray-200 text-gray-700 outline-none shadow-outline border border-gray-300 rounded"
                    name="email"
                    type="email"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mt-4">
                  <div className="flex justify-between">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Password
                    </label>
                  </div>
                  <input
                    style={{ backgroundColor: "#dedede" }}
                    className="bg-gray-200 text-gray-700 outline-none shadow-outline border border-gray-300 rounded"
                    name="password"
                    type="password"
                    value={userPassword}
                    onChange={(e) => setUserPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="d-grid gap-2">
                  <button
                    type="submit"
                    className="btn btn-primary mt-4 mb-4"
                    style={{
                      width: "full",
                      padding: "8px 24px",
                      backgroundColor: "#f81f01",
                      borderColor: "#f81f01",
                    }}
                  >
                    Create Account
                  </button>
                </div>
              </form>
              <h2
                style={{
                  width: "100%",
                  textAlign: "center",
                  borderBottom: "1px solid #dee2e6 ",
                  lineHeight: "0.1em",
                  margin: "10px 0 20px",
                }}
              >
                <Link href="/register">
                  <a>
                    <span
                      style={{
                        background: "#fff",
                        padding: "0 10px",
                        fontSize: "12px",
                        color: "#949494",
                      }}
                    >
                      OR SIGNUP
                    </span>
                  </a>
                </Link>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
