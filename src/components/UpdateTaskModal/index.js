import * as React from 'react';
import {useState} from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {Button, TextField} from "@mui/material";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
export default function UpdateTaskModal({taskInfo, onSubmit}) {
    const [todoText, setTodoText] = useState(taskInfo?.title);

    function handleChange(event) {
        setTodoText(event.target.value)
    }

    const handleSubmit = () => {
        onSubmit({id: taskInfo.id, updatedTitle: todoText, updatedDate: taskInfo.date})
    }
    return (
        <Modal
            open={true}
            onClose={handleSubmit}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <TextField
                    id="standard-name"
                    label="To Do"
                    style={{width: "100%"}}
                    value={todoText}
                    onChange={handleChange}
                    InputProps={{
                        endAdornment: <Button variant="outlined"
                                              onClick={handleSubmit}>
                            Update
                        </Button>
                    }}
                />
            </Box>
        </Modal>
    );
}