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

import Form from './components/Form';
import TodoList from './components/TodoList';

import { TodoService } from './services/TodoService';

export default class App extends React.Component {
  state = {
    list: []
  }

  async componentDidMount(){
    const list = await TodoService.list();
    this.setState({list});
  }

  add = async (text) => {
    const newItem = await TodoService.create({text});
    const list = [...this.state.list, newItem];
    this.setState({list});
  }

  remove = async (item) => {
    await TodoService.remove(item.id);
    const list = this.state.list.filter(itemList => itemList.id !== item.id);
    this.setState({list});
  }

  render() {
    const {state} = this;
    return (
      <View style={styles.container}>
        <Form onAdd={this.add} />
        <TodoList list={state.list} onRemove={this.remove} />
      </View>
    );
  }
};

const styles = StyleSheet.create({

});
