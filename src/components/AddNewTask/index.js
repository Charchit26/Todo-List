import * as React from 'react';
import {Button, TextField} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import {useState} from "react";
import {v4 as uuidv4} from 'uuid';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from "dayjs";

export default function AddNewTask({onSubmit}) {

    const [newTodoText, setNewTodoText] = useState("");
    const [newTodoDate, setNewTodoDate] = useState(dayjs(Date.now()));

    function handleTextChange(event) {
        setNewTodoText(event.target.value)
    }

    function handleSubmit() {
        onSubmit({id: uuidv4(), title: newTodoText, date: newTodoDate, important: false})
    }

    return (
        <div style={{marginTop: "2%"}}>
            <TextField
                id="standard-name"
                label="Type your new todo task here..."
                style={{width: "60%"}}
                onChange={handleTextChange}
                variant="standard"
                InputProps={{
                    endAdornment: <>
                        <DatePicker  value={newTodoDate}
                                     onChange={(newValue) => setNewTodoDate(newValue)} />
                        </>
                }}
            />
                <Button variant="outlined" startIcon={<AddIcon/>}
                        onClick={handleSubmit} style={{margin: "25px 0 0 1%"}}>
                Add
            </Button>

        </div>
    );
}