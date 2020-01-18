import React, { FC, useEffect } from 'react';
import { StyleSheet, Animated, View, ActivityIndicator } from 'react-native';
import constants from 'constants/constants';
const scale = new Animated.Value(0);

const ActionOverlay: FC = () => {
  useEffect(() => {
    Animated.timing(scale, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  });
  return (
    <View style={ActionOverlayStyles.container}>
      <Animated.View style={{ transform: [{ scale }] }}>
        <View style={ActionOverlayStyles.centerBox}>
          <ActivityIndicator />
        </View>
      </Animated.View>
    </View>
  );
};

const ActionOverlayStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerBox: {
    backgroundColor: 'black',
    shadowColor: '#111',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.8,
    shadowRadius: 15,
    elevation: 5,
    borderRadius: 15,
    height: 150,
    width: 150,
    ...(constants.center as object),
  },
});

export default ActionOverlay;
