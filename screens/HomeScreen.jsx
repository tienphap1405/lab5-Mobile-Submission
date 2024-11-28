import React, { useState } from 'react';
import { Button, StyleSheet } from 'react-native';
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import MainLayout from '../layouts/MainLayout';
import { View } from 'react-native-web';

export default function HomeScreen({ navigation }) {
    const [tasks, setTasks] = useState([]);

    const addTask = (taskText) => {
        if (!tasks.includes(taskText)) {
            setTasks([...tasks, taskText]);
        }
    };

    return (
        <MainLayout>
            <TodoList tasks={tasks} st />
            <TodoForm addTask={addTask} />
            <View style = {styles.inputContainer}>
                <Button
                    title="Go to About"
                    onPress={() => navigation.navigate('About')}
                />
            </View>
            
        </MainLayout>
    );
}
const styles = StyleSheet.create({
    inputContainer: {
        padding: '20px'
    }
  });
