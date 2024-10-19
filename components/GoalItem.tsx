import React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
interface GoalItemProps {
  text: string;
  onDeleteItem: (id: string) => void;
  id: string;
  // children?:React.ReactNode
}

const GoalItem: React.FC<GoalItemProps> = (props) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>
          {props.text}
          {/*{props.children}*/}
        </Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: "white",
    padding: 8,
  },
});
