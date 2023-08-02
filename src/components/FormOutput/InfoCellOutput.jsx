function InfoCellOutput({ universityName, startDate, endDate, uniInfo, gpa }) {
  return (
    <div className="infoCell">
      <h1 className="infoHeader">Eğitim</h1>
      <div className="headerName">
        <div className="infoName">{universityName}</div>
        <div className="date">{`${startDate} - ${endDate}`}</div>
      </div>
      <div className="infoFooter">
        <div className="infoDescription">{uniInfo}</div>
        <div className="gpa">{gpa} GPA</div>
      </div>
    </div>
  );
}

export default InfoCellOutput;
