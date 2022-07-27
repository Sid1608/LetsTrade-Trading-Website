import { useState } from "react";
import { Link,useNavigate} from "react-router-dom";
import styles from "./styles.module.css";
import axios from "axios"
function Signup() {
	const [data,setData]=useState({
		firstName:"",
		lastName:"",
		email:"",
		password:""
	})
	const navigate=useNavigate();
	
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
    console.log(data)
		const url="http://localhost:8081/api/auth/register"
		const{data:res}=await axios.post(url,data);
		console.log(res.message)
		navigate("/login",{ replace: true })
		
		
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
      {/* <h1 className={styles.heading}>Sign up Form</h1> */}
      <div className={styles.form_container}>
        <div className={styles.left}>
          <img className={styles.img} src="./images/signup.jpg" alt="signup" />
        </div>
        <div className={styles.right}>
          <h2 className={styles.from_heading}>Create Account</h2>
          <input
            type="text"
            name="firstName"
            value={data.firstName}
			onChange={handleChange}
            className={styles.input}
            placeholder="First Name"
			required
          />
          <input
            type="text"
            name="lastName"
            value={data.lastName}
			onChange={handleChange}
            className={styles.input}
            placeholder="Last Name"
			required
          />
          {/* <input type="text" className={styles.input} placeholder="Username" /> */}

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
          <button type="submit" onClick={handleSubmit} className={styles.btn}>Sign Up</button>
          <p className={styles.text}>or</p>
		  
          <button className={styles.google_btn} onClick={googleAuth}>
            <img src="./images/google.png" alt="google icon" />
            <span>Sign up with Google</span>
          </button>
          <p className={styles.text}>
            Already Have Account ? <Link to="/login">Log In</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
