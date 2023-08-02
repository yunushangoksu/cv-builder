import { useState } from "react";
import InfoCellOutput from "./components/FormOutput/InfoCellOutput";
import TitleCellOutput from "./components/FormOutput/TitleCellOutput";
import SkillCellOutput from "./components/FormOutput/SkillCellOutput";
import ContactCellOutput from "./components/FormOutput/ContactCellOutput";
import WorkInfoOutput from "./components/FormOutput/WorkInfoOutput";
import InputHeader from "./components/FormInput/InputHeader";
import BasicInfo from "./components/FormInput/BasicInfo";
import ContactInfo from "./components/FormInput/ContactInfo";
import EducationInfo from "./components/FormInput/EducationInfo";
import WorkInfo from "./components/FormInput/WorkInfo";
import TechnicalInfo from "./components/FormInput/TechnicalInfo";
import OtherInfo from "./components/FormInput/OtherInfo";
import "./App.css";
import "./components/FormOutput/formOutput.css";
import "./components/FormInput/FormInput.css";

function App() {
  const [email, setEmail] = useState("yunushangoksu@gmail.com");
  const [phoneNumber, setPhoneNumber] = useState("531 632 33 93");
  const [location, setLocation] = useState("Istanbul, Turkey");
  const [website, setWebsite] = useState("yunushan.com");

  const [fullName, setFullName] = useState("Yunushan Göksu");
  const [title, setTitle] = useState("Front End Developer");
  const [info, setInfo] = useState("Lorem ipsum dolor sit amet");

  const [universityName, setUniversityName] = useState(
    "Pamukkale Üniversitesi"
  );
  const [startDate, setStartDate] = useState("2019");
  const [endDate, setEndDate] = useState("2022");
  const [uniInfo, setUniInfo] = useState("Lorem ipsum dolor sit amet");
  const [gpa, setGpa] = useState("3.9");

  const [workName, setWorkName] = useState("Hayat Okulu");
  const [workStartDate, setWorkStartDate] = useState("2019");
  const [workEndDate, setWorkEndDate] = useState("2022");
  const [workInfo, setWorkInfo] = useState("Lorem ipsum dolor sit amet");

  const [skillTitle, setSkillTitle] = useState("Yazılım");

  return (
    <div className="wrapper">
      {/* Output Zone */}
      <div className="FormOutputPaper">
        <div className="FormOutputLeftCol">
          <TitleCellOutput fullName={fullName} title={title} info={info} />
          <InfoCellOutput
            universityName={universityName}
            startDate={startDate}
            endDate={endDate}
            uniInfo={uniInfo}
            gpa={gpa}
          />
          <WorkInfoOutput
            workName={workName}
            workStartDate={workStartDate}
            workEndDate={workEndDate}
            workInfo={workInfo}
          />
        </div>
        <div className="FormOutputRightCol">
          <ContactCellOutput
            email={email}
            phoneNumber={phoneNumber}
            location={location}
            website={website}
          />
          <SkillCellOutput skillTitle={skillTitle} />
        </div>
      </div>
      {/* Input Zone */}
      <div className="inputWrapper">
        <InputHeader />
        <BasicInfo
          setFullName={setFullName}
          setTitle={setTitle}
          setInfo={setInfo}
        />
        <ContactInfo
          setEmail={setEmail}
          setPhoneNumber={setPhoneNumber}
          setLocation={setLocation}
          setWebsite={setWebsite}
        />
        <EducationInfo
          setUniversityName={setUniversityName}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
          setUniInfo={setUniInfo}
          setGpa={setGpa}
        />
        <WorkInfo
          setWorkName={setWorkName}
          setWorkStartDate={setWorkStartDate}
          setWorkEndDate={setWorkEndDate}
          setWorkInfo={setWorkInfo}
        />

        {/*
        <TechnicalInfo />
        <OtherInfo />

  */}
      </div>
    </div>
  );
}

export default App;
