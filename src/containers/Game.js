import React, { Component }   from 'react';
import { FormInput }          from '../components/Components';
import { unit, commonStyles } from '../styles/styles';
import styled                 from 'styled-components';
import { opacify }            from 'polished';
import Formsy                 from 'formsy-react';
import names                  from '../styles/names';
import store                  from '../store/store';


export class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      idClass: null,
      pw: '',
      pwClass: null,
      formClass: '',
    };
  }

  componentWillMount() {

  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        GAME
      </div>
    );
  }
}