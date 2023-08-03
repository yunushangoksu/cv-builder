function WorkInfoOutput({ workInfo }) {
  return (
    <div className="infoCell">
      <h1 className="infoHeader">İş Deneyimi</h1>
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
