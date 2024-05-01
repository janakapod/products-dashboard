import { Box, Typography, Divider } from "@mui/material";

interface FilterPanelHeaderProps {
    header?: string;
};

/**
 * Filter Panel's header
 */
export const FilterPanelHeader = ({ header }: FilterPanelHeaderProps) => {
    return (<>
        <Box
            height="4rem"
            display="flex"
            alignItems="center"
            pl={1}
        >
            <Typography variant="h5" noWrap component="div">
                {header}
            </Typography>
        </Box>
        <Divider />
    </>);
};