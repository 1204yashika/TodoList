import React, { useState } from "react";
import "./App.css"
const App = ()=>{
    const [inputList, setInputList] = useState("");
    const [items, setItems]=useState([]);
    const itemEvent= (event)=>{
        setInputList(event.target.value);
    }
    const listOfItems=()=>{
        setItems((oldItems)=>{
            return inputList!==""?[...oldItems,inputList]:[...oldItems];
        })
        setInputList("");
    }
    return (
        <div className="main-div">
            <div className="center-div">
                <h1>ToDo List</h1>
                <br/>
                <input type="text" placeholder="Add a item" value={inputList} onChange={itemEvent}/>
                <button onClick={listOfItems}> + </button>
                <ol>
                    {
                        items.map((interval)=>{
                            return <li>{interval}</li>;
                        })
                    }
                    <li>{inputList}</li>
                </ol>
            </div>
        </div>
    )
};

export default App;