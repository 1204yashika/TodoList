import React from "react";
import "./App.css"
const App = ()=>{
    return (
        <div className="main-div">
            <div className="center-div">
                <h1>ToDo List</h1>
                <br/>
                <input type="text" placeholder="Add a item" onChange={itemEvent}/>
                <button > + </button>
                <ol>
                    <li>ahgoa aohgor hoawg</li>
                </ol>
            </div>
        </div>
    )
};

export default App;