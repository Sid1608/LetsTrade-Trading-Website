import React,{useState,useEffect} from 'react';
import { Header, Image, Segment,Button,Input } from 'semantic-ui-react'
import { storage, db} from "../../../firebase";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import "./css/Financial.css"
import { useDispatch, useSelector } from 'react-redux';
import firebase from "firebase"
import axios from "axios"
import { uplodDocument } from '../../../redux/apiCalls';
function FinancialSnapshot({company}) {
    const [Snapshots,setSnapshots] = useState("");
    const [url, setUrl]=useState("");
    const [image,setImage]=useState(null)
    const dispatch=useDispatch()
    const currentCompany=useSelector((state) => state.company.currentCompany);
    
    const [id,setId]=useState(null)
    const user=useSelector(state=>state.user.currentUser);
    const isAdmin=user?._doc?.isAdmin;
    // const [pe,setPE] = useState("");
    // const [ps, setPS] = useState("");
    // const [pb,setPB] = useState("");
    // const [IndustryPE, setIndustryPE] = useState("");
    // const [FaceValue, setFaceValue] = useState("");
    // const [BookValue, setBookValue] = useState("");
    // const [MarketCap, setMarketCap] = useState("");
    // const [Dividend, setDividend] = useState("");
    // const [DividendYield, setDividendYield] = useState("");
    // useEffect(() => {
    //     let a = "",b="",cc="",d="",e="",f="",g="",h="",i=""
    //     const ln = about_companies.length
    //     for(let i=0; i<ln; i++){
    //         const c = about_companies[i];
    //         if (c['Company Name'] === company["Company Name"]) {
    //             a=c["P/S"];
    //             b=c["P/B"]
    //             cc=c["P/E"]
    //             d=c["Industry PE"];
    //             e=c["Face Value"];
    //             f=c["Book Value"]
    //             g=c["Market Cap"];
    //             h=c["Dividend"];
    //             i=c["Dividend Yield"];


                
    //             break
    //         }
    //     }

    //     setPS (a);
    //     setPB(b);
    //     setPE(cc);
    //     setIndustryPE(d);
    //     setFaceValue(e);
    //     setBookValue(f);
    //     setMarketCap(g);
    //     setDividend(h);
    //     setDividendYield(i);
        
    // }, []);
    const handleChange =(e)=>{ 
        if(e.target.files[0]){
            setImage(e.target.files[0]);
        }
    };
    const AddImage = () => {
      var formData = new FormData();
      formData.append("FinancialSnapshot",image);
    uplodDocument(dispatch,"UploadFinancialSnapshot",currentCompany._id,formData)

    }
   
    return (
        <div >
        <Segment>
        <Image src={company.FinancialSnapshot}/>
        </Segment>

        {isAdmin&&(
        <Segment>
        <input type="file" onChange={handleChange} />
          {/* <Button onClick={AddImage}>Add Balancesheets</Button> */}
          <Button className="imageupload__button" onClick={AddImage}>
            Upload
          </Button>
          <Button onClick={(e)=>{
              db.collection("companies").doc(id).update({
                  FinancialSnapshot:""
              })
          }}>Drop</Button>
            {/* <table className="snapshot">
                        <tr>
                            <td>P/E</td>
                            <td>{Snapshots[0]}</td>
                            <td>P/S</td>
                            <td>{Snapshots[1]}</td>
                            <td>P/B</td>
                            <td>{Snapshots[2]}</td>
                           

                        </tr>
                        <tr>
                            <td>Industry PE</td>
                            <td>{Snapshots[3]}</td>
                            <td>Face Value</td>
                            <td>{Snapshots[4]}</td>
                            <td>Book Value</td>
                            <td>{Snapshots[5]}</td>

                        </tr>
                        <tr>
                            <td>Market Cap</td>
                            <td>{Snapshots[6]}</td>
                            <td>Dividend</td>
                            <td>{Snapshots[7]}</td>
                            <td>Dividend Yield</td>
                            <td>{Snapshots[8]}</td>

                        </tr>
                        
                    </table> */}
                    </Segment>)}
        </div>
    )
}

export default FinancialSnapshot
