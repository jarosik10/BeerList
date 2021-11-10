import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import {ReactComponent as Heart} from '../../assets/icons/red-heart.svg';

const StyledButton = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
  width: 35px;
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;

  > svg {
    fill: ${(props: { isActive: boolean }) => props.isActive ? '#ed1b24' : '#efd7d8'};
  }
`;

interface HeartButtonProps {
  isActive: boolean;
  onClick: () => void;
}

const HeartButton: FunctionComponent<HeartButtonProps> = ({isActive, onClick}) => {
  return <StyledButton isActive={isActive} onClick={onClick}>
    <Heart />
  </StyledButton>
}

export default HeartButton;
