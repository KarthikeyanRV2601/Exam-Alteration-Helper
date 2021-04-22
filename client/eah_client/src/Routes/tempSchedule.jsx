import React, { useState ,useEffect} from "react";
import Spreadsheet from "react-spreadsheet";
import CSVReader from 'react-csv-reader'
import Matrix from "react-spreadsheet";
export const ExcelRenderer = () =>{
    const [FinalData,setFinalData]=useState([]);
    var [Data,setData]=useState([]);
        useEffect(() => {
            console.log(Data)
        }, [Data])
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
          setData(tempData)
      }
    return(
        <>
            <CSVReader
                cssClass="csv-reader-input"
                label="Select CSV with secret Death Star statistics"
                onFileLoaded={data=>onFileLoaded(data)}
                // onError={this.handleDarkSideForce}
                inputId="ObiWan"
                inputStyle={{color: 'red'}}
            />
            {FinalData.length>0 && <Spreadsheet data={FinalData}/>}
        </>
    )
}
