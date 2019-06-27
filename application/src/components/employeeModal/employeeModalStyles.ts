import styled from 'styled-components';

export const EmployeeModalContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.75);
`;

export const ExtendedCard = styled.div`
  maxHeight: 300px;
  maxWidth: 300px;
  background-color: white;
  padding: 30px;
`;

export const InfoText = styled.div`
  text-align: center;
`;

export const LargerImage = styled.img`
  height: 200px;
  width: 200px;
  border-radius: 50%;
  background-color: grey;
`;
