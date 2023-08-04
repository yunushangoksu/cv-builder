import { useCallback } from "react";

function BasicInfo({ setFullName, setTitle, setInfo }) {
  const handleNameInputChange = useCallback(
    (event) => {
      setFullName(event.target.value);
    },
    [setFullName]
  );
  const handleTitleInputChange = useCallback(
    (event) => {
      setTitle(event.target.value);
    },
    [setTitle]
  );
  const handleInfoInputChange = useCallback(
    (event) => {
      setInfo(event.target.value);
    },
    [setInfo]
  );

  return (
    <div className="inputBlock">
      <h1 className="temelHeader">Temel Bilgiler</h1>
      <label htmlFor="fullName">Ad Soyad</label>
      <input
        type="text"
        name="input-fullName"
        onChange={handleNameInputChange}
      />
      <label htmlFor="input-title">Ünvan</label>
      <input type="text" name="input-title" onChange={handleTitleInputChange} />
      <label htmlFor="input-summary">Özet bilgi</label>
      <input
        type="text"
        name="input-summary"
        onChange={handleInfoInputChange}
      />
    </div>
  );
}

export default BasicInfo;
