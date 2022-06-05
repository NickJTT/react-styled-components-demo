import logo from './logo.svg';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import StyledButton, { SubmitButton, FancyButton, AnimatedLogo, DarkButton } from './components/Button';
import StyledDiv from './components/Div';

const clickHandler = () => console.log('Hello, World!');

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  button {
    font-family: ${props => props.fontFamily};
  }
`;

const theme = {
  light: {
    primary: 'white',
    text: 'black'
  },
  dark: {
    primary: 'black',
    text: 'white'
  },
  fontFamily: 'Arial'
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <StyledDiv>
        <AnimatedLogo src={logo} />
        <StyledButton type='submit' onClick={clickHandler}>Button</StyledButton>
        <StyledButton variant='outline' onClick={clickHandler}>Button</StyledButton>
        <SubmitButton>Submit</SubmitButton>
        <FancyButton as='a' onClick={clickHandler}>Fancy Button</FancyButton>
        <DarkButton onClick={clickHandler}>Button</DarkButton>
      </StyledDiv>
    </ThemeProvider>
  );
}
