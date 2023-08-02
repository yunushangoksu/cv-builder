import InfoCellOutput from "./FormOutput/InfoCellOutput";
import TopRowOutput from "./FormOutput/TopRowOutput";
import SkillCellOutput from "./FormOutput/SkillCellOutput";
import ContactCellOutput from "./FormOutput/ContactCellOutput";
import WorkInfoOutput from "./FormOutput/WorkInfoOutput";
import "./FormOutput/formOutput.css";

function FormOutput() {
  return (
    <div className="FormOutputPaper">
      <div className="FormOutputLeftCol">
        <TopRowOutput />
        <InfoCellOutput />
        <WorkInfoOutput />
      </div>
      <div className="FormOutputRightCol">
        <ContactCellOutput />
        <SkillCellOutput />
      </div>
    </div>
  );
}

export default FormOutput;
