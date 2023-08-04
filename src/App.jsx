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
/* 
import OtherInfo from "./components/FormInput/OtherInfo";
 */

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

  const [skillInfo, setSkillInfo] = useState([]);

  const [educationInfo, setEducationInfo] = useState([
    {
      uniName: "Üniversite Adı",
      uniInfo: "Bölüm",
      startDate: "2021",
      onGoing: true,
      endDate: "2023",
      gpa: "3.9",
    },
  ]);

  const eduEkle = () => {
    let newArray = [
      ...educationInfo,
      {
        uniName: "Üniversite Adı",
        uniInfo: "Bölüm",
        startDate: "2021",
        onGoing: true,
        endDate: "2023",
        gpa: "3.9",
      },
    ];
    setEducationInfo(newArray);
  };

  const workEkle = () => {
    let newArray = [
      ...workInfo,
      {
        workName: "Şirket Adı",
        workDescription: "Pozisyon",
        workStartDate: "2019",
        workOnGoing: "true",
        workEndDate: "2022",
      },
    ];
    setWorkInfo(newArray);
  };

  const [workInfo, setWorkInfo] = useState([
    {
      workName: "Şirket Adı",
      workDescription: "Pozisyon",
      workStartDate: "2019",
      workOnGoing: "true",
      workEndDate: "2022",
    },
  ]);

  return (
    <div className="wrapper">
      {/* Output Zone */}

      <div className="FormOutputPaper">
        <div className="FormOutputLeftCol">
          <TitleCellOutput fullName={fullName} title={title} info={info} />

          {educationInfo.map((x, i) => (
            <InfoCellOutput education={x} key={i} hebele={i} />
          ))}

          {workInfo.map((x, i) => (
            <WorkInfoOutput workInfo={x} key={i} hebele={i} />
          ))}
        </div>

        <div className="FormOutputRightCol">
          <ContactCellOutput
            email={email}
            phoneNumber={phoneNumber}
            location={location}
            website={website}
          />
          <SkillCellOutput skillTitle={skillInfo} />
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
        <h1 className="eduHeader">Eğitim Bilgileri</h1>

        {educationInfo.map((x, i) => (
          <EducationInfo
            educationInfo={educationInfo}
            setEducationInfo={setEducationInfo}
            key={i}
            hebele={i}
          />
        ))}

        <button onClick={eduEkle} placeholder="Ekle">
          Eğitim Sekmesi Ekle
        </button>

        <h1 className="workHeader">Çalışma Bilgileri</h1>

        {workInfo.map((x, i) => (
          <WorkInfo
            workInfo={workInfo}
            setWorkInfo={setWorkInfo}
            key={i}
            hebele={i}
          />
        ))}

        <button onClick={workEkle} placeholder="Ekle">
          İş Deneyimi Ekle
        </button>

        <TechnicalInfo skillInfo={skillInfo} setSkillInfo={setSkillInfo} />
      </div>
    </div>
  );
}

export default App;
