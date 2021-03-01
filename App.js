import React, { useState, Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, ScrollView } from 'react-native';
import {Greetings} from './Greetings';

export default function App() {
  // Text Inputs Variables.
  const [value, onChangeText] = useState('Useless Placeholder');
  const [list, onChangeList] = useState(["Juan"]);
  
  // Add Button.
  const addButton = () => onChangeList( [...list, value] );

  // Delete Button.
  const deleteButton = () => { onChangeList( list.filter(function(ele) { 
    return ele != list[list.length - 1]; 
  }))};

  const ListPerson = () => list.map( person => (<Text style={stylesList.text} key={person} >{person} </Text>))

  return (
    <>
      <Greetings someText="con Ruben y David "/>
      <View style={stylesList.container}>
        <ScrollView> 
          <ListPerson /> 
        </ScrollView> 
      </View>
      <View style={stylesTextInput.container}>
        <TextInput
          style={stylesTextInput.textInput}
          onChangeText={text => onChangeText(text)}
          value={value}
        />
      </View>
      <View style={stylesFooter.container}>
        <Button 
          style={stylesFooter.buttonAdd}
          title="    Add    "
          color="coral"
          onPress={addButton}
        />
        <Button 
          style={stylesFooter.buttonDelete}
          title=" Delete "
          color="coral"
          onPress={deleteButton}
        />
      </View> 
    </>
  );
}

const stylesList = StyleSheet.create({
  container: {
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

const stylesTextInput = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  textInput:{
    height: 40,
    textAlign: 'center', 
    borderColor: 'gray', 
    borderWidth: 1,
  }
});

const stylesFooter = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 15
  },
  buttonAdd: {
    flex:1,
  },
  buttonDelete: {
    flex:1,
  }
});
