import { Backdrop, CircularProgress } from "@mui/material";

export const AppBackdrop = () => {
  return (<Backdrop
    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
    open
  >
    <CircularProgress color="inherit" />
  </Backdrop>);
}