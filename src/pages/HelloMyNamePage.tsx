import { useState } from "react"; 
export default function HelloMyNamePage() {
  const [name, setName] = useState("");

 
  const nameInputOnchange = (event: any) => {
   
    setName(event.target.value);
  };
  const [Result, setResult] = useState("Please insert your name");
  const [isGreeOk, setGreetOk] = useState(false);
  const greetBtnOnclike = () => {
    if (name == "") {
      setResult("Please insert your name");
      setGreetOk(false);
    } else {
      setResult(`Hello ${name}`);
      setGreetOk(true);
    }
  };
  return (
    <div className="container text-center">
      <h3>Hello My Name</h3>
      <input
        className="form-control d-inline m-1"
        placeholder="Insert your name here!"
        style={{ width: "300px" }}
        onChange={nameInputOnchange}
        value={name}
      />
      <button className="btn btn-primary" onClick={greetBtnOnclike}>
        Greet Me
      </button>
      <p className={isGreeOk ? "" : "text-danger"}>{Result}</p>
    </div>
  );
}
