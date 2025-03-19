import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView} from 'react-native';

export default function Rules({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Rules</Text>
            <View style={styles.info}>
                <Text>
                {"You probably already know how to play Tic-Tac-Toe. It's a really simple game, right? That's what most people think.\n\n" +
                            "But if you really wrap your brain around it,\nyou'll discover that Tic-Tac-Toe isn't quite as simple as you think\n\n" +
                            "Rules for Tic - Tac - Toe\n\n" +
                            "1. The game is played on a grid that's 3 squares by 3 squares.\n\n" +
                            "2. You are X, your friend (or the computer in this case) is 0. Players take turns putting their marks in empty squares.\n\n" +
                            "3. The first player to get 3 of her marks in a row (up, down, across, or diagonally) is the winner.\n\n" +
                        "4. When all 9 squares are full, the game is over. If no player has 3 marks in a row, the game ends in a tie"}   
                </Text>
            </View>
            <View style={styles.buttonCon}>
                <Button color='#1c252e' title="Back" onPress={() => navigation.navigate('Home')}></Button>
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
    info: {
        margin: 20,
        justifyContent: 'center',
        alignText: 'center',
    }
});