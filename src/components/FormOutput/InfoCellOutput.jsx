/* eslint-disable react/prop-types */
function InfoCellOutput({ education, hebele }) {
  return (
    <div className="infoCell">
      <div>{hebele < 1 ? <h1 className="infoHeader">Eğitim</h1> : <></>}</div>
      <div className="headerName">
        <div className="infoName">{education.uniName}</div>
        <div className="date">{`${education.startDate} - ${education.endDate}`}</div>
      </div>
      <div className="infoFooter">
        <div className="infoDescription">{education.uniInfo}</div>
        <div className="gpa">{education.gpa} GPA</div>
      </div>
    </div>
  );
}

export default InfoCellOutput;
