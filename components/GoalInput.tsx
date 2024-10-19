import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View, Modal } from "react-native";

interface GoalInputProps {
  onAddGoal: (goal: string) => void; // Define the type for onAddGoal
  visible: boolean;
}
const GoalInput: React.FC<GoalInputProps> = (props) => {
  const [enteredGoalText, setEnteredGoalText] = useState<string>("");
  function goalInputHandler(enteredText: string) {
    console.log(enteredText);
    setEnteredGoalText(enteredText);
  }

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  };

  return (
    <Modal visible={props.visible} animationType={"slide"}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <Button title="Add Goal" onPress={addGoalHandler} />
          <Button title={"Cancel"} />
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  buttonContainer: {
    flexDirection: "row",
  },
});
