import styled from "styled-components";

export const StyledLeftSideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 10px;
  gap: 10px;

  @media (max-width: 420px) {
    display: none;
  }
`;
