/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useEffect, useState} from 'react';
import {Text, View, StatusBar} from 'react-native';

import {
  DynamicStyleSheet,
  DynamicValue,
  useDynamicStyleSheet,
  eventEmitter,
} from 'react-native-dark-mode';

const dynamicStyles = new DynamicStyleSheet({
  container: {
    backgroundColor: new DynamicValue('white', 'black'),
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: new DynamicValue('#424242', 'white'),
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 36,
  },
  textSub: {
    color: new DynamicValue('#424242', 'rgba(255,255,255, 0.75)'),
    textAlign: 'center',
    fontSize: 12,
  },
});

function Component() {
  const [status, setStatus] = useState('light');

  useEffect(() => {
    eventEmitter.on('currentModeChanged', newMode => {
      console.log(newMode);
      setStatus(newMode);
    });
  });

  const styles = useDynamicStyleSheet(dynamicStyles);

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={status === 'light' ? '#FFF' : '#000'}
        barStyle={status === 'light' ? 'dark-content' : 'light-content'}
      />
      <Text style={styles.text}>Halo!</Text>
      <Text style={styles.textSub}>Bagaimana kabarmu?</Text>
    </View>
  );
}

export default Component;
