import { useState } from "react";

function TechnicalInfo({ skillInfo, setSkillInfo }) {
  const [dummySkill, setDummySkill] = useState("");

  const skillEkle = (e) => {
    setDummySkill([...skillInfo, e.target.value]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSkillInfo(dummySkill);
  };
  return (
    <div className="inputBlock">
      <h1>Teknik Yetenekler</h1>
      <form onSubmit={handleSubmit} className="technicalForm">
        <label htmlFor="technicalSkill">Bir yetenek ekle</label>
        <input
          type="text"
          name="input-technicalSkill"
          onChange={skillEkle}
          id="skillInput"
          z="skillInfo"
        />
        <button>Yeteneği Ekle</button>
      </form>
    </div>
  );
}

export default TechnicalInfo;
