import React from "react";
import Image1 from "../../image/image-1.jpg";
import "../../styles/component/top-image.css";

const TopImage = (props) => {
  const { imageSrc } = props;
  return <img src={imageSrc} alt="" />;
};

export default TopImage;
