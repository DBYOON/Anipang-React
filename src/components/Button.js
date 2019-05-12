import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { unit, commonStyles } from '../styles/styles';
import { opacify } from 'polished';

const StartButtonStyled = styled.button`
  padding: ${unit(10)} ${unit(20)};
  border-radius: ${unit(4)};
  color: ${commonStyles.voidColor};
  background: ${opacify(-.1, commonStyles.activeColor)};
  width: ${unit(200)};
`;

export class StartButton extends Component {
  render() {
    return (
      <StartButtonStyled {...this.props}>{this.props.children}</StartButtonStyled>
    );
  }
}

const LogoutButtonStyled = styled.button`
  padding: ${unit(10)} ${unit(20)};
  border-radius: ${unit(4)};
  color: ${commonStyles.voidColor};
  background: ${opacify(-.1, commonStyles.activeColor)};
  width: ${unit(200)};
`;

export class LogoutButton extends Component {
  render() {
    return (
      <LogoutButtonStyled {...this.props}>{this.props.children}</LogoutButtonStyled>
    );
  }
}