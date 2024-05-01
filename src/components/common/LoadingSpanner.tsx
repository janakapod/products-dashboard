import { Box, CircularProgress } from "@mui/material";


export const LoadingSpanner = () => {
    return (<Box sx={{ display: 'flex' }}>
        <CircularProgress />
    </Box>);
}