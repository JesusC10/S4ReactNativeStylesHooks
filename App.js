import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import { Header } from './Header';

export default function App() {

  const [value, onChangeText] = useState('Ingresa tu texto aqui');
  const [list, onChangeList] = useState(["Juan"]);

  const addButton = () => onChangeList([...list, value]);
  const deleteButton = () => { onChangeList( list.filter(function(ele){
    return ele != list[list.length - 1];
  }))};

  return(
    <>
    <Header />

    <View style={stylesList.container}>
      <FlatList
        data={list}
        renderItem = { ({item}) => (
            <Text style={stylesList.text} key={item} > {item} </Text>
        )}
      />
    </View>

    <TextInput
      style={stylesTextInput.textInput}
      onChangeText ={text => onChangeText(text)}
      value={value}
    />

    <View style={stylesFootter.container}>
      <Button 
        style={stylesFootter.buttonAdd}
        title= "Add"
        color="coral"
        onPress={addButton}
      />
        <Button
          style={stylesFootter.buttonDelete}
          title="Delete"
          color="coral"
          onPress={deleteButton}
        />
    </View>
    </>
  );

}

const stylesTextInput = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  textInput: {
    height: 40,
    textAlign: 'center',
    borderColor: 'gray',
    borderWidth: 1
  }
});

const stylesList = StyleSheet.create({
  container:{
    flex: 15,
    padding: 15,
    justifyContent: 'flex-start',
    alignSelf: 'stretch',
  },
  text:{
    paddingTop: 10,
    borderBottomColor: "grey",
    borderBottomWidth: 1
  }
});

const stylesFootter = StyleSheet.create({
  container:{
    flexDirection: 'row',
    justifyContent:'space-around',
    paddingBottom: 100
  },
  buttonAdd:{
    flex:1
  },
  buttonDelete:{
    flex:1
  }
});


