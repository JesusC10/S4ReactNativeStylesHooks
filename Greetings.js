import React, {useState} from 'react';
import { StyleSheet, Text, View, Switch} from 'react-native';

export const Greetings = (props) => {
    
    // Toogle Switch State.
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const [isEnabled, setIsEnabled] = useState(false);

    // Change Header Function.
    var styleText = styles.text;
    if(isEnabled) {
      var styleText = StyleSheet.flatten([
        styles.text,
        styles.textColorYellow
      ]);
    }
    return(
      <View style={styles.container}>  
        <Text style={styleText}>Bienvenidos a la Clase {AddingText(props.someText)}</Text>
        <Switch 
          style={styles.switch}
          trackColor={{ false: '#767577', true: '#fff' }}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    );
}

function AddingText(someText){
    return someText + 'de dsipositivos móviles ! \nCon los alumnos:';
  }
  
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 15,
    backgroundColor: 'grey',  
  },
  text:{
    textAlign: 'center',
    color: '#FFF',
    padding: 10, 
    flex: 7,
  },
  textColorYellow:{
    color: '#FFFF00',
  },
  switch:{
    flex: 1,
  }
});