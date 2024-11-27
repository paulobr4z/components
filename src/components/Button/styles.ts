'use client'

import styled from 'styled-components'

interface ButtonProps {
  $radius: 'full' | 'default'
  $loading: boolean
}

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 16px;
  color: #000000;
  border: none;
  outline: none;
  border-radius: ${({ $radius }) => ($radius === 'default' ? '6px' : '9999px')};
  transition: all 100ms ease-in-out;

  cursor: ${({ $loading }) => ($loading ? 'wait' : 'pointer')};

  &:hover {
    opacity: 0.8;
  }

  &:active:active {
    transform: scale(0.98);
  }
`
export const Spinner = styled.div`
  width: 16px;
  height: 16px;
  border: 2px solid #000000;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 0.8s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
