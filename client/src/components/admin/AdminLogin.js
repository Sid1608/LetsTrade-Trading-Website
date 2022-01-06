import React,{useState,useEffect} from 'react'
import { auth, db } from "../../firebase"
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Avatar, Button,Input } from "@material-ui/core";
import "./AdminLogin.css"
function getModalStyle(){
    const top = 50 ;
    const left = 50 ;
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    }, 
  }));
  
function AdminLogin() {
    const classes=useStyles();
  const [modalStyle]=useState(getModalStyle);
  const [open, setOpen]=useState(false);
  const [openSignIn,setOpenSignIn]=useState(false);
  const [username,setUsername]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  /* TO keep track of user */
  const [user,setUser]=useState(null);


     /** authenticate the user*/
  useEffect(()=>{
    /**then functin will listen any authentication changes happen i.e every single time andy changel happen this fireoff*/
   const unsubscribe=auth.onAuthStateChanged( (authUser)=>{
     if(authUser){
       //user has logged in
       console.log(authUser)
       /**it will even survive on refresh let if you login and refresh this will keep you login, state is not persistent but onAuthStateChanges keeps you logi in */
       setUser(authUser);
       if(authUser.displayName){
         //dont update username
       }else{
         // if we just created someone go to the user you just logged in with update their profile 
         return authUser.updateProfile({
           displayName: username
         });
       }
     
     }else{
       //User has logged out
 
       /* IF LOG OUT user will be null */
       setUser(null);
     }
   })
   return ()=>{
    //perform some clean up action before you refire remove spamming
    unsubscribe();
  }
 },[user,username]);
    const signUp=(event)=>{
        event.preventDefault();
        auth
        .createUserWithEmailAndPassword(email,password)
        .then((authUser)=>{
          return authUser.user.updateProfile({
            displayName: username
          })
        })
        .catch((error)=>alert(error.message));
        setOpen(false);
      }
    
      const signIn=(event)=>{
        event.preventDefault();//does not refresh
        auth
        .signInWithEmailAndPassword(email,password)
        .catch((error)=>alert(error.message))
    
        setOpenSignIn(false);
    
      }
    return (
        <div>
            <Modal 
        open={open}
        onClose={()=>setOpen(false)}
       >
    
        
        <div style={modalStyle} className={classes.paper}>
          
          <form className="app_signup">
            <center>
              <img
                className="app__headerImage"
                src="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo1.png"
                // src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                alt=""
              /> 
            </center>
            <Input
              placeholder="username"
              type="text"
              value={username}
              onChange={(e)=>setUsername(e.target.value)}
            />
            <Input
              placeholder="email"
              type="text"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
            <Input
              placeholder="password"
              type="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
            <Button type="submit" onClick={signUp}>SignUp</Button>
          </form>
        </div> 
      
      </Modal>

      {/* sign In Modal */}
      <Modal 
        open={openSignIn}
        onClose={()=>setOpenSignIn(false)}
       >
    
        
        <div style={modalStyle} className={classes.paper}>
          
          <form className="app_signup">
            <center>
              <img
                className="admin__headerImage"
                src="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo1.png"
                // src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                alt=""
              /> 
            </center>
            <Input
              placeholder="email"
              type="text"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
            <Input
              placeholder="password"
              type="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
            <Button type="submit" onClick={signIn}>Admin Login</Button>
          </form>
        </div> 
      
      </Modal>
      {user?(
        <div className="admin__login">
          <div style={{marginRight:"3px"}}>
          <p onClick={()=>auth.signOut()}>Logout</p>
          </div>
          <div>
               {/* <Avatar/> */}
          </div>
          
          
        </div>

        ):(
          <div>
          <div className ="app__loginContainer">
          <p onClick={()=>setOpenSignIn(true)}>Admin Login</p>
          {/* <p onClick={()=>setOpen(true)}>Sign Up</p> */}
          </div>
          {/* <div className ="app__loginContainer"> */}
          {/* <p onClick={()=>setOpenSignIn(true)}>Admin Login</p> */}
          {/* <p onClick={()=>setOpen(true)}>Sign Up</p> */}
          {/* </div> */}
          </div>
        )}
            
        </div>
    )
}

export default AdminLogin
