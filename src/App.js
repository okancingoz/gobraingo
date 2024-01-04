import {View, Text, Image, StyleSheet, Button} from 'react-native';
import GameScreen from './screens/GameScreen';

const App = () => {
  return (
    <View style={styles.container}>
      <GameScreen />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {flex: 1},
});
