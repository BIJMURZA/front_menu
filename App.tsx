import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
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
              <View style={styles.gameImageContainer} >
                <Image source={require("./Assets/Posters/poster_Resident_Evil.jpeg")} style={styles.gameImage}/>
              </View>
              <View style={styles.gameNameContainer}>
                <Text style={styles.gameNameText}> Resident Evil 4 </Text>
              </View>
              <Text style={styles.priceText}> от 1000 ₽</Text>
            </View>
            <View style={styles.gameContainer}>
            </View>
            <View style={styles.gameContainer}>
            </View>
            <View style={styles.gameContainer}>
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
    height: 270,
    width: 160,
    borderRadius: 15,
    backgroundColor: '#ebebeb',
    marginRight: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginTop: 10,
    overflow: 'hidden',
  },
  gameImageContainer: {
    height: 200,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
  },
  gameNameContainer: {
    height: 35,
    width: '100%',
    justifyContent: 'center',
  },
  gameImage: {
    height: '100%',
    width: '100%',
    resizeMode: "cover",
  },
  gameNameText: {
    fontSize: 14,
    color: 'black',
    textAlign: 'center',
  },
  priceText: {
    fontSize: 14,
    color: 'black',
    textAlign: 'center',
  },
});

export default App;
