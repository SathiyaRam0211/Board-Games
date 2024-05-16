import React, { useEffect, useState } from "react";

const BlockSelect = ({ src, alt, mark, setMark }) => {
  const [isSelected, setIsSelected] = useState(false);
  const handleClick = () => {
    setMark(alt);

    setIsSelected(!isSelected);
  };

  useEffect(() => {
    setIsSelected(alt === mark);
  }, [alt, mark]);

  return (
    <div
      className={`block-wrapper ${isSelected ? "selected" : ""}`}
      onClick={handleClick}
    >
      <img className="block-icon" src={src} alt={alt} />
    </div>
  );
};

export default BlockSelect;
