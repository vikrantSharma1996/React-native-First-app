import React, {useState} from 'react';
import { StyleSheet, Text, View, Button,TextInput,ScrollView,FlatList} from 'react-native';

export default function App() {
  const [entredGoal,setEntredGoal] = useState('')

  const[courseGoals,setCourseGoals] = useState([])

  const goalInputHandler = (entredText) => {
    setEntredGoal(entredText)
  }

  const addGoalHandler = () =>{
    setCourseGoals(currentGoals => [
      ...courseGoals,
      {uid: Math.random.toString ,value: entredGoal}
    ])
    console.log(entredGoal);
  }

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
      <TextInput placeholder="Course goal"
       style={styles.input} 
       onChangeText={goalInputHandler} 
       value = {entredGoal}
       />
      <Button title="ADD" onPress = {addGoalHandler} />
      </View>
      <FlatList 
      keyExtractor={(item,index) => item.uid}
      data={courseGoals} 
      renderItem={itemData =>(
         <View style={styles.listItem}>
            < Text>{itemData.item.value}</Text>
          </View>
          )}
          />
  
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row', 
    justifyContent:'space-between',
    alignItems: 'center'
  },
  input: {
    borderColor: 'black',
  borderWidth: 1, 
  padding: 10,
   width: '80%'
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderWidth: 1,

  }
});