import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";
import { ThemeProvider } from "styled-components";

const showModal = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;
const ModalContainer = styled.div`
  background-color: ${({ theme }) => theme.backgroundContainer};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  font-size: ${({ theme }) => theme.fontSize};
  animation: ${showModal} 0.3s ease-in;
`;

const ModalBody = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.backgroundColor};
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  padding: 2rem;
  top: ${({ theme }) => theme.topPosition};
  left: ${({ theme }) => theme.leftPosition};
  transform: translate(
    -${({ theme }) => theme.leftPosition},
    -${({ theme }) => theme.topPosition}
  );
  box-shadow: ${({ theme }) => theme.boxShadow};
  color: ${({ theme }) => theme.color};
  animation: ${showModal} 1s ease-in;
`;

const ModalIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color};
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(40%, -40%);
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.boxShadow};
  color: ${({ theme }) => theme.backgroundColor};
  padding: 0.5rem;
  svg {
    transform: scale(1);
    transition: 0.5s ease-in-out;
  }
  &:hover {
    svg {
      transition: 0.5s ease-in-out;
      transform: scale(1.8);
    }
  }
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
