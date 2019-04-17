import React, { Component }        from 'react';
import ReactDOM                    from 'react-dom';
import { BrowserRouter, Route }    from 'react-router-dom';
import store                       from './store/store';
import { Login }                   from './containers/Containers';
import names                       from './styles/names';
import { unit, commonStyles }      from './styles/styles';
import styled, {createGlobalStyle} from 'styled-components';
import { opacify } from 'polished';

const GlobalStyle = createGlobalStyle`
  html {
    font-weight: 400;
    font-family: ${commonStyles.fontFamily};
  }

  html, body, #root, main {
    height: 100%;
    min-height: 100%;
    margin: 0;
    box-sizing: border-box;
    color: ${commonStyles.fontColor};
  }

  #root {
    font-size: 0;
    text-align: center;
  }

  main {
    display: inline-block;
    min-width: ${commonStyles.minWidth};
    max-width: ${commonStyles.maxWidth};
    width: 100%;
    height: auto;
    padding: ${unit(commonStyles.header)} 0 ${unit(commonStyles.footer)};
    text-align: left;
    font-size: ${unit(12)};
    background: ${commonStyles.mainColor};
  }

  [disabled] {
    opacity: .5;
    cursor: not-allowed;

    * {
      pointer-events: none;
    }

    &:after {
      display: none;
    }
  }

  :focus {
    outline: ${commonStyles.activeColor} auto ${unit(5)};
  }

  input {
    width: 100%;
    box-sizing: border-box;

    &::placeholder {
      color: ${opacify(-.7, commonStyles.solidColor)};
    }

    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      display: none;
    }

    &.onlyInput {
      &::-webkit-inner-spin-button,
      &::-webkit-calendar-picker-indicator {
        display: none;
        -webkit-appearance: none;
      }
    }
  }

  input,
  textarea ,
  select {
    font: inherit;
    font-family: ${commonStyles.fontFamily};
    color: inherit;
    background: ${commonStyles.voidColor};

    &[readonly] {
      cursor: default;
    }
  }

  form {
    .errorMsg {
      display: none;
    }

    &.inValid {
      .errorMsg {
        display: inline;
      }
    }
  }

  button {
    font: inherit;
    font-family: ${commonStyles.fontFamily};
    color: inherit;
    cursor: pointer;
    border: 0;
    background: 0;
  }

  a {
    font: inherit;
    color: inherit;
    text-decoration: none;
  }
`;

const AppStyled = styled.main`

`;

class App extends Component{
  render() {
    return (
      <BrowserRouter basename="/">
        <AppStyled>
          <Route path={'/' + names.login.href} component={Login.Login}/>
          <GlobalStyle/>
        </AppStyled>
      </BrowserRouter>
    );
  }
}

 const render = () => {
   ReactDOM.render(<App store={store}/>, document.getElementById('root'));
 };

store.subscribe(render);
render();

export default App;