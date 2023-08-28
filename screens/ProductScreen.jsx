import {View, ScrollView} from 'react-native';
import React from 'react';
import Product from '../components/Product';
import Header from '../components/Header';
const products = [
  {
    name: 'samsung',
    price: 350,
    color: 'white',
    img: 'https://img.freepik.com/premium-vector/3d-high-quality-smartphone-mockup-with-dynamic-island-isolated-background-show-mobile-app_659151-470.jpg',
  },
  {
    name: 'iphone',
    price: 350,
    color: 'white',
    img: 'https://img.freepik.com/premium-vector/3d-high-quality-smartphone-mockup-with-dynamic-island-isolated-background-show-mobile-app_659151-470.jpg',
  },
  {
    name: 'oppo',
    price: 350,
    color: 'white',
    img: 'https://img.freepik.com/premium-vector/3d-high-quality-smartphone-mockup-with-dynamic-island-isolated-background-show-mobile-app_659151-470.jpg',
  },
  {
    name: 'vivo',
    price: 350,
    color: 'white',
    img: 'https://img.freepik.com/premium-vector/3d-high-quality-smartphone-mockup-with-dynamic-island-isolated-background-show-mobile-app_659151-470.jpg',
  },
];
const ProductScreen = ({navigation}) => {
  return (
      <View style={{backgroundColor:"#FAF0E6"}}>
        <Header navigation={navigation} />
        <ScrollView style={{marginBottom: 59}}>
          {products.map((item, index) => (
            <Product key={index} data={item} />
          ))}
        </ScrollView>
      </View>
  );
};
export default ProductScreen;
