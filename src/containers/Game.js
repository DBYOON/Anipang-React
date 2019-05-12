import React, { Component }   from 'react';
import { StartButton, LogoutButton } from '../components/Components';
import { unit, commonStyles } from '../styles/styles';
import styled                 from 'styled-components';
import { opacify }            from 'polished';
import Formsy                 from 'formsy-react';
import names                  from '../styles/names';
import store                  from '../store/store';

const GameStyled = styled.div`
  .game_start-btn-bg-hide {
    z-index: 99999;
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: rgba(0,0,0,0.5);
    left: 0;
    top: 0;

    button:nth-of-type(1) {
      position: absolute;
      transform: translate(-50%, -50%);
      left: 50%;
      top: 50%;
    }
    button:nth-of-type(2) {
      position: absolute;
      transform: translate(-50%, -50%);
      left: 50%;
      top: 57%;
      padding: ${unit(10)} ${unit(20)};
      border-radius: ${unit(4)};
      color: ${commonStyles.voidColor};
      background: ${opacify(-.1, commonStyles.activeColor)};
      width: ${unit(200)};
    }    
  }
  .game_start-btn-bg-show {
    display: none;
    opacity: 0;

    button:nth-of-type(1) {
      display: none;
      opacity: 0;
    }
    button:nth-of-type(2) {
      display: none;
      opacity: 0;
    }    
  }
  
  .game_board {
    width: 100%;
  }
`;

export class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameStartClass: null,
    };
    this.gameStart = this.gameStart.bind(this);
    this.gameLogout = this.gameLogout.bind(this);
  }

  componentWillMount() {
    console.log('GAME localStorage.token: ' + localStorage.token);
    console.log('GAME store.getState(): ' + store.getState().token);
    
    if (localStorage.token === undefined && window.location !== '/#/login') {
      window.location = '/#/' + names.login.href;
    } 

    if ( this.state.gameStartClass === null ) {
      this.setState({
        gameStartClass: 'game_start-btn-bg-hide'
      });
    }
  }

  componentDidMount() {

  }
  
  gameStart(event) {
    this.setState({
      gameStartClass: 'game_start-btn-bg-show'
    });    
  }

  gameLogout() {

  }

  render() {
    return (
      <GameStyled>
        <div className={this.state.gameStartClass}>
          <StartButton onClick={this.gameStart}><span>게임시작</span></StartButton>
          <button onClick={() => {
            localStorage.removeItem('token');
            window.location.reload();
          }}><span>로그아웃</span></button>
        </div>
        <div className="game_board">

        </div>
      </GameStyled>
    );
  }
}