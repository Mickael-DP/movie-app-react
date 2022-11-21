import { Box, Typography } from "@mui/material";
import MovieTable from "../../components/MovieTable";
import SearchBar from "../../components/SearchBar";

const Home = () => {
    return (
        <Box textAlign='center'>
            <Typography variant="h4">My Movie App</Typography>
            <SearchBar />
            <MovieTable />
        </Box>
    )
}

export default Home;