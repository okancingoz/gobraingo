import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './GuessButton.styles';

const GuessButton = ({bgColor, text, onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      style={[styles.container, {backgroundColor: bgColor}]}
      onPress={onPress}>
      <Text style={styles.title}>{text}</Text>
    </TouchableOpacity>
  );
};

export default GuessButton;
