import PageHelmet from "../All Component/component/common/Helmet";
import Breadcrumb from "../All Component/elements/common/Breadcrumb";
import HeaderTwo from "../All Component/component/header/HeaderTwo";
import Link from "next/link";
import styles from "./login.module.css";

const Register = () => {
  return (
    <>
      <PageHelmet pageTitle="Register" />

      <HeaderTwo
        className="mb-5"
        headertransparent="header--transparent"
        colorblack="color--black"
        logoname="logo.png"
      />
      {/* <h1 className='mt-5'>DOne</h1> */}
      <div className="container mt-5">
        <div className="row justify-content-center mt-3 mb-3">
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
              <h4 class="text-center">Trydo</h4>
              <p class="text-center">Create an Account</p>
              <form>
                <div className="">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Email Address
                  </label>
                  <input
                    style={{ backgroundColor: "#dedede" }}
                    className="bg-gray-200 text-gray-700 outline-none shadow-outline border border-gray-300 rounded"
                    name="email"
                    type="email"
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
                  />
                </div>
                <div className="mt-4">
                  <div className="flex justify-between">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Confirm Password
                    </label>
                  </div>
                  <input
                    style={{ backgroundColor: "#dedede" }}
                    className="bg-gray-200 text-gray-700 outline-none shadow-outline border border-gray-300 rounded"
                    name="password"
                    type="password"
                  />
                </div>
                <div className="d-grid gap-2">
                  <button
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

                {/* <span class="text-xs text-gray-500">
                  <Link href="/login" prefetch={false}>
                    <a>Already have account? SignIn</a>
                  </Link>
                </span> */}
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
                <span
                  // className="x-5"
                  style={{
                    background: "#fff",
                    padding: "0 10px",
                    fontSize: "12px",
                    color: "#949494",
                  }}
                >
                  OR LOGIN
                </span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
