import React from "react";
import { View, StyleSheet } from "react-native";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";

const App = () => {
  const bottomSheetRef = React.useRef(null);

  // BottomSheetの現在位置を共有値として保持
  const animatedPosition = useSharedValue(0);

  // アニメーションスタイルを定義
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: withSpring(animatedPosition.value), // BottomSheetの位置に基づいて変化
      },
    ],
  }));

  const handleSheetChanges = (index) => {
    // スナップポイントに基づいてアニメーションを更新
    animatedPosition.value = index === 0 ? 0 : -100; // カスタマイズ可能
  };

  return (
    <View style={styles.container}>
      {/* アニメーションする図形 */}
      <View style={[styles.box, animatedStyle]} />

      {/* BottomSheet */}
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={["25%", "50%", "100%"]}
        onChange={handleSheetChanges} // スナップポイントの変化を検知
      >
        <BottomSheetScrollView>
          <View>
            <Text>Content goes here</Text>
          </View>
        </BottomSheetScrollView>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: "blue",
    position: "absolute",
    top: 50,
  },
});

export default App;
