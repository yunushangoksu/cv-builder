function WorkInfoOutput({ workName, workStartDate, workEndDate, workInfo }) {
  return (
    <div className="infoCell">
      <h1 className="infoHeader">İş Deneyimi</h1>
      <div className="headerName">
        <div className="infoName">{workName}</div>
        <div className="date">
          {workEndDate
            ? `${workStartDate} - ${workEndDate}`
            : `${workStartDate} - Devam Ediyor`}
        </div>
      </div>
      <div className="infoDescription">{workInfo}</div>
    </div>
  );
}

export default WorkInfoOutput;
