import React from 'react';
import styled, { keyframes } from 'styled-components';
import { colors } from '../../brand';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const LoadingContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Spinner = styled.div`
  border: ${(props:LoadingProps) => props.size === 'large' ? '16px' : '1px'} solid ${colors.GRAY};
  border-top: ${(props:LoadingProps) => props.size === 'large' ? '16px' : '1px'} solid ${colors.WARNING}; /* Blue */
  border-radius: 50%;
  width: ${(props:LoadingProps) => props.size === 'large' ? '40px' : '20px'};
  height: ${(props:LoadingProps) => props.size === 'large' ? '40px' : '20px'};
  animation: ${rotate} 2s linear infinite;
`;
interface LoadingProps {
  size?:string;
}
export const Loading = (props:LoadingProps):JSX.Element => {
  return (
    <LoadingContainer>
      <Spinner size={props.size}/>
    </LoadingContainer>
  )
}
