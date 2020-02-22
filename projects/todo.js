import React, { useState, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  Button,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView
} from 'react-native';

export default function App() {
  const [todo, setTodo] = useState([{ id: '1', todo: 'Get to the Gym' }]);
  const [input, setInput] = useState(null);
  const submitHandler = () => {
    if (input.length < 3) {
      Alert.alert('OOPS', 'Todo length must be greater than three', [
        { text: 'Ok', onPress: () => console.log('Ok') }
      ]);
    } else {
      setTodo(prev => [
        ...prev,
        {
          id: `${todo.length + 1}`,
          todo: input
        }
      ]);
      setInput('');
    }

    // console.log(input.desc, input.title);
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Text style={styles.header}>TODO LIST</Text>
        <View style={{ padding: 20 }}>
          <TextInput
            onChangeText={val => setInput(val)}
            style={styles.todoInput}
            placeholder="todo"
            value={input}
          />
          <View style={styles.submitButton}>
            <Button title="add Todo" onPress={submitHandler} />
          </View>
        </View>
        <ScrollView scrollEnabled style={{ padding: 20 }}>
          <FlatList
            keyExtractor={item => item.id}
            data={todo}
            renderItem={({ item }) => (
              <View style={styles.todoItemWrapper}>
                <Text style={styles.items}> {item.todo}</Text>
              </View>
            )}
          />
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  submitButton: {
    marginTop: 10
  },
  container: {
    flex: 1,
    backgroundColor: '#fff'
    // paddingTop: 40,
    // paddingHorizontal: 20
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  header: {
    backgroundColor: '#2c3e50',
    color: '#fff',
    fontSize: 40,
    textAlign: 'center'
  },
  todoInput: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#000',
    padding: 10
  },
  todoItemWrapper: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#2ecc71',
    borderRadius: 4,
    borderStyle: 'dashed'
    // backgroundColor: '#2ecc71'
  },
  items: {
    padding: 10,
    marginTop: 1,
    fontSize: 20
  }
});

let item = 'foo'
let list = ['foo', 'bar']

const arg3 = (bol)=> bol ? 'nice' : 'sad'

const processContains =(arg, arg2, arg3)=>{
  let bol = false
  if (arg2.includes(arg)){
   bol = true
  }
 return arg3(bol)
}

console.log(processContains(item, list, arg3))
