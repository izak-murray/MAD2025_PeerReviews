import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function Home({ navigation }) {
    const plays = [" ", "X", " ", "O", "X", "O", "X ", "O", "X"];
    const Cell = ({ play }) => {
  return (
    <View style={styles.cell}>
      <Text style={styles.text}>{play}</Text>
    </View>
  );
};

return (
    <View style={styles.container}>
      <View style={styles.table}>
            <Text style={styles.title}>Tic Tac Toe</Text>
        <View style={styles.board}>
          {plays.map((p, idx) => (
            <Cell key={idx} play={p} />
          ))}
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <Pressable style={styles.rules} onPress={() => navigation.navigate("Rules")}>
            <Text style={styles.rulesText}>Rules</Text>
        </Pressable>
        <Pressable style={styles.credits} onPress={() => navigation.navigate("Credit")}>
            <Text style={styles.rulesText}>Credits</Text>
            </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c252e",
    justifyContent: "center",
  },
  title: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 40,
    position: 'absolute',
    top: 20,
  },
  table: {
    flex: 1,
    backgroundColor: "#00c4c4",
    margin: 22,
    justifyContent: "center",
    alignItems: "center",
  },
  board: {
    width: 300,
    height: 300,
    backgroundColor: "#d60056",
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingTop: 25,
  },
  cell: {
    width: 80,
    height: 80,
    backgroundColor: "#1c252e",
    borderWidth: 2,
    borderColor: "#00c4c4",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20,
    bottom: 110
  },
  rules: {
    backgroundColor: "#1c252e",
    padding: 10,
    margin: 10,
    alignItems: "center",
    borderRadius: 10,
    width: 90,
  },
  rulesText: {
    color: "white",
    fontSize: 20,
  },
  credits: {
    backgroundColor: "#1c252e",
    margin: 10,
    padding: 10,
    alignItems: "center",
    borderRadius: 10,
    width: 90,


  },
});

