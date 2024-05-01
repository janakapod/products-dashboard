export interface PanelProps {
  panelTitle: string;
  drawer: React.ComponentType<{ triggerDrawerClose?: () => void }>;
  content?: React.ReactNode;
  clippedDrawer?:boolean;
}

export interface CollapsiblePanelProps extends PanelProps {
  drawerWidth: `${number}${"rem" | "em" | "px" | "%"}`;
  
}
