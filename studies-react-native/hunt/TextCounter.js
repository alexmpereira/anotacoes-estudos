import React, {Component} from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

class TextCounter extends Component {

  static defaultProps = {
    limit: 20,
  };

  state = {
    text: '',
  };

  handleChange = (text) => {
    if( text.length <= this.props.limit ) {
      this.setState({text});
    }
  }

  render() {
    const { state, props } = this;

    return (
      <View>
        <TextInput multiline={true} numberOfLines={5} value={state.text} onChangeText={this.handleChange} style={styles.input} />
        <Text>Total: { state.text.length }/{ props.limit }</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    borderColor: 'gray',
    borderWidth: 1,
  },
});

export default TextCounter;
