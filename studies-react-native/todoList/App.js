import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import TodoList from './components/TodoList';

export default class App extends React.Component {
  state = {
    list: [
      {id: '1', text: 'abc'},
      {id: '2', text: 'def'}
    ]
  }

  render() {
    const {state} = this;
    return (
      <View style={styles.container}>
        <TodoList list={state.list} />
      </View>
    );
  }
};

const styles = StyleSheet.create({

});
