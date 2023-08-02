import { useCallback } from "react";

function EducationInfo({
  setUniversityName,
  setStartDate,
  setEndDate,
  setUniInfo,
  setGpa,
}) {
  const handleNameInputChange = useCallback(
    (event) => {
      setUniversityName(event.target.value);
    },
    [setUniversityName]
  );
  const handleStartInputChange = useCallback(
    (event) => {
      setStartDate(event.target.value);
    },
    [setStartDate]
  );
  const handleEndInputChange = useCallback(
    (event) => {
      setEndDate(event.target.value);
    },
    [setEndDate]
  );
  const handleUniInputChange = useCallback(
    (event) => {
      setUniInfo(event.target.value);
    },
    [setUniInfo]
  );
  const handleGpaInputChange = useCallback(
    (event) => {
      setGpa(event.target.value);
    },
    [setGpa]
  );

  return (
    <div className="inputBlock">
      <h1>Eğitim Bilgileri</h1>
      <label htmlFor="university">Üniversite</label>
      <input
        type="text"
        name="input-university"
        onChange={handleNameInputChange}
      />
      <label htmlFor="input-degree">Derece</label>
      <input type="text" name="input-degree" onChange={handleUniInputChange} />
      <label htmlFor="input-startingYear">Başlangıç Yılı</label>
      <input type="text" name="onGoing" onChange={handleStartInputChange} />
      <label htmlFor="onGoing">Devam Ediyor</label>
      <input type="checkbox" name="graduatingYear" />
      <label htmlFor="graduatingYear">Mezuniyet Yılı</label>
      <input
        type="text"
        name="input-startingYear"
        onChange={handleEndInputChange}
      />
      <label htmlFor="input-gpa">Ortalama</label>
      <input type="text" name="input-gpa" onChange={handleGpaInputChange} />
    </div>
  );
}

export default EducationInfo;
