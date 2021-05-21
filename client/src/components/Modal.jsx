import React from "react";
import Backdrop from "./Backdrop";
import { StyledModal } from "./styles/StyledModal";

const Modal = ({ show, modalClosed, children }) => {
  return (
    <>
      <Backdrop show={show} clicked={modalClosed} />
      <StyledModal
        style={{
          transform: show ? "translateY(0)" : "translateY(-100vh)",
          opacity: show ? "1" : "0",
        }}
      >
        {children}
      </StyledModal>
    </>
  );
};

export default React.memo(Modal, (prevProps, nextProps) => {
  return (
    nextProps.show === prevProps.show &&
    nextProps.children === prevProps.children
  );
});
