import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const GoalItem = (props) => {
    return (
        <TouchableOpacity activeOpacity={0.6} onPress={() => props.onDelete(props.id)}>
            <View style={styles.listItem}>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        backgroundColor: "#ccc",
        borderColor: "#ccc",
        borderWidth: 1,
        marginTop: 20,
        borderRadius: 5,
        shadowColor: "#ccc",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 1,
        elevation: 10,
    },
});

export default GoalItem;
