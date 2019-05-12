import React, { Component }   from 'react';
import { FormInput }          from '../components/Components';
import { unit, commonStyles } from '../styles/styles';
import styled                 from 'styled-components';
import { opacify }            from 'polished';
import Formsy                 from 'formsy-react';
import names                  from '../styles/names';
import store                  from '../store/store';

const FormStyled = styled.div`
  height: 100vh;
  text-align: center;
  font-size: 0;

  .content {
    position: relative;
    display: inline-block;
    margin-bottom: ${unit(-commonStyles.footer)};
    padding: ${unit(10)} ${unit(30)};
    border: ${unit(1)} solid ${opacify(-.7, commonStyles.solidColor)};
    vertical-align: middle;
    background: ${commonStyles.voidColor};
    
    h4 {
      font-size: ${unit(15)};
      
      span {
        position: absolute;
        left: 0;
        top: 50%;
        margin: ${unit(-50)} ${unit(-120)};
      }
      
      strong {
        display: block;
      }
    }
    
    label {
      position: relative;
      display: block;
      font-size: ${props => unit(props.fontSize)};
      margin: ${unit(50)} 0;
      
      &.focus {
        span {
          top: ${unit(-26)};
          bottom: auto;
          color: ${commonStyles.solidColor};
        }
      }
       
      &.complete {
        span {
          top: ${unit(-26)};
          bottom: auto;
          color: ${commonStyles.fontColor};
        }
      }
      
      span {
        position: absolute;
        top: 0;
        right: ${props => unit(props.paddingHorizon)};
        bottom: 0;
        left: ${props => unit(props.paddingHorizon)};
        height: ${props => unit(props.fontSize)};
        margin: auto;
        color: ${opacify(-.5, commonStyles.solidColor)};
        line-height: 1;
        text-align: left;
        pointer-events: none;
        transition: top .4s, color 1s;

        &.errorMsg {
          top: 100%;
          right: 0;
          bottom: auto;
          left: auto;
          margin-top: ${unit(2)};
          color: red;
        }        
      }
      
      input {
        width: ${unit(300)};
        height: ${unit(36)};
        padding: ${unit(6)} ${props => unit(props.paddingHorizon)};
        border: ${unit(1)} solid ${opacify(-.7, commonStyles.solidColor)};
        color: ${commonStyles.solidColor};
        background: ${commonStyles.voidColor};
      }
      
      &:nth-child(4) {
        margin: 0 0;
      }
      
      &:nth-child(5) {
        margin: ${unit(20)} 0;
        text-align: left;
        
        span {
            top: 2px;
            left: ${unit(5)};
            color: ${commonStyles.solidColor};
            vertical-align: middle;
            position: relative;
        }
      }
    }

    button {
      display: block;
      width: 100%;
      height: ${unit(36)};
      margin: 0 auto ${unit(30)};
      font-size: ${unit(12)};
      border: ${unit(1)} solid ${opacify(-.7, commonStyles.solidColor)};
      
      &:after {
        transform: none !important;
      }
    }

    span {
      &:nth-child(5) {
        display: inline;
        position: absolute;
        font-size: ${unit(12)};
        color: red;
        top: 390px;
        left: 37px;
      }
    }
  }  
`;

export class Login extends Component {
  constructor(props) {
    super(props);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.submit = this.submit.bind(this);
    this.noSubmit = this.noSubmit.bind(this);
    this.state = {
      id: '',
      idClass: null,
      pw: '',
      pwClass: null,
      formClass: '',
    };
  }

  componentWillMount() {
    if (localStorage.token !== '' && localStorage.token !== undefined) {
      window.location = '/#/' + names.gameView.href;
    }
  }

  componentDidMount() {

  }

  onFocus(event) {
    switch (event.target.id) {
      case 'username':
        this.setState({
          idClass: 'focus',
        });
        break;
      case 'password':
        this.setState({
          pwClass: 'focus',
        });
        break;
    }
  }

  onBlur(event) {
    const length = event.target.value.length;
    switch (event.target.id) {
      case 'username':
        if (length > 0) {
          this.setState({
            idClass: 'complete',
          });
        } else {
          this.setState({
            idClass: '',
          });
        }
        break;
      case 'password':
        if (length > 0) {
          this.setState({
            pwClass: 'complete',
          });
        } else {
          this.setState({
            pwClass: '',
          });
        }
        break;
    }
  }

  noSubmit() {
    this.setState({
      formClass: 'inValid',
    });
    console.log('noSubmit');
  }

  submit(model) {
    let response = {
      'username': model.username,
      'password': model.password,
    };
    if (response.username === 'admin' && response.password === 'admin123') {
      localStorage.token = 'testToken';
      store.dispatch({
        type: 'setToken',
        token: localStorage.token,
      });
    }

    if (localStorage.token !== '' && localStorage.token !== undefined) {
      //localStorage.token = '';
      window.location = '/#/' + names.gameView.href;
    }
  }

  render() {
    return (
      <Formsy
        onValidSubmit={this.submit}
        onInvalidSubmit={this.noSubmit}
        className={this.state.formClass ? this.state.formClass : ''}
      >      
        <FormStyled
          fontSize={16}
          paddingHorizon={12}
        >
          <div className="content">
            <h4><strong>애니팡 로그인</strong></h4>
            <label className={this.state.idClass}>
              <span>아이디</span>
              <FormInput
                id="username"
                name="username"
                onFocus={this.onFocus}
                onBlur={this.onBlur}
                validations={{
                  maxLength: 64,
                  minLength: 3,
                }}
                validationErrors={names.validationErrors}                
              />
            </label>
            <label className={this.state.pwClass}>
              <span>비밀번호</span>
              <FormInput
                id="password"
                name="password"
                type="password"
                onFocus={this.onFocus}
                onBlur={this.onBlur}
                validations={{
                  maxLength: 48,
                  minLength: 6,
                }}
                validationErrors={names.validationErrors}                
              />
            </label>
            <button type="submit" className="submitBtn">로그인</button>
            <span>테스트 아이디: admin / 테스트 비밀번호: admin123</span>
          </div>
        </FormStyled>
      </Formsy>
    );
  }
}