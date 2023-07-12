function CmdButton({ text, setCmd, onClick }) {
  const handleDisable = () => {
    let disabled = false;
    if (setCmd === "mhlcmd") {
      disabled =
        text.toLowerCase() === "save" || text.toLowerCase() === "cancel"
          ? true
          : false;
    } else if (
      setCmd === "mhladd" ||
      setCmd === "mhlchange" ||
      setCmd === "mhldelete"
    ) {
      disabled =
        text.toLowerCase() === "save" ||
        text.toLowerCase() === "cancel" ||
        text.toLowerCase() === "exit"
          ? false
          : true;
    } else {
      disabled =
        text.toLowerCase() === "add" || text.toLowerCase() === "exit"
          ? false
          : true;
    }
    return disabled;
  };

  return (
    <button onClick={onClick} disabled={handleDisable()}>
      {text}
    </button>
  );
}

export default CmdButton;
