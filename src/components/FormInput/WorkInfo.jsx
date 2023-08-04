/* eslint-disable react/prop-types */

function WorkInfo({ workInfo, setWorkInfo, hebele }) {
  const updateInput = (e) => {
    let newArr = [...workInfo];

    setWorkInfo(() => {
      newArr[hebele][e.target.attributes.z.value] = e.target.value;
      return newArr;
    });
  };

  const sil = () => {
    let newArray = [...workInfo];
    newArray = newArray.filter((x, i) => i != hebele);
    setWorkInfo(newArray);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form className="inputBlock" onSubmit={handleSubmit}>
      <h1>Çalışma bilgisi {hebele + 1}</h1>
      <label htmlFor="input-Şirket">Şirket</label>
      <input
        type="text"
        name="input-Şirket"
        onChange={updateInput}
        z="workName"
      />
      <label htmlFor="title">Pozisyon</label>
      <input
        type="text"
        name="input-title"
        onChange={updateInput}
        z="workDescription"
      />
      <label htmlFor="input-startingYear">Başlangıç Yılı</label>
      <input
        type="text"
        name="input-startingYear"
        onChange={updateInput}
        z="workStartDate"
      />
      {/*       <label htmlFor="onGoing">Devam Ediyor</label>
      <input
        type="checkbox"
        name="onGoing"
        onChange={updateInput}
        z="workOnGoing"
      />
 */}{" "}
      <label htmlFor="input-endYear">Bitiş Yılı</label>
      <input
        type="text"
        name="input-endYear"
        onChange={updateInput}
        z="workEndDate"
      />
      <button onClick={sil}>İş Deneyimi Sil</button>
    </form>
  );
}

export default WorkInfo;
