import { useState } from "react";
import { Link  } from "react-router-dom";
import axios from "axios"
import styles from "./styles.module.css";

function Login({setUser,setIsAdmin}) {
	const [data,setData]=useState({
		email:"",
		password:""
	})
	// const navigate=useNavigate();
	const [error, setError] = useState("");
  const googleAuth = () => {
    window.open(
      `${process.env.REACT_APP_API_URL}/auth/google/callback`,
      "_self"
    );
  };
  const handleChange=(e)=>{
	const {name,value}=e.target
	setData({...data,[name]:value})
  }
  const handleSubmit=async()=>{
	try{
    console.log("inside login")
		const url="http://localhost:8081/api/auth/login"
		const{data:res}=await axios.post(url,data);
    console.log(res.data);
    setUser(true);
		localStorage.setItem("token",res.data)
    localStorage.setItem("isLoggedIn", "true");
    // setUser(true);
		window.location='/'
		console.log(res.message)
	}catch(error){
		if (
			error.response &&
			error.response.status >= 400 &&
			error.response.status <= 500
		) {
			setError(error.response.data.message);
		}
	}
	
  }
 

  return (
	
    <div className={styles.container}>
      {/* <h1 className={styles.heading}>Log in Form</h1> */}
      <div className={styles.form_container}>
        <div className={styles.left}>
          <img className={styles.img} src="./images/login.jpg" alt="login" />
        </div>
        <div className={styles.right}>
          <h2 className={styles.from_heading}>Members Log in</h2>
          <input 
		  	type="text" 
			name="email"
			value={data.Email}
			onChange={handleChange}
			className={styles.input} 
			placeholder="Email" 
			required
		   />
          <input
            type="password"
			name="password"
			value={data.Password}
			onChange={handleChange}
            className={styles.input}
            placeholder="Password"
			required
          />
          
		  {error && <div className={styles.error_msg}>{error}</div>}
		  
          <button className={styles.btn} onClick={handleSubmit}>
            Log In
          </button>
          <p className={styles.text}>or</p>
          <button className={styles.google_btn} onClick={googleAuth}>
            <img src="./images/google.png" alt="google icon" />
            <span>Sign in with Google</span>
          </button>
          <p className={styles.text}>
            New Member ? <Link to="/signup">Join Now</Link>

            <Link to="/forgot-password" style={{ alignSelf: "flex-start" }}>
							<p style={{ padding: "0 15px" }}>Forgot Password ?</p>
						</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
