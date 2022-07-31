import React ,{useState,useEffect}from 'react'
import firebase from "firebase"
import './css/Shareholding.css'
import FormData from 'form-data'
import { Header, Image, Segment,Button,Input } from 'semantic-ui-react'
import { storage, db} from "../../../firebase";
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux';
import { uplodDocument } from '../../../redux/apiCalls'
// import {PieChart,Pie,Tooltip} from "recharts";
function Shareholdings({company,id}) {
    
    const [Snapshots,setSnapshots] = useState("");
    const [url, setUrl]=useState("");
    const [image,setImage]=useState(null)
    const dispatch=useDispatch()
    const currentCompany=useSelector((state) => state.company.currentCompany);


    const user=useSelector(state=>state.user.currentUser);
    const isAdmin=user?._doc?.isAdmin;
    // const [id,setId]=useState(null)
    
    const handleChange =(e)=>{ 
        if(e.target.files[0]){
            setImage(e.target.files[0]);
        }
    };
    const AddImage = () => {
        var formData = new FormData();
      formData.append("Shareholdings",image);
      uplodDocument(dispatch,"UploadShareHoldings",currentCompany._id,formData);
    }
        return (
            <div id="company-about-container" style={{width:"955px"}}>
                <Segment>
                    <h1>Shareholdings</h1>
                    <Image src={company.Shareholding}/>
                </Segment>


                { isAdmin&&(<Segment>
        <input type="file" onChange={handleChange} />
          {/* <Button onClick={AddImage}>Add Balancesheets</Button> */}
          <Button className="imageupload__button" onClick={AddImage}>
            Upload
          </Button>
          <Button onClick={(e)=>{
              db.collection("companies").doc(id).update({
                  Shareholding:""
              })
          }}>Drop</Button>
                    {/* <div className="shareholding">
                        <div >

                        <table>
                            <tr>
                                <th>Name of the shareholder</th>
                                <th>Holdings (%)</th>
                            </tr>
                            <tr>
                                <td>Priti Pradeep Gupta</td>
                                <td>3.72%</td>
                               
                            </tr>
                            <tr>
                                <td>Supriya Rathi</td>
                                <td>3.65%</td>
                              
                            </tr>
                            <tr>
                                <td>P.K. Gupta & Sons</td>
                                <td>1.86%</td>
                                
                            </tr>
                            <tr>
                                <td>"N.M.Gupta& Sons</td>
                                <td>1.72%</td>
                                
                            </tr>
                            </table>

                        </div>
                        <div>
                            <PieChart width={400} height={400}>
                                <Pie
                                    dataKey="value"
                                    isAnimationActive={false}
                                    data={data}
                                    cx={200}
                                    cy={200}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    label
                                />
                                <Tooltip />
                            </PieChart>
                        </div>
                    </div> */}
                    {/* {company["Shareholdings"]} */}
                </Segment>)}
            </div>
        );
}

export default Shareholdings

