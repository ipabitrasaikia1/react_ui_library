import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import { useState } from 'react';
import { Button, Div, ButtonD, InputText } from './styled/Button';





function App() {

  const [theme, setTheme] = useState("light")
  return (
    <div className="App">
      <Button value={theme} >Click me</Button>

      <Div>
        <div>Hi every one </div>
        <p>All are good</p>
        <button onClick={() => { setTheme(theme === "light" ? "dark" : "light") }} >Change theme</button>

      </Div>

      <ButtonD>Buttonnnnn</ButtonD>
      {/* <InputText>Enter text</InputText> */}

      <Div> </Div>
    </div>
  );
}

export default App;
