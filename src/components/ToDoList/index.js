import * as React from 'react';
import {List} from "@mui/material";
import {compareTaskByDueDates} from "../../utils";
import Task from "../Task";

export default function ToDoList({isLoading, todoList, handleDeleteTodo, handleTaskCompletion, handleEditTodoItem}) {
    return (<div>
            {isLoading ? "Loading...." :
                <List sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper', display: "inline-block"}}>
                    {todoList.sort(compareTaskByDueDates).map(todoItem => {
                        return (
                            <Task key={todoItem?.id} taskInfo={todoItem} isEditing={handleEditTodoItem}
                                  onDelete={handleDeleteTodo} onComplete={handleTaskCompletion}/>
                        )
                    })
                    }
                </List>
            }
        </div>
    );
}
