import { Box } from "@mui/material";
import { ReactNode } from "react";

interface BoxAlignmentCenterProps {
    children: ReactNode;
}

export const BoxAlignmentCenter = ({ children }: BoxAlignmentCenterProps) => {

    return (<Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexGrow={1}
    >
        {children}

    </Box>);
}