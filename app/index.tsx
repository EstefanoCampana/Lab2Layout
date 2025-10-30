/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import ToDoFormComp from './ToDoForm';
import ToDoListComp from './ToDoList';

function App() {
  return (
    <SafeAreaView>
      <ToDoListComp/>
      <ToDoFormComp/>
    </SafeAreaView>
  );
}

export default App;