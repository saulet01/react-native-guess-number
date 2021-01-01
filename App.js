import React, { useState } from "react";
import { View, FlatList, Button } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
    const [courseGoals, setCourseGoals] = useState([]);
    const [isAddMode, setIsAddMode] = useState(false);

    const addGoalHandler = (enteredGoal) => {
        setCourseGoals((currentGoals) => [...currentGoals, { id: Math.random().toString(), value: enteredGoal }]);
        setIsAddMode(false);
    };

    const removeGoalHandler = (goalId) => {
        setCourseGoals((currentGoals) => {
            return currentGoals.filter((goal) => goal.id !== goalId);
        });
    };

    const cancelGoalAdditionHandler = () => {
        setIsAddMode(false);
    };

    return (
        <View style={{ padding: 50 }}>
            <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
            <GoalInput visible={isAddMode} addGoalHandler={addGoalHandler} onCancel={cancelGoalAdditionHandler} />
            <FlatList data={courseGoals} renderItem={(itemData) => <GoalItem id={itemData.item.id} title={itemData.item.value} onDelete={removeGoalHandler} />} />
        </View>
    );
}
