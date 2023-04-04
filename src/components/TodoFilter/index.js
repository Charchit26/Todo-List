import * as React from 'react';
import {ToggleButton, ToggleButtonGroup} from "@mui/material";
import {TODO_FILTERS} from "../../constants";

export default function TodoFilter({value, onChange}) {
    return (
        <ToggleButtonGroup
            value={value}
            exclusive
            onChange={onChange}
        >
            <ToggleButton value={TODO_FILTERS.ALL}>
                All
            </ToggleButton>
            <ToggleButton value={TODO_FILTERS.REMAINING}>
                Remaining
            </ToggleButton>
            <ToggleButton value={TODO_FILTERS.COMPLETED}>
                Completed
            </ToggleButton>
        </ToggleButtonGroup>
    );
}