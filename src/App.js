import "./App.css";
import InputSection from "./Components/InputSection";
import DonutChart from "./Components/DisplaySection";
import { useState } from "react";

function App() {
  const [earned,setEarned] = useState(0);
  const [ref_earned,setRef_earned] = useState(10);

  const FetcData = (data)=>{
    setEarned(data.grossearning);
    setRef_earned(data.ref_perc)
    console.log(data);
  }
  const donut = [
    {
      name: "Dalal Earning,",
      color: "#05103b",
      value: 49,
      earning: earned,
    },
    {
      name: "Misc fess,",
      color: "#2facff",
      value: 9,
      earning: earned,
    },
    {
      name: "Trander Earnings,",
      color: "#ffcf04",
      value: 32,
      earning: earned,
    },
    {
      name: "Referral Earnings,",
      color: "#ff8900",
      value: 10,
      earning: earned,
    },
  ];

  return (
    <div className="App">
      <div className="container">
        <InputSection onSaveData={FetcData} />
        <DonutChart percent={ref_earned} data={donut} />
      </div>
    </div>
  );
}

export default App;
