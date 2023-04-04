import {TextField} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import debounce from "lodash.debounce";
import {useCallback} from "react";

export default function SearchBar({setSearchQuery}) {
    const handleDebouncedSearch = (value) => {
            setSearchQuery(value)
    };
    const debouncedChangeHandler = useCallback(
        debounce(handleDebouncedSearch, 500)
        , []);

    return (
        <form>
            <TextField
                id="search-bar"
                className="text"
                onInput={(e) => {
                    debouncedChangeHandler(e.target.value);
                }}
                label="Search"
                variant="outlined"
                placeholder="Search..."
                size="small"
            />
            <IconButton type="submit" aria-label="search">
                <SearchIcon style={{fill: "blue"}}/>
            </IconButton>
        </form>
    );
}