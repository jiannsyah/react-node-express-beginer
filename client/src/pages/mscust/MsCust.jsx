import CmdButton from "./CmdButton";
import { useEffect, useState } from "react";

function Mscust() {
  const [dataCust, setDataCust] = useState([]);
  const [cmdLogic, setCmdLogic] = useState([
    {
      logic_name: "mhlcmd",
      value: true,
    },
    {
      logic_name: "mhladd",
      value: false,
    },
    {
      logic_name: "mhlchange",
      value: false,
    },
    {
      logic_name: "mhldelete",
      value: false,
    },
  ]);
  const caseLogic = () => {
    const cmdTrue = cmdLogic.map(({ logic_name, value }) => {
      let list_logic = [];
      if (value) {
        list_logic.push(logic_name);
      }
      return list_logic;
    });
    return cmdTrue.join("");
  };

  const displayData = () => {
    if (dataCust.length === 0) {
      handleFalseCmd();
    } else {
      handleTrueCmd("mhlcmd");
    }
  };

  const handleFalseCmd = () => {
    const falseCmd = cmdLogic.map((el) => {
      return { logic_name: el.logic_name, value: false };
    });
    setCmdLogic(falseCmd);
  };
  const handleTrueCmd = (logic) => {
    const handleTrue = cmdLogic.map((el) => {
      if (el.logic_name !== logic) {
        return { logic_name: el.logic_name, value: false };
      } else {
        return { logic_name: el.logic_name, value: true };
      }
    });
    setCmdLogic(handleTrue);
  };
  const handleButton = {
    handleAdd: () => {
      handleTrueCmd("mhladd");
    },
    handleChange: function () {
      handleTrueCmd("mhlchange");
    },
    handleDelete: function () {
      handleTrueCmd("mhldelete");
    },
    handleCancel: function () {
      displayData();
    },
    handleSave: function () {},
    handleFind: function () {},
    handlePrint: function () {},
    handleTop: function () {},
    handleBottom: function () {},
    handleNext: function () {},
    handlePrevious: function () {},
    handleExit: function () {},
  };
  // console.log(cmdLogic);
  return (
    <div>
      <CmdButton
        onClick={handleButton.handleAdd}
        // onClick={handleFalseCmd}
        setCmd={caseLogic()}
        text={"Add"}
      />
      <CmdButton
        onClick={handleButton.handleChange}
        setCmd={caseLogic()}
        text={"Change"}
      />
      <CmdButton
        onClick={handleButton.handleDelete}
        setCmd={caseLogic()}
        text={"Delete"}
      />
      <CmdButton
        onClick={handleButton.handleSave}
        setCmd={caseLogic()}
        text={"Save"}
      />
      <CmdButton
        onClick={handleButton.handleCancel}
        setCmd={caseLogic()}
        text={"Cancel"}
      />
      <CmdButton
        onClick={handleButton.handleExit}
        setCmd={caseLogic()}
        text={"Exit"}
      />
      <CmdButton
        onClick={handleButton.handleTop}
        setCmd={caseLogic()}
        text={"Top"}
      />
      <CmdButton
        onClick={handleButton.handleBottom}
        setCmd={caseLogic()}
        text={"Bottom"}
      />
      <CmdButton
        onClick={handleButton.handleNext}
        setCmd={caseLogic()}
        text={"Next"}
      />
      <CmdButton
        onClick={handleButton.handlePrevious}
        setCmd={caseLogic()}
        text={"Previous"}
      />
      <CmdButton
        onClick={handleButton.handleFind}
        setCmd={caseLogic()}
        text={"Find"}
      />
      <CmdButton
        onClick={handleButton.handlePrint}
        setCmd={caseLogic()}
        text={"Print"}
      />
    </div>
  );
}

export default Mscust;
