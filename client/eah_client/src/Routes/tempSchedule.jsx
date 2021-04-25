import React, { useState ,useEffect} from "react";
import Spreadsheet from "react-spreadsheet";
import CSVReader from 'react-csv-reader'
import Matrix from "react-spreadsheet";
import '../components/ExamSchedule_Components/styles/style.css';
import {NavbarComponent} from '../components/NavbarSupervisor';
import axios from 'axios';
export const ExcelRenderer = () =>{
    const [FinalData,setFinalData]=useState([]);
    const [userIDMap,setUserIdMap]=useState({});
    useEffect(async () => {
        let res=await axios.get('/schedule/get_id');
        setUserIdMap(res.data.data);
    }, [])
    var GetData=async ()=>{

            let trs=document.querySelectorAll("tr");
            let data=[]
            let dataStructure={
                0: "exam_name",
                1: "date",
                2: "duration",
                3: "class_room",
                4: "block",
                5: "user_name"
            }
            for (let i=2;i < trs.length;++i)
                {
                let trCells=trs[i].children;
                let tempDict={}
                for (let j=1;j < trCells.length;++j)
                {
                    tempDict[dataStructure[j-1]]=trCells[j].innerText
                }
                if(tempDict.user_name in userIDMap)
                {
                    tempDict["userID"]=userIDMap[tempDict.user_name];
                    tempDict["date"]=new Date(tempDict["date"])
                    data.push(tempDict)
                }
                
            }
            let res=await axios.post('/schedule/list',data);
            // console.log(data);

            return data
            //api post data 
        }
      const RangeEdit = ({ cell, onChange }) => (
        
        <input
          type="text"
          onChange={(e) => {
            onChange({ ...cell, value: e.target.value });
          }}
          style={
              {
                  width:"100%",
                  outline:"none",
                  border:"none"
              }
          }
          value={cell.value || 0}
          autoFocus
        />
      );
      
      var onFileLoaded=(data)=>{
          let tempData=[]
          let i=0
          data.forEach(row=>{
              let DataRow=[]
              let j=0
              row.forEach(cell=>{
                  
                  DataRow.push({
                      value:cell,
                      DataEditor: RangeEdit,
                      position:{i:i,j:j}
                  })
                  j+=1
              })
              i+=1
              tempData.push(DataRow)
          })
          setFinalData(tempData)
      }
    return(
        <>
                <NavbarComponent/>
               
                <div className="Examschedule_Page">
                    <h2 className="Title">
                            Schedule exams here
                    </h2>
                    <CSVReader
                        cssClass="csv-reader-input"
                        label="Upload timetable csv file"
                        onFileLoaded={data=>onFileLoaded(data)}
                        // onError={this.handleDarkSideForce}
                        inputId="ObiWan"
                        inputStyle={{
                            
                            
                        }}
                    />
                    
                    {FinalData.length>0 && 
                    <>
                        <div className="SpreadSheetWrap">
                            <Spreadsheet data={FinalData}/>
                        </div>
                        
                        <button onClick={e=>GetData()} className="updateButton">Update exam schedule</button>
                    </>
                        }
                </div>
        </>
    )
}
