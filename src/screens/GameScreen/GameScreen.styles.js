import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  timerContainer: {
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    padding: 12,
    marginHorizontal: '40%',
    elevation: 2,
    borderRadius: 9,
  },
  timer: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    color: '#FF6969',
  },
  cardsContainer: {
    flexDirection: 'row',
  },
  scoreTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#909c9e',
    textAlign: 'center',
  },
  bottomBar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  scoreContainer: {
    gap: 12,
  },
  score: {
    padding: 12,
    textAlign: 'center',
    fontSize: 24,
    backgroundColor: '#fff',
    borderRadius: 50,
    color: '#607274',
    fontWeight: '600',
    elevation: 6,
  },
});
