import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column; 
  gap: 0.5rem;
  max-width: 80%;

  &[data-sender="user"] {
    justify-self: flex-end;
  }


  @media (max-width: 768px) {
    max-width: 100%;
  }
`

export const MessageBody = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 0.5rem;
  width: fit-content;
  z-index: 2;
  position: relative;
  border-bottom-left-radius: 0;

  &[data-sender="user"] {
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0;

    &::before {
    left: auto;
    right: -0.7rem;
    }
  }

  &::before {
    content: "";
    display: block;
    position: absolute;
    left: -0.7rem;
    border-radius: 0.5rem;
    top: 0;
    width: 5px;
    height: 100%;
    background-color: #f5f5f5;
  }

`


export const Options = styled.div`
  display: flex;
  gap: 0.5rem;
  z-index: 1;

`

export const Option = styled.button`
  padding: 0.5rem 1rem;
  border: 1px solid #ddd;
  border-radius: 0.25rem;
  background-color: #fff;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  text-align: center;
  transition: background 1s ease-in-out;


  &[data-selected="true"] {
    background: linear-gradient(to right, #fafafa, #f4f4f4);
    background-color: #f1f1f1;
    background-size: 200% ;
    animation: gradientAnimation 1.5s linear infinite;
  }

  &:hover {
    background-color: #f9f9f9;
  }

  &:active {
    background-color: #f1f1f1;
  }

  @keyframes gradientAnimation {
  0% {
    background-position: 0%;
  }
  100% {
    background-position: -200%;
  }
}
`


