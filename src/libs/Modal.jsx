import React from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";

const ModalContainer = styled.div`
  background-color: ${(props) => props.theme.backgroundContainer};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  font-size: ${(props) => props.theme.fontSize};
`;

const ModalBody = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.backgroundColor};
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  padding: 2rem;
  top: ${(props) => props.theme.verticalAlign};
  left: ${(props) => props.theme.horizontalAlign};
  transform: translate(
    -${(props) => props.theme.horizontalAlign},
    -${(props) => props.theme.verticalAlign}
  );
  box-shadow: ${(props) => props.theme.boxShadow};
  color: ${(props) => props.theme.color};
`;

const ModalIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${(props) => props.theme.color};
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(40%, -40%);
  cursor: pointer;
  box-shadow: ${(props) => props.theme.boxShadow};
  color: ${(props) => props.theme.backgroundColor};
  padding: 0.5rem;
`;

function Modal({ style, children, setOpenModal }) {
  return (
    <ThemeProvider theme={style}>
      <ModalContainer>
        <ModalBody>
          {children}
          <ModalIcon onClick={() => setOpenModal(false)}>
            <svg
              className="modal__icon"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"
              ></path>
            </svg>
          </ModalIcon>
        </ModalBody>
      </ModalContainer>
    </ThemeProvider>
  );
}

export default Modal;
