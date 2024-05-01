import { useCallback, useMemo, useState } from "react";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  SxProps,
  Theme,
  Toolbar,
  Typography,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import { CollapsiblePanelProps } from "../../../types";
/**
 * CollapsiblePanel provides a collapsible panel on mobile view while providing
 * dynamic sidebar.
 *  * Depends on MUI's Responsive Drawer (https://mui.com/material-ui/react-drawer/#responsive-drawer)
 *  * Note that you need to provide reference to the component in "drawer" so that we can inject
 *    triggerDrawerClose to that component
 */
export const CollapsiblePanel = ({
  panelTitle,
  drawer: DrawerPanelComponent,
  content,
  drawerWidth,
  clippedDrawer
}: CollapsiblePanelProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleDrawerClose = useCallback(() => {
    setIsClosing(true);
    setMobileOpen(false);
  }, []);

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawerPanel = useMemo(() => (
    <DrawerPanelComponent triggerDrawerClose={handleDrawerClose} />
  ), [handleDrawerClose]);

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              mr: 2,
              display: { sm: "none" },
            }}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" noWrap component="div">
            {panelTitle}
          </Typography>

        </Toolbar>
      </AppBar>
      <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "100%",
            },
          }}
        >
          {drawerPanel}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawerPanel}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          mt: "4rem",
          p: "3rem",
          width: { sm: `calc(100% - ${drawerWidth})` },
        }}
      >
        {content}
      </Box>
    </Box>
  );
};
