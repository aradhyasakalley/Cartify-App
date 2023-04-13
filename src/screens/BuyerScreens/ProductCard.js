import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ProductCard = () => {
  // Hardcoded values for demonstration
  const name = "Example Product";
  const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
  const price = 49.99;
  const availability = "In Stock";
  const quantity = 5;
  const image = require('../../../assets/images/shoe.jpg'); 

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.price}>Price: ${price}</Text>
        <Text style={styles.availability}>Availability: {availability}</Text>
        <Text style={styles.quantity}>Quantity: {quantity}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 8,
    overflow: 'hidden',
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 16,
    elevation: 4,
  },
  image: {
    
    width: 80,
    height: 80,
    borderRadius: 4,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 16,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 8,
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  availability: {
    fontSize: 14,
    color: 'green',
    marginBottom: 8,
  },
  quantity: {
    fontSize: 14,
    color: 'gray',
  },
});

export default ProductCard;
