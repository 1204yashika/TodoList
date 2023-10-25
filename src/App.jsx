import React, { useState } from "react";
import "./index.css";
import ToDoList from "./ToDoList";
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
    const deleteItem = (id)=>{
        setItems((oldItems)=>{
            return oldItems.filter((arrEl, idx)=>{
                return idx !== id;
            })
        })
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
                        items.map((interval,idx)=>{
                            return <ToDoList key={idx} id={idx} text={interval} onSelect={deleteItem}/>
                        })
                    }
                </ol>
            </div>
        </div>
    )
};

export default App;