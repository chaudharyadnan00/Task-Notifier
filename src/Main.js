import React, { useState } from 'react';
import ToDoList from './ToDoList';
import Switch from "react-switch";
// import AddSharpIcon from '@mui/icons-material/AddSharp';
const Main = () => {
    const [total, setTotal] = useState(0);
    const [completed, setCompleted] = useState(0);

    const [items, setItems] = useState([]);

    const [inputList, setInputList] = useState("");

    const itemEvent = (event) => {
        setInputList(event.target.value);
    };

    const listOfItems = () => {
        setItems((oldItems) => {
            const data = {
                description: inputList,
                completed: false
            }
            setTotal(total + 1);
            return [data, ...oldItems];
        });

        setInputList("");
    };

    const deleteItems = (id) => {
        setItems((oldItems) => {
            setTotal(total - 1);
            if (oldItems[id].completed) {
                setCompleted(completed - 1);
            }
            return oldItems.filter((arrElem, index) => { return index !== id; }
            )
        })
    };

    const taskCompletionHandler = (id) => {
        setItems((oldItems) => {
            const pq = oldItems[id];
            pq.completed = !pq.completed;
            oldItems[id] = pq;
            if (oldItems[id].completed === true) {
                setCompleted(completed + 1);
            }
            else {
                setCompleted(completed - 1);
            }
            if (oldItems[id].completed === true) {
                for (let i = id; i < total - completed - 1; i++) {
                    let temp = oldItems[i];
                    oldItems[i] = oldItems[i + 1];
                    oldItems[i + 1] = temp;
                }
            }
            else {
                for (let i = id; i > 0; i--) {
                    let temp = oldItems[i];
                    oldItems[i] = oldItems[i - 1];
                    oldItems[i - 1] = temp;
                }
            }
            return [...oldItems];
        })
    };

    return (
        <>
            <div className='contentDiv'>
                <div className='contentDivInner'>
                    <div className='statusDiv'>
                        <div className='calculationDiv'>
                            <span className='compTotalDiv'>
                                {completed}/{total}
                            </span>
                            <span className='myListDiv'>
                                ..My List
                            </span>
                        </div>
                        <p>
                            <div className='buttonCompletedDiv'>
                                <Switch handleDiameter={15} height={22} width={45} checkedIcon={false} uncheckedIcon={false} disabled={true} checked={total === completed && (total !== 0)} />
                                <div className='completedList'>Completed</div>
                            </div>
                        </p>
                    </div>
                    <div className='todoMainDiv'>
                        <div className='todoInputDiv'>
                            <input type="text" placeholder="Add an Items" value={inputList} onChange={itemEvent} />
                            <button onClick={listOfItems}>Add</button>
                        </div>
                        <div className='card'>
                            {
                                items.map((itemVal, index) => {
                                    return <ToDoList
                                        key={index}
                                        id={index}
                                        text={itemVal}
                                        onSelect={deleteItems}
                                        onCompleted={taskCompletionHandler}
                                    />;
                                })
                            }
                        </div>
                    </div>

                </div>
            </div >
        </>
    )
}
export default Main;
