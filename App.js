import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const plays = [" ", "X", " ", "O", "X", "O", "X ", "O", "X"];
const Cell = ({ play }) => {
  return (
    <View style={styles.cell}>
      <Text style={styles.text}>{play}</Text>
    </View>
  );
};
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.table}>
        <View style={styles.board}>
          {plays.map((p, idx) => (
            <Cell key={idx} play={p} />
          ))}
        </View>
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
});

