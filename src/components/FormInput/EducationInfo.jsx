function EducationInfo() {
  return (
    <div className="inputBlock">
      <h1>Eğitim Bilgileri</h1>
      <label htmlFor="university">Üniversite</label>
      <input type="text" name="input-university" />
      <label htmlFor="input-degree">Derece</label>
      <input type="text" name="input-degree" />
      <label htmlFor="input-startingYear">Başlangıç Yılı</label>
      <input type="text" name="onGoing" />
      <label htmlFor="onGoing">Devam Ediyor</label>
      <input type="checkbox" name="graduatingYear" />
      <label htmlFor="graduatingYear">Mezuniyet Yılı</label>
      <input type="text" name="input-startingYear" />
      <label htmlFor="input-gpa">Ortalama</label>
      <input type="text" name="input-gpa" />
    </div>
  );
}

export default EducationInfo;
