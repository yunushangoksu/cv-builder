function SkillCellOutput({ skillTitle }) {
  console.log(skillTitle);
  return (
    <div className="skillCellRow">
      <h1 className="skillHeader">Yetenekler</h1>
      <div className="skillCell">
        <div className="skillContent">
          {skillTitle.map((skills, i) => (
            <div key={i}>{skills}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkillCellOutput;
