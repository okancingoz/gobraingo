import {React, useState, useEffect} from 'react';
import {View, Alert, Text} from 'react-native';
import styles from './GameScreen.styles';
import pets from '../../pets.json';
import ItemCard from '../../components/ItemCard';
import GuessButton from '../../components/GuessButton';

const getRandomItems = (array, count) => {
  const shuffledArray = shuffleArray([...array]);
  return shuffledArray.slice(0, count);
};

const shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const GameScreen = () => {
  const [randomItems, setRandomItems] = useState([]);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(45);

  useEffect(() => {
    const items = getRandomItems(pets, 3);
    setRandomItems(items);

    const interval = setInterval(() => {
      setTimer(prevTimer => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (timer === 0) {
      endGame();
    }
  }, [timer]);

  const endGame = () => {
    Alert.alert(
      'Oyun Bitti!',
      `Skorunuz: ${score}`,
      [{text: 'Tekrar Başla', onPress: () => setTimer(45)}],
      {cancelable: false},
    );
  };

  const include = () => {
    if (randomItems[0].id === randomItems[2].id) {
      setScore(score + 10);
    } else {
      setScore(score - 10);
    }
    next();
  };

  const exclude = () => {
    if (randomItems[0].id !== randomItems[2].id) {
      setScore(score + 10);
    } else {
      setScore(score - 10);
    }
    next();
  };

  const next = () => {
    const newRandomList = [
      randomItems[1],
      randomItems[2],
      pets[Math.floor(Math.random() * pets.length)],
    ];

    setRandomItems(newRandomList);
  };

  return (
    <View style={styles.container}>
      <View style={styles.timerContainer}>
        <Text style={styles.timer}>00:{timer}</Text>
      </View>
      <View style={styles.cardsContainer}>
        {randomItems.map(item => (
          <ItemCard pet={item} />
        ))}
      </View>

      <View style={styles.bottomBar}>
        <GuessButton bgColor={'#F11A7B'} text={'No'} onPress={exclude} />
        <View style={styles.scoreContainer}>
          <Text style={styles.scoreTitle}>Score</Text>
          <Text style={styles.score}>{score}</Text>
        </View>
        <GuessButton bgColor={'#6528F7'} text={'Yes'} onPress={include} />
      </View>
    </View>
  );
};

export default GameScreen;
