import React, {useEffect, useState} from 'react';
import {View, Text, Button} from 'react-native';

import {updateText} from './store/reducer';
import {useDispatch, useSelector} from 'react-redux';

const Screen = () => {
  const text = useSelector(state => state.reducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateText('mounted'));
  }, []);

  return (
    <View style={{backgroundColor: 'black'}} testId="container">
      <Text testID="text">{text}</Text>
      <Button
        testID="button"
        onPress={() => dispatch(updateText('button pressed'))}
        title={'Update text'}
      />
    </View>
  );
};

export default Screen;
