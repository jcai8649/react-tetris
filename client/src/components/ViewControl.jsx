import React from "react";
import {
  StyledViewControls,
  StyledViewControlsHeader,
  StyledViewControlsContainer,
  StyledViewControlsImg,
} from "./styles/StyledViewControls";
import controls from "../asset/svg/controls.svg";

const ViewControls = () => {
  return (
    <StyledViewControls>
      <StyledViewControlsHeader>Controls</StyledViewControlsHeader>
      <StyledViewControlsContainer>
        <StyledViewControlsImg src={controls} alt="controls" />
      </StyledViewControlsContainer>
    </StyledViewControls>
  );
};

export default ViewControls;
