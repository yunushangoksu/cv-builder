function TitleCellOutput({ fullName, title, info }) {
  return (
    <div className="topRow">
      <div className="titleBlock">
        <h1 className="nameText">{fullName}</h1>
        <h3 className="titleText">{title}</h3>
        <p className="infoText">{info}</p>
      </div>
    </div>
  );
}

export default TitleCellOutput;
