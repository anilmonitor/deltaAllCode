function Activity({ username, textColor }) {
  // let style = {color: textColor}; // we have written directly

  return (
    <div className="Activity">
      <h1 style={{ color: textColor }}> Hello {username}</h1>
    </div>
  );
}

export default Activity;
