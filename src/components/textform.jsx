import React,{useState} from 'react'

function Textform(props) {
    const [text,settext]= useState("");
    const onhandleUp=()=>{
      
        var newtext=text.toUpperCase();
        settext(newtext);
    }
    const onhandle=(event)=>{
     
        settext(event.target.value);

    }
    const onhandleLo=()=>{
        var newtext=text.toLowerCase();
        settext(newtext);
    }
    const onClear=()=>{
        var newtext="";
        settext(newtext);
    }
    const onCopy=()=>{
        var text=document.getElementById("textarea");
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
    }
  return (
  
    <div className='text-content'>
        <div className="text-container">
        <h1>{props.text}</h1>
        <textarea name="" value={text} id="textarea" placeholder='Enter your text here' rows="5" onChange={onhandle}></textarea><br/>
        <button onClick={onhandleUp}>Convert to Uppercase</button>
        <button onClick={onhandleLo}>Convert to Lowwercase</button>
        <button onClick={onClear}>Clear</button>
        <button onClick={onCopy}>Copy</button>

     
        <div className="summary-text">
            <h1>your Text Summary</h1>
            <p>Your Word Count {text.split(" ").length}</p>
            <p>Your Letter Count {text.length}</p>
            <p>You take {0.008 * text.split(" ").length} minute to read.</p>
            <h3>Preview </h3>
            {text}
        </div>
        </div>
       
    </div>
  )
}

export default Textform;