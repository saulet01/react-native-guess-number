import React, { useState } from "react";
import { View, Button, TextInput, StyleSheet, Modal } from "react-native";

const GoalInput = (props) => {
    const [enteredGoal, setEnteredGoal] = useState("");

    const addGoalHandler = () => {
        props.addGoalHandler(enteredGoal);
        setEnteredGoal("");
    };

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput value={enteredGoal} onChangeText={(e) => setEnteredGoal(e)} placeholder="Course goal..." style={styles.input} />
                <View style={styles.buttons}>
                    <View style={styles.buttonError}>
                        <Button title="CANCEL" color="#ffffff" onPress={props.onCancel} />
                    </View>
                    <View style={styles.buttonSuccess}>
                        <Button title="ADD" color="#ffffff" onPress={addGoalHandler} />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
    input: {
        width: "80%",
        borderColor: "black",
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
    },
    buttons: {
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        width: "50%",
    },
    buttonSuccess: {
        width: "45%",
        backgroundColor: "green",
        borderRadius: 5,
    },
    buttonError: {
        width: "45%",
        backgroundColor: "red",
        borderRadius: 5,
    },
});

export default GoalInput;
