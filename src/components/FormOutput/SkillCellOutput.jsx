function SkillCellOutput({skillTitle}) {

  return (
    <div className="skillCellRow">
      <h1 className="skillHeader">Yetenekler</h1>
      <div className="skillCell">
        <p className="skillSbHeader">{skillTitle}</p>
        <div className="skillContent">
          <div>HTML</div>
          <div>CSS</div>
          <div>JavaScript</div>
        </div>
      </div>
    </div>
  );
}

export default SkillCellOutput;
