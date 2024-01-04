import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    margin: 8,
    padding: 12,
    backgroundColor: '#FFFBF5',
    flex: 1,
    alignItems: 'center',
    gap: 16,
    borderRadius: 9,
    elevation: 6,
  },
  image: {width: 100, height: 100, resizeMode: 'contain'},
  name: {
    fontSize: 14,
    fontWeight: '500',
    color: '#444',
  },
});
