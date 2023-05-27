import React, { useState } from 'react';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CheckBoxRoundedIcon from '@mui/icons-material/CheckBoxRounded';
import CheckBoxOutlineBlankRoundedIcon from '@mui/icons-material/CheckBoxOutlineBlankRounded';
const ToDoList = (props) => {
    const [notification, setNotification] = useState(false);
    const [flag, setFlag] = useState("");
    return (
        <>
            <div>
                <div className='cards' onMouseOver={() => { setFlag("#dbd9d7"); setNotification(true); }}
                    style={{ backgroundColor: flag }}
                    onMouseOut={() => { setFlag("#e8e7e6"); setNotification(false); }}>

                    <div className='leftItem'>
                        <div onClick={() => {
                            props.onCompleted(props.id);
                        }}>
                            {props.text.completed ? <CheckBoxRoundedIcon style={{ color: "#87D56D" }} /> : <CheckBoxOutlineBlankRoundedIcon />}

                        </div>
                        {props.text.description}
                    </div>
                    {notification &&
                        <div>
                            <DeleteOutlineIcon onMouseOver={() => { setNotification(true) }} onClick={() => {
                                props.onSelect(props.id);
                            }} />
                            <NotificationsNoneIcon />
                        </div>
                    }
                </div>
            </div>
        </>
    )
}
export default ToDoList;
