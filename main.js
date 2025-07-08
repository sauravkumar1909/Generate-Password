import react, { useState , useEffect } from "react";
import ReactDOM from "react-dom/client.js";


function PasswordGenerator(){

    const [Password,setPassword] = useState(""); 
    const [length,setlength] = useState(20);
    const [numberchanged,setnumberchanged] = useState(false);
    const [charchanged,setcharchanged] = useState(false);

    function generatepassword(){
        let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if(numberchanged)
            str += "0123456789";
        if(charchanged)
            str += "=-)(*&^%$#@!~{}";
        
        let pass ="";

        for(let i=0;i<length;i++){
            pass += str[Math.floor(Math.random()*str.length)];
        };
       setPassword(pass);
    }

       useEffect(()=>{
        generatepassword();
       },[length,numberchanged,charchanged]);

    return(
        <>

        <h2>Password Generator</h2>
        <h1>{Password}</h1>
        <div className="second">

            <input type="range" min={5} max={50} value={length} onChange={(e)=>setlength(e.target.value)}></input>
            <label>Length ({length})</label>

            <input type="checkbox" defaultChecked={numberchanged} onChange={()=>setnumberchanged(!numberchanged)}></input>
            <label>Number</label>

            <input type="checkbox"  defaultChecked={charchanged} onChange={()=>setcharchanged(!charchanged)}></input>
            <label>Character</label>

        </div>
        </>
    )


}

ReactDOM.createRoot(document.getElementById('root')).render(<PasswordGenerator/>);