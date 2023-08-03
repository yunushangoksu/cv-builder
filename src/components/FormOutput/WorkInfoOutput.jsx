/* eslint-disable react/prop-types */
function WorkInfoOutput({ workInfo, hebele }) {
  return (
    <div className="infoCell">
      <div>
        {hebele < 1 ? <h1 className="infoHeader">İş Deneyimi</h1> : <></>}
      </div>

      <div className="headerName">
        <div className="infoName">{workInfo.workName}</div>
        <div className="date">
          {workInfo.workEndDate
            ? `${workInfo.workStartDate} - ${workInfo.workEndDate}`
            : `${workInfo.workStartDate} - Devam Ediyor`}
        </div>
      </div>
      <div className="infoDescription">{workInfo.workDescription}</div>
    </div>
  );
}

export default WorkInfoOutput;
