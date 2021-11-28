import React, { useState } from "react";
import { Rate } from "antd";

const desc = ["terrible", "bad", "normal", "good", "wonderful"];

const RaterSearch = () => {
  const [star, setStar] = useState();
  const handleChange = (star) => {
    setStar({ star });
  };
  return (
    <div>
      <span>
        <Rate tooltips={desc} onChange={handleChange} value={star} />
        {star ? <span className="ant-rate-text">{desc[star - 1]}</span> : ""}
      </span>
    </div>
  );
};

export default RaterSearch;
