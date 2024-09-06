import React from "react";
import "./style.css";

const TextArea = ({disabled, onChange, placeholder}) => {


    return <textarea className="text-area"
            style={{ display: !disabled ? 'block' : 'none' }}
            onChange={onChange}
            placeholder={placeholder}
            rows={5} />


}


export default TextArea;