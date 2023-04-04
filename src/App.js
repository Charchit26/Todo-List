import './App.css';
import * as React from "react";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import AddNewTask from "./components/AddNewTask";
import UpdateTaskModal from "./components/UpdateTaskModal";
import TodoFilter from "./components/TodoFilter";
import {TODO_FILTERS} from "./constants";
import ToDoList from "./components/ToDoList";
import SearchBar from "./components/SearchBar";
import SendIcon from '@mui/icons-material/Send';
import {Button} from "@mui/material";

function App() {
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.appState.isLoading)
    const allTodos = useSelector((state) => state.todos)
    const [remainingTodos, setRemainingTodos] = React.useState();
    const [completedTodos, setCompletedTodos] = React.useState();
    const [currentFilter, setFilterValue] = React.useState(TODO_FILTERS.ALL);

    const [searchQuery, setSearchQuery] = React.useState();
    const [isEditing, setIsEditing] = React.useState();

    useEffect(() => {
        dispatch({type: 'todos/getAll'});
    }, [dispatch])

    useEffect(() => {
        setRemainingTodos(allTodos.filter((todoItem) => !todoItem.isCompleted))
        setCompletedTodos(allTodos.filter((todoItem) => todoItem.isCompleted))
    }, [allTodos])
    const handleAddNewTodo = (todoString) => {
        dispatch({type: 'todos/add', payload: todoString});
    }

    const handleDeleteTodo = (id) => {
        dispatch({type: 'todos/delete', payload: id});
    }

    const handleEditTodoItem = (taskInfo) => {
        setIsEditing(taskInfo);
    }

    const handleEditSubmission = ({id, updatedTitle, updatedDate}) => {
        dispatch({type: 'todos/edit', payload: {id, updatedTitle, updatedDate}});
        setIsEditing(undefined);
    }

    const handleTaskCompletion = (checked, id) => {
        dispatch({type: 'todos/complete', payload: {isCompleted: checked, id}});
    }

    const handleChangeFilter = (e, newFilterValue) => {
        setFilterValue(newFilterValue);
    }

    const handleSaveBtnClick = () => {
        dispatch({type: 'todos/save', payload: allTodos});
    }

    return (
        <div className="App" style={{textAlign: "center"}}>
            <AddNewTask onSubmit={handleAddNewTodo}/> <br/>
            <SearchBar setSearchQuery={setSearchQuery} /> <br/>
            <TodoFilter value={currentFilter} onChange={handleChangeFilter}/><br/>
            <Button onClick={handleSaveBtnClick}>
                Save <SendIcon />
            </Button>
            <ToDoList handleDeleteTodo={handleDeleteTodo} handleEditTodoItem={handleEditTodoItem}
                      handleTaskCompletion={handleTaskCompletion} isLoading={isLoading}
                      todoList={getFilteredList(allTodos, remainingTodos, completedTodos, currentFilter, searchQuery)}/>
            {isEditing &&
                <UpdateTaskModal onSubmit={handleEditSubmission} taskInfo={isEditing}/>
            }
        </div>
    );
}

export default App;

function getFilteredList(allTodos, remainingTodos, completedTodos, selectedFilter, searchQuery) {
    let filteredList
    if (selectedFilter === TODO_FILTERS.COMPLETED)
        filteredList = completedTodos
    else if (selectedFilter === TODO_FILTERS.REMAINING)
        filteredList = remainingTodos
    else
        filteredList = allTodos

    if(searchQuery) {
        filteredList = filteredList.filter((todoItem) => todoItem.title?.toLowerCase().includes(searchQuery));
    }
    return filteredList
}