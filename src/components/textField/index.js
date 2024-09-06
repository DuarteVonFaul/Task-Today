import React from "react";
import "./style.css"


const TextField = ({type, placeholder, onChange}) => {

    return <>
        <input  className="text-field" 
                type={type} 
                placeholder={placeholder}
                onChange={onChange}></input>
    </>

};

export default TextField;