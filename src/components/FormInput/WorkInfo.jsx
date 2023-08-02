function WorkInfo() {
  return (
    <div className="inputBlock">
      <h1>Çalışma Bilgileri</h1>
      <label htmlFor="title">Pozisyon</label>
      <input type="text" name="input-title" />
      <label htmlFor="input-Şirket">Şirket</label>
      <input type="text" name="input-Şirket" />
      <label htmlFor="input-startingYear">Başlangıç Yılı</label>
      <input type="text" name="onGoing" />
      <label htmlFor="onGoing">Devam Ediyor</label>
      <input type="checkbox" name="endYear" />
      <label htmlFor="endYear">Bitiş Yılı</label>
      <input type="text" name="input-startingYear" />
      <label htmlFor="input-website">Website</label>
      <input type="text" name="input-website" />
    </div>
  );
}

export default WorkInfo;
