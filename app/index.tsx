/**
 * My To Do List App
 *
 * @format
 */

import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import ToDoFormComp from './ToDoForm';
import ToDoListComp from './ToDoList';

function App() {
  const [tasks, setTasks] = useState<string[]>([
  'Do laundry',
  'Go to gym',
  'Walk dog'
]);

  return (
    <SafeAreaView>
      <ToDoListComp tasks={tasks}/>
      <ToDoFormComp/>
    </SafeAreaView>
  );
}

export default App;