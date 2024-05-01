import { PanelProps } from "../../../types";
import { CollapsiblePanel } from "./CollapsiblePanel";

const drawerWidth = "33.3%";

/** Panel_1_3 will provide a collapsible and responsive panel which will provide
 * 1/3 to side bar in full view
 */
export const Panel_1_3 = (allProps: PanelProps) => {
  return <CollapsiblePanel drawerWidth={drawerWidth} {...allProps} />;
};
