import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const App = () =>  {
  return (
      <SafeAreaView style={styles.Container}>
        <StatusBar barStyle="default"/>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}> ≡ </Text>
          <Text style={styles.headerText}> RUSYNC </Text>
          <Text style={styles.headerText}> SEARCH </Text>
        </View>
        <ScrollView>
          <View style={styles.mainContainer}>
            <View style={styles.gameContainer}>
              <Text>Hello</Text>
            </View>
            <View style={styles.gameContainer}>
              <Text>Hello</Text>
            </View>
            <View style={styles.gameContainer}>
              <Text>Hello</Text>
            </View>
            <View style={styles.gameContainer}>
              <Text>Hello</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    height: 40,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'black',
    padding: 10,
  },
  headerText: {
    color: 'white',
    fontSize: 18,
  },
  Container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#c0c0c0',
  },
  mainContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    justifyContent: 'space-between',
  },
  gameContainer: {
    height: 175,
    width: 115,
    borderRadius: 15,
    borderColor: 'red',
    borderWidth: 1,
    backgroundColor: 'green',
    marginRight: 10,
    marginBottom: 10,
    marginTop: 10,
  },
  gameImage: {

  },
});

export default App;
