import {Button, Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {addToCart, removeFromCart} from '../redux/action';
import {useDispatch, useSelector} from 'react-redux';

const Product = props => {
  const cartData = useSelector(state => state.reducer);
  const dispatch = useDispatch();
  const [isAdded, setIsAdded] = useState(false);
  useEffect(() => {
    let result = cartData.filter(e => e.name === props.data.name);
    if (result.length) setIsAdded(true);
    else setIsAdded(false);
  }, [cartData]);
  const add = () => {
    dispatch(addToCart(props.data));
  };
  const remove = () => {
    dispatch(removeFromCart(props.data));
  };
  return (
    <View style={styles.container}>
      <View style={styles.text}>
        <Text style={styles.text}>name : {props.data.name}</Text>
        <Text style={styles.text}>Price : {props.data.price}</Text>
        <Text style={styles.text}>Color : {props.data.color}</Text>
      </View>
      <Image style={{width: 100, height: 100}} source={{uri: props.data.img}} />
      {isAdded ? (
        <Button title="Remove" onPress={remove} />
      ) : (
        <Button title="Add to Cart" onPress={add} />
      )}
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#B9B4C7',
    margin: 15,
    borderRadius: 5,
    padding: 5,
    shadowColor: '#5C5470',
    shadowOpacity: 0.5,
    elevation: 5,
  },
  text: {
    textAlign: 'justify',
    color: '#fff',
  },
});
