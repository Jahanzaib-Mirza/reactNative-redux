import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Header = (props) => {
  const cartData = useSelector(state => state.reducer);
  const [items, setItems] = useState(0);
  useEffect(() => {
    setItems(cartData.length);
  }, [cartData]);

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={()=>props.navigation.navigate("User")}>
        <View style={styles.headerButton}>
          <Ionicons name="people" color="#fff" size={20} />
        </View>
      </TouchableOpacity>
      <Text style={styles.headerText}>{items}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#352F44',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
  },
  headerText: {
    textAlign: 'right',
    color: '#fff',
    fontSize: 20,
    marginEnd: 5,
    fontWeight: 'bold',
  },
  headerButton: {
    marginStart: 5,
    backgroundColor: '#5C5470',
    width: 50,
    alignItems: 'center',
    padding: 5,
    borderRadius: 5,
  },
});
export default Header;
