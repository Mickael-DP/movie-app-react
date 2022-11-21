import React from 'react'
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";
import { Search } from "@mui/icons-material"
import { SearchTextContext } from "../../context/SearchContextProvider";

const SearchBar = () => {

    const [input , setInput] = React.useState<string>("");
    const {setSearch} = React.useContext(SearchTextContext);

    // const handleChange = React.useCallback(
    //     (event: React.ChangeEvent<HTMLInputElement>) => {
    //         const value  = event.target.value;
    //         setInputValue(value);
    //     },
    //     [setInputValue]
    // );
    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setInput(event.target.value);
    }

    function handleClick() {
        setSearch(input);

    }

    return(
        <FormControl>
            <OutlinedInput
            onChange={handleChange}
            size="small"
            endAdornment={  
              <InputAdornment position="end">
                <IconButton
                    onClick={handleClick}
                    edge="end"
                >
                    <Search />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
    )
}

export default SearchBar;