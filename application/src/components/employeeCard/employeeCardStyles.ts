import styled from 'styled-components';

export const CardContainer = styled.div`
  justify-content: center;
  align-items: center;
  minWidth: 250px;
  minHeight: 400px;
  padding: 30px;
  margin: auto;
`;

export const EmployeeName = styled.div`
  text-align: center;
`;

export const SmallImage = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 50%;
  transition: all 300ms;
  ${CardContainer}:hover & {
    cursor: pointer;
      box-shadow: 0 0 20px #000
  }
`;
