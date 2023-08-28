import {View, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getUserList} from '../redux/action';

const UserScreen = (props) => {
  const dispatch = useDispatch();
  const userData = useSelector(state => state.reducer[0].users);
  useEffect(() => {
    dispatch(getUserList());
  }, []);
  console.warn(userData);
  return (
    <ScrollView style={{flex:1}}>
      {userData.map(e=><Text key={e.id}>{e.username}</Text>)}
    </ScrollView>
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
export default UserScreen;
