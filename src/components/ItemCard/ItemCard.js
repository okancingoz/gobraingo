import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './ItemCard.styles';

const ItemCard = ({pet}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: pet.imageUrl}} />
      <Text style={styles.name}>{pet.name}</Text>
    </View>
  );
};

export default ItemCard;
