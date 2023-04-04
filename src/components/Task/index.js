import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import {Checkbox, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import dayjs from "dayjs";
import {isDueInNext3days} from "../../utils";

export default function Task({taskInfo, isEditing, onDelete, onComplete}) {
    return (
        <ListItem
            key={"1"}
            disablePadding
        >
            <Card sx={{maxWidth: 345}}
                  onDoubleClick={() => isEditing(taskInfo)}
                  style={{
                width: "100%",
                marginBottom: "5%",
                backgroundColor: decideBackgroundColor(taskInfo.isCompleted, taskInfo.date)
            }}>
                <ListItemButton role={undefined} dense>
                    <ListItemIcon>
                        <Checkbox
                            edge="start"
                            tabIndex={-1}
                            disableRipple
                            onChange={event => onComplete(event.target.checked, taskInfo.id)}
                        />
                    </ListItemIcon>
                    <ListItemText primary={
                        <CardContent>
                            <Typography variant="body2" color="text.secondary" style={{textDecoration: taskInfo.isCompleted && "line-through"}}>
                                {taskInfo?.title}
                            </Typography>
                        </CardContent>
                    }/>
                </ListItemButton>

                <CardActions>
                    <IconButton onClick={() => onDelete(taskInfo?.id)}>
                        <DeleteIcon />
                    </IconButton>
                    <div style={{float: "right", color: "grey", margin: "2% 2% 0 0", marginLeft: "auto"}}>{dayjs(taskInfo.date).format("YYYY-MM-DD")}</div>
                </CardActions>
            </Card>
        </ListItem>
    );
}

function decideBackgroundColor(isCompleted, date) {
    return isCompleted ? "lightgray" : (isDueInNext3days(date) ? "#FFCCCB" : "lightyellow")
}

