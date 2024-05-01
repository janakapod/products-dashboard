import { Panel_1_3 } from "../../components";
import { ChartsContainer } from "./components/ChartsContainer";
import { FilterPanel } from "./components/FilterPanel";

export const Dashboard = () => {

  return (
    <Panel_1_3
      panelTitle={""}
      drawer={FilterPanel}
      content={
        <ChartsContainer />
      }
    />
  );
};
