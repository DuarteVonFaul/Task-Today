import React from "react";
import "./style.css"


const ViewList = ({disabled, tasks}) => {


    
      return (
        <ul className="view-list"
        style={{ display: !disabled ? 'block' : 'none' }}>
          {tasks.map((item) => (
            <li key={item.id} className={`item ${item.completed ? 'is-completed' : ''}`}>
              <span dangerouslySetInnerHTML={{ __html: item.toString }} ></span>
            </li>
          ))}
        </ul>
      );
    };


export default ViewList;