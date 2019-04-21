import React, { Component } from 'react';
import styled               from 'styled-components';
import { withFormsy }       from 'formsy-react';

const FormInputStyled = styled.div`
  input {
    display: block;
    width: 100%;
    box-sizing: border-box;
    
    &[hidden] {
      display: none;
    }
  }
  
  span {
    font-size: .9em;
    color: red;
  }
`;

class _FormInput extends Component {
  constructor(props) {
    super(props);
    this.changeValue = this.changeValue.bind(this);
  }

  changeValue(event) {
    this.props.setValue(event.currentTarget.value);
    if (this.props.onChange) {
      this.props.onChange(event.currentTarget.value);
    }
  }

  render() {
    const errorMessage = this.props.getErrorMessage();
    return (
      <FormInputStyled>
        <input
          max={this.props.max}
          placeholder={this.props.placeholder}
          readOnly={this.props.readOnly}
          hidden={this.props.hidden ? this.props.hidden : false}
          id={this.props.id}
          onChange={this.changeValue}
          onFocus={this.props.onFocus}
          onBlur={this.props.onBlur}
          type={this.props.type || 'text'}
          value={this.props.getValue() || ''}
        />
        <span className="errorMsg">{errorMessage}</span>
      </FormInputStyled>
    );
  }
}

export const FormInput = withFormsy(_FormInput);

