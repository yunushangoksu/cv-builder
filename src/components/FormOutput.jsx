import InfoCellOutput from "./FormOutput/InfoCellOutput";
import TopRowOutput from "./FormOutput/TopRowOutput";
import SkillCellOutput from "./FormOutput/SkillCellOutput";
import "./FormOutput/formOutput.css";

function FormOutput() {
  return (
    <div className="FormOutputPaper">
      <TopRowOutput />
      <div className="FormOutputBottomRow">
        <div className="infoCellCol">
          <InfoCellOutput />
        </div>
        <div className="skillRowCol">
          <SkillCellOutput />
        </div>
      </div>
    </div>
  );
}

export default FormOutput;
