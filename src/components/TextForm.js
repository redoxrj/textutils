import React,{useState} from "react";

export default function TextForm(props) {
    // by default all normal variables are not upadated with page reloading by react but state variables {hooks} are upadated by react without page  reloading
    const upClick=()=>{
        // console.log("that button was clicked" , Text);
        let upperCase = Text.toUpperCase()
        setText(upperCase)
        props.showAlert('success','Text to UpperCase done') 
        
    }
    const lowClick=()=>{
        // console.log("that button was clicked" , Text);
        let lowerCase = Text.toLowerCase()
        setText(lowerCase)
        props.showAlert('success','Text to LowerCase done') 

        
    }
    const clearText=()=>{
       
        setText("")
        props.showAlert('primary','All Cleared') 
        
    }
    const copy=()=>{
        // let text = document.getElementById("yoyo")
        // text.select()
        // navigator.clipboard.writeText(text.value)
        navigator.clipboard.writeText(Text)
        props.showAlert('success','Text Copied to your clipboard') 

    }
    const remove=()=>{
        let cleantext =Text.replace(/  +/g, ' ');
        setText(cleantext)
        props.showAlert('success','All spaces from text are removed') 

    }
    // setText original Text ki value upadate krney mien kaam aati hia Original Text hi update hota hai so original Text hi print hoga if we try to print ,setText cannot be printed it just a medium/refernce/way to update the original Text
    // setText just dispplay the updated value on the screen
    const handleOnChange=(e)=>{
        // console.log("change hua hia kuch");
        // pehley to set text ki value thi + jo abhi event se jo value aayi
        // isesey setText(ki value) bhi upadte hoti jaayegi[Actually mien original Text hi hai jo update hota h] , new SetText() each time
        setText(e.target.value) 

    }
   // Text ek default originla value hogi and setText ek function joki is original Text ko update krtety rhega
    const [Text, setText] = useState("");
    // setText("ok")
    return (
        <>
        <div style={{backgroundColor : props.mode==='dark'?'#252f3e':'white', color : props.mode==='dark'?'white':'black'}}>
            <div className="container my-4">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        id="yoyo"
                        rows="8"
                        value={Text}
                        placeholder="Enter text here"
                        onChange={handleOnChange}
                        style={{backgroundColor : props.mode==='dark'?'#454a7e':'white', color : props.mode==='dark'?'white':'black'}}
                        
                    ></textarea>
                </div>
            <button disabled={Text.length===0} className="btn btn-primary mx-2 my-1" onClick={upClick}>Convert to UpperCase</button>
            <button disabled={Text.length===0} className="btn btn-success mx-2 my-1" onClick={lowClick}>Convert to LowerCase</button>
            <button disabled={Text.length===0} className="btn btn-danger mx-2 my-1" onClick={clearText}>Clear All</button>
            <button disabled={Text.length===0} className="btn btn-info mx-2 my-1" onClick={copy}>Copy to clipboard</button>
            <button disabled={Text.length===0} className="btn btn-warning mx-2 my-1" onClick={remove}>Remove Spaces</button>
          
            </div>
            <div className="container">
                <h2>Your Text Summary</h2>
                 {/* split by white space including new line regular expresison (regex) */}
                <p>Your Text has {Text.split(/\s+/).filter((element)=>{return element.length!==0}).length  } words and {Text.length} chaaracters</p>
                <h2>Preview</h2>
                {/* <h2>{Text.length>0?'Preview':'Enter something for preview'}</h2> */}
                <p>{Text.length>0?`${Text}`:'nothing for preview'}</p>
            </div>
            
        </div>
        </>
    );
}
