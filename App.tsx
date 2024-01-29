import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  View,
} from 'react-native';

type rusync = {
  aid: number,
  game_name: string;
  market: string;
  price: string[];
  games: string;
  minPrice: string;
};

const App = () =>  {
  const [games, setGames] = useState<rusync[]>([]);
  useEffect(() => {
    fetch(`http://192.168.0.117:3000/games`)
        .then(response => response.json())
        .then(data => {
          setGames(data.games);})
        .catch(error => console.error(error));
  }, []);


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
            {games.map((game, index) => (
            <View key={index} style={styles.gameContainer}>
              <View style={styles.gameImageContainer} >
                <Image source={require("./Assets/Posters/{aid}.jpeg")} style={styles.gameImage}/>
              </View>
              <View style={styles.gameNameContainer}>
                <Text style={styles.gameNameText}> {game.game_name} </Text>
              </View>
              <Text style={styles.priceText}> {game.minPrice} </Text>
            </View>
          ))}
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
    width: 180,
    borderRadius: 15,
    backgroundColor: '#ebebeb',
    marginRight: 5,
    marginBottom: 10,
    marginLeft: 5,
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
    width: '90%',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: 'blue',
    alignSelf: 'center',
    marginBottom: 5,
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
