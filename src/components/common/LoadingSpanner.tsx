import { Box, CircularProgress } from "@mui/material";


export const LoadingSpanner = () => {
    return (<Box display="flex" flexGrow="1" alignContent="center" justifyContent="center">
        <CircularProgress />
    </Box>);
}