import { useState } from "react";

const FixAComponentFailingToRerender = () => {
  const [isOn, setIsOn] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setIsOn(!isOn);
        }}
      >
        {isOn ? "On" : "Off"}
      </button>
    </div>
  );
};

export default FixAComponentFailingToRerender;
