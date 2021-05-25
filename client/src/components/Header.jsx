import React from "react";
import Logo from "../asset/img/logo.png";
import { AiOutlineGithub } from "react-icons/ai";
import { BiCodeAlt } from "react-icons/bi";
import { StyledHeader, StyledImg } from "./styles/StyledHeader";
import { StyledGithubWrapper, StyledGithubAchor } from "./styles/StyledGithub";

const Header = () => {
  return (
    <>
      <StyledGithubWrapper>
        <StyledGithubAchor
          href="https://github.com/jcai8649/react-tetris"
          rel="noreferrer"
          target="_blank"
          style={{
            width: "25px",
            height: "25px",
          }}
        >
          <BiCodeAlt
            style={{
              width: "25px",
              height: "25px",
              color: "white",
            }}
          />
        </StyledGithubAchor>
        <StyledGithubAchor
          href="https://github.com/jcai8649"
          rel="noreferrer"
          target="_blank"
          style={{
            width: "25px",
            height: "25px",
          }}
        >
          <AiOutlineGithub
            style={{
              width: "25px",
              height: "25px",
              color: "white",
            }}
          />
        </StyledGithubAchor>
      </StyledGithubWrapper>
      <StyledHeader>
        <StyledImg src={Logo} alt="Tetris Logo" />
        <h1>React Tetris</h1>
      </StyledHeader>
    </>
  );
};

export default Header;
