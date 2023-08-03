/* eslint-disable react/prop-types */

function EducationInfo({ educationInfo, setEducationInfo, hebele }) {
  const updateInput = (e) => {

    let newArr = [...educationInfo];
    setEducationInfo(() => {
      newArr[hebele][e.target.attributes.z.value] = e.target.value;
      return newArr;
    });
  };

  const sil = () => {
    let newArray = [...educationInfo];
    newArray = newArray.filter((x, i) => i != hebele);
    setEducationInfo(newArray);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <form className="inputBlock" onSubmit={handleSubmit}>
        <h1>Eğitim bilgisi {hebele + 1}</h1>
        <label htmlFor="input-university">Üniversite</label>
        <input
          type="text"
          onChange={updateInput}
          name="input-university"
          className="eduInput"
          z="uniName"
        />

        <label htmlFor="input-degree">Derece</label>
        <input
          type="text"
          name="input-degree"
          onChange={updateInput}
          className="eduInput"
          z="uniInfo"
        />

        <label htmlFor="input-startingYear">Başlangıç Yılı</label>
        <input
          type="text"
          name="input-startingYear"
          onChange={updateInput}
          className="eduInput"
          z="startDate"
        />

        <label htmlFor="onGoing">Devam Ediyor</label>
        <input
          type="checkbox"
          name="onGoing"
          onChange={updateInput}
          className="eduInput"
          z="onGoing"
        />

        <label htmlFor="graduatingYear">Mezuniyet Yılı</label>
        <input
          type="text"
          name="graduatingYear"
          onChange={updateInput}
          className="eduInput"
          z="endDate"
        />

        <label htmlFor="input-gpa">Ortalama</label>
        <input
          type="text"
          name="input-gpa"
          onChange={updateInput}
          className="eduInput"
          z="gpa"
        />
        <button onClick={sil}>Eğitim Bilgisi Sil</button>
      </form>
    </>
  );
}

export default EducationInfo;
