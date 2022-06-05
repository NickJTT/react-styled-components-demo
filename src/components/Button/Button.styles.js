import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const buttonVariant = 'outline'

const StyledButton = styled.button`
  display: block;
  padding: 8px 16px;
  margin: 16px;
  border: solid 1px black;
  background-color: ${ props => props.variant === buttonVariant ? 'transparent' : 'lightgray' };
  outline: none;
  cursor: pointer;
  &:hover {
    background-color: ${ props => props.variant !== buttonVariant ? 'transparent' : 'lightgray' };
  }
`;

export const FancyButton = styled(StyledButton)`
  background-image: linear-gradient(to right, #F6D365 0%, #FDA085 100%);
  border: none;
`;

export const SubmitButton = styled(StyledButton).attrs(props => ({
  type: 'submit'
}))`
  border: solid 1px blue;
`;

export const DarkButton = styled(StyledButton)`
  border: 2px solid ${props => props.theme.dark.primary};
  background-color: ${props => props.theme.dark.primary};
  color: ${props => props.theme.dark.text};
`;

export const AnimatedLogo = styled.img`
  width: 40vmin;
  pointer-events: none;
  animation: ${rotate} infinite 20s linear;
`;

export default StyledButton;
