import React, { Component } from 'react';

import { View, TextInput, Button } from 'react-native';

// import { Container } from './styles';

export default class Form extends Component {

  static defaultProps = {
    onAdd: () => {}
  }

  state = {
      text: ''
  }

  add = () => {
    const {state} = this;
    if(state.text){
        this.props.onAdd(state.text);
        this.handleChange('');
    }
  }

  handleChange = (text) => {
    this.setState({text});
  }

  render(){
    const { state } = this;
    return (
        <View>
            <TextInput value={state.text} onChangeText={this.handleChange} />
            <Button 
                title="Add"
                color="#0062ac"
                onPress={this.add}
            />
        </View>
    );
  }
}
