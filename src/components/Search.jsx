import {TextField} from "@mui/material";

const Search = (props) => {
    const { onChange, value } = props;

    return <TextField fullWidth
                      label="search"
                      type='search'
                      sx={{mb:'1.5rem'}}
                      value={value}
                      onChange={onChange}
    />;
};

export default Search;