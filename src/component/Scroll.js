import React  from "react";

const Scroll=(props)=>{
    return(
        <div className="mostly-customized-scrollbar" style={{overflowY:'scroll',backgroundColor:"rgba(50,50,50,0.4)",border:"3px rgba(50,50,50,0.4) solid ",borderRadius:"10px",height:"450px"}}>
            {props.children}
        </div>
    );
}
export default Scroll;