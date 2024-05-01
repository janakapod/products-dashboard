import { Panel_1_3 } from "../../components";
import { ENV_VARIABLE_NAME_APP_NAME } from "../../types";
import { getEnvValue } from "../../utils";
import { ChartsContainer } from "./components/ChartsContainer";
import { FilterPanel } from "./components/FilterPanel";

export const Dashboard = () => {
  const appName = getEnvValue(ENV_VARIABLE_NAME_APP_NAME);
  return (
    <Panel_1_3
      panelTitle={appName}
      drawer={FilterPanel}
      content={
        <ChartsContainer />
      }
    />
  );
};
