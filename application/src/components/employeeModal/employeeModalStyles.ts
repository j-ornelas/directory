import styled from 'styled-components';
import { colors } from '../../brand';

export const EmployeeModalContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: visible;
  background-color: rgba(0,0,0,0.75);
`;

export const ExtendedCard = styled.div`
  position: relative;
  height: auto;
  maxWidth: 300px;
  background-color: ${colors.WHITE};
  padding: 30px;
`;

export const DeleteButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
  width: 100%;
  height: 10%;
`;

export const DeleteButton = styled.button`
  width: 50%;
  height: 10%;
  background-color: ${colors.WARNING};
  border-radius: 2px;
  color: ${colors.WHITE};
`;

export const InfoText = styled.div`
  text-align: center;
`;

export const LargerImage = styled.img`
  height: 200px;
  width: 200px;
  border-radius: 50%;
  background-color: ${colors.GRAY};
`;
