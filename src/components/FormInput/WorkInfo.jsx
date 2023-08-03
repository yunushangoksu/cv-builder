import { useCallback } from "react";

function WorkInfo({ setWorkInfo }) {
  const handleNameInputChange = useCallback(
    (event) => {
      setWorkInfo(event.target.value);
    },
    [setWorkInfo]
  );

  return (
    <form className="inputBlock">
      <h1>Çalışma Bilgileri</h1>
      <label htmlFor="input-Şirket">Şirket</label>
      <input type="text" name="input-Şirket" />
      <label htmlFor="title">Pozisyon</label>
      <input type="text" name="input-title" />

      <label htmlFor="input-startingYear">Başlangıç Yılı</label>
      <input type="text" name="input-startingYear" />

      <label htmlFor="onGoing">Devam Ediyor</label>
      <input type="checkbox" name="onGoing" />
      <label htmlFor="input-endYear">Bitiş Yılı</label>
      <input type="text" name="input-endYear" />
    </form>
  );
}

export default WorkInfo;
