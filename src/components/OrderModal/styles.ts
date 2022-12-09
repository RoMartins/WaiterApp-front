import styled from 'styled-components';

export const  Overlay = styled.div`
  left: 0;
  top: 0;
  background: rgba(0,0,0,0.8);
  backdrop-filter: blur(4.5px);
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalBody = styled.div`
background: #FFFFFF;
width: 480px;
padding: 2rem;
border-radius: 0.5rem;

 >header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;

  button {
    display: flex;
    background: transparent;
    border: none;
  }
 }

 .status-container {
  margin-top: 2rem;

  >div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 0.5rem;
  }

  small {
    font-size: 0.875rem;
    opacity: 0.8;
  }

 }

`;

export const OrderDetails = styled.div`
  margin-top: 2rem;

  >strong {
    font-weight: 500;
    font-size: 0.875rem;
    opacity: 0.8;
  }

`;
