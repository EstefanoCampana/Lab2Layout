import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

interface ToDoFormCompProps{
  addTask: Function
}

const ToDoFormComp: React.FC<ToDoFormCompProps> = ({addTask}) => {
  const [taskText, setTaskText] = useState('');
    return(
              <View style={styles.form}>
                <TextInput
                  style={styles.input}
                  placeholder="Add a new task..."
                  onChangeText={(text) => setTaskText(text)}
                  value={taskText}/>
                <Button onPress={() => {if(taskText === '') return;
                                        else{addTask(taskText);setTaskText('')}}} title="Add" />
              </View>
    )
}
export default ToDoFormComp;

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
});