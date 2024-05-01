import { Box, Typography, Divider, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

interface FilterPanelHeaderProps {
    header?: string;
    triggerDrawerClose?: () => void;
};

/**
 * Filter Panel's header
 */
export const FilterPanelHeader = ({ header, triggerDrawerClose }: FilterPanelHeaderProps) => {
    const onCloseButtonClick = () => {
        triggerDrawerClose?.();
    }

    return (<>
        <Box
            height="4rem"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            pl={1}
        >
            <Typography variant="h5" noWrap component="div">
                {header}
            </Typography>
            <IconButton onClick={onCloseButtonClick} aria-label="close" size="large" sx={{ display: { sm: "flex", md: "none" } }}>
                <CloseIcon fontSize="inherit" />
            </IconButton>
        </Box>
        <Divider />
    </>);
};