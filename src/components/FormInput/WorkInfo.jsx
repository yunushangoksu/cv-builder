import { useCallback } from "react";

function WorkInfo({
  setWorkName,
  setWorkStartDate,
  setWorkEndDate,
  setWorkInfo,
}) {
  const handleNameInputChange = useCallback(
    (event) => {
      setWorkName(event.target.value);
    },
    [setWorkName]
  );
  const handleStartInputChange = useCallback(
    (event) => {
      setWorkStartDate(event.target.value);
    },
    [setWorkStartDate]
  );
  const handleEndInputChange = useCallback(
    (event) => {
      setWorkEndDate(event.target.value);
    },
    [setWorkEndDate]
  );
  const handleNameInfoChange = useCallback(
    (event) => {
      setWorkInfo(event.target.value);
    },
    [setWorkInfo]
  );

  return (
    <div className="inputBlock">
      <h1>Çalışma Bilgileri</h1>
      <label htmlFor="title">Pozisyon</label>
      <input type="text" name="input-title" onChange={handleNameInfoChange} />
      <label htmlFor="input-Şirket">Şirket</label>
      <input type="text" name="input-Şirket" onChange={handleNameInputChange} />

      <label htmlFor="input-startingYear">Başlangıç Yılı</label>
      <input
        type="text"
        name="input-startingYear"
        onChange={handleStartInputChange}
      />

      <label htmlFor="onGoing">Devam Ediyor</label>
      <input type="checkbox" name="onGoing" />
      <label htmlFor="input-endYear">Bitiş Yılı</label>
      <input type="text" name="input-endYear" onChange={handleEndInputChange} />
    </div>
  );
}

export default WorkInfo;
