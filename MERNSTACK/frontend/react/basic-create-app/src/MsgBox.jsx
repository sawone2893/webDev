
function MsgBox({ userName, textColor }) {
  let style = { color: textColor};
  return (
    <h1 className="MsgBox" style={style}>
      {userName}
    </h1>
  );
}

export default MsgBox;
