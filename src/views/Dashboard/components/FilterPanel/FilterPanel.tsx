import { ENV_VARIABLE_NAME_APP_NAME } from "../../../../types";
import { getEnvValue } from "../../../../utils";
import { FilterPanelForm } from "./components/FilterPanelForm";
import { FilterPanelHeader } from "./components/FilterPanelHeader";

interface FilterPanelProps {
    triggerDrawerClose?: () => void;
}

export const FilterPanel = ({ triggerDrawerClose }: FilterPanelProps) => {
    const appName = getEnvValue(ENV_VARIABLE_NAME_APP_NAME);
    return (<>
        <FilterPanelHeader header={appName} />
        <FilterPanelForm onFormPostSubmit={triggerDrawerClose} />
    </>);
}