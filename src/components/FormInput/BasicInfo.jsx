function BasicInfo() {
  return (
    <div className="inputBlock">
      <h1>Temel Bilgiler</h1>
      <label htmlFor="firstName">Ad</label>
      <input type="text" name="input-firstName" />
      <label htmlFor="input-lastName">Soyad</label>
      <input type="text" name="input-lastName" />
      <label htmlFor="input-title">Ünvan</label>
      <input type="text" name="input-title" />
      <label htmlFor="input-summary">Özet bilgi</label>
      <input type="text" name="input-summary" />
    </div>
  );
}

export default BasicInfo;
