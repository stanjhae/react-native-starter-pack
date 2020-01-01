import React, { FC, useEffect } from 'react';
import { StyleSheet, Animated, View } from 'react-native';
import Lottie from 'lottie-react-native';
import constants from 'constants/constants';
import { BlurView } from '@react-native-community/blur';
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
        <BlurView
          blurAmount={200}
          style={ActionOverlayStyles.blurView}
          blurType="regular">
          <Lottie
            autoPlay
            style={{ height: 50 }}
            source={require('../../../assets/loading.json')}
          />
        </BlurView>
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
  blurView: {
    borderRadius: 15,
    height: 150,
    width: 150,
    ...(constants.center as object),
  },
});

export default ActionOverlay;
