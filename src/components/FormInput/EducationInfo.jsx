import { useCallback } from "react";

function EducationInfo({ educationInfo, setEducationInfo }) {
  const handleSubmit = useCallback(
    (event) => {
      event.preventDefualt();
      setEducationInfo("");
    },
    [setEducationInfo]
  );

  return (
    <>
      <form className="inputBlock" onSubmit={handleSubmit}>
        <h1>Eğitim Bilgileri</h1>
        <label htmlFor="input-university">Üniversite</label>
        <input type="text" name="input-university" id="uniName" />

        <label htmlFor="input-degree">Derece</label>
        <input type="text" name="input-degree" id="uniInfo" />

        <label htmlFor="input-startingYear">Başlangıç Yılı</label>
        <input type="text" name="input-startingYear" id="startDate" />

        <label htmlFor="onGoing">Devam Ediyor</label>
        <input type="checkbox" name="onGoing" id="onGoing" />

        <label htmlFor="graduatingYear">Mezuniyet Yılı</label>
        <input type="text" name="graduatingYear" id="endDate" />

        <label htmlFor="input-gpa">Ortalama</label>
        <input type="text" name="input-gpa" id="gpa" />

        <button type="submit" name="addUni" placeholder="Ekle">
          Ekle
        </button>
      </form>
    </>
  );
}

export default EducationInfo;
