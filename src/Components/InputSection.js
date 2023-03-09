import "./InputSection.css";
import { useState } from "react";

function InputSection(props) {
  const [grossearning,SetGrosearning] = useState(2500);
  const [ref_perc,SetRef_per] = useState(10);
  
  const onChangeHandler1=(e)=>{
    SetGrosearning(e.target.value);
  }
  const onChangeHandler2=(e)=>{
    SetRef_per(e.target.value);
  }
  props.onSaveData({grossearning,ref_perc});

  return (
    <>
      <div className="right-container">
        <div className="input-field">
          <div className="input-text" >
            <h4>Gross Earnings : </h4>
            <h4 style={{marginTop:'5px'}} >Referral % : </h4>
          </div>
          <div className="input-area" >
            <input value={grossearning} type="text" placeholder="Enter Number" onChange={onChangeHandler1}></input>
            <input  type="text" style={{marginTop:'5px'}}  placeholder="Enter Number" onChange={onChangeHandler2} ></input>
          </div>
        </div>
      </div>
    </>
  );
}

export default InputSection;
