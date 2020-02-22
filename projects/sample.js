import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
  TouchableOpacity
} from 'react-native';

export default function App() {
  const [name, setName] = useState('Timileyin');
  const submitHandler = () => {
    setName('Tayo Ayeni');
  };
  const inputHandler = e => {
    setName(e);
  };

  const data = [
    {
      id: '1',
      age: 23,
      name: 'Aduni'
    },
    {
      id: '2',
      age: 33,
      name: 'Tayo'
    },
    {
      id: '3',
      age: 23,
      name: 'Kelechi'
    },
    {
      id: '4',
      age: 13,
      name: 'Ada'
    },
    {
      id: '5',
      age: 23,
      name: 'Tolulope'
    },
    {
      id: '6',
      age: 23,
      name: 'Anu'
    },
    {
      id: '7',
      age: 33,
      name: 'Tayo'
    },
    {
      id: '8',
      age: 23,
      name: 'Kelechi'
    },
    {
      id: '9',
      age: 13,
      name: 'Ada'
    },
    {
      id: '10',
      age: 23,
      name: 'Tolulope'
    }
  ];
  const [people, setPeople] = useState(data);
  const getIdHandler = id => {
    console.log(id);
    setPeople(prevState => {
      return prevState.filter(elem => elem.id != id);
    });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.hero}>Hello World</Text>
      <Text>Name:</Text>
      <TextInput
        style={styles.name}
        placeholder="name"
        onChangeText={inputHandler}
      />
      <Text>{name}</Text>
      <Button title="Click me" onPress={submitHandler} />
      {/* <ScrollView>
        {data.map(elem => {
          return (
            <View key={elem.id}>
              <Text style={styles.items}>{elem.name}</Text>
            </View>
          );
        })}
      </ScrollView> */}
      <FlatList
        // numColumns={2} will need margin
        keyExtractor={item => item.id}
        data={people}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => getIdHandler(item.id)}>
            <Text style={styles.items}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  items: {
    // flex: 1,
    // flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'stretch',
    marginTop: 24,
    padding: 30,
    backgroundColor: 'steelblue',
    fontSize: 20
  },
  name: {
    borderWidth: 1,
    borderColor: '#000',
    margin: 10,
    width: 200
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  hero: {
    justifyContent: 'center'
  }
});
