import InputHeader from "./FormInput/InputHeader";
import BasicInfo from "./FormInput/BasicInfo";
import "./FormInput/FormInput.css";
import ContactInfo from "./FormInput/ContactInfo";
import EducationInfo from "./FormInput/EducationInfo";
import WorkInfo from "./FormInput/WorkInfo";
import TechnicalInfo from "./FormInput/TechnicalInfo";
import OtherInfo from "./FormInput/OtherInfo";

function FormInput() {
  return (
    <div className="inputWrapper">
      <InputHeader />
      <BasicInfo />
      <ContactInfo />
      <EducationInfo />
      <WorkInfo />
      <TechnicalInfo />
      <OtherInfo />
    </div>
  );
}

export default FormInput;
