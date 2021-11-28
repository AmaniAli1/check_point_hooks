import React, { useState } from "react";
import { Rate } from "antd";
const desc = ["terrible", "bad", "normal", "good", "wonderful"];

const Raterr = ({ evaluation }) => {
  const [star, setStar] = useState(3);

  const handleChange = (evaluation) => {
    setStar({ evaluation });
  };

  return (
    <span>
      <Rate tooltips={desc} disabled value={evaluation} />
      {evaluation ? (
        <span className="ant-rate-text">{desc[evaluation - 1]}</span>
      ) : (
        ""
      )}
    </span>
  );
};
export default Raterr;
