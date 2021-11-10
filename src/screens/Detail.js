import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';

import {SONGS} from '../constants/data';

const Details = ({navigation, route}) => {
  const [data, setData] = useState([]);

  return (
    <ScrollView style={{flex: 1}}>
      <Text>Detail</Text>
    </ScrollView>
  );
};

export default Details;
