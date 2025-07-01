import React, { useRef } from "react";
import { View, Text, StyleSheet } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import Animated, {
  useAnimatedStyle,
  interpolate,
} from "react-native-reanimated";

const App = () => {
  // BottomSheet のリファレンス
  const bottomSheetRef = useRef < BottomSheet > null;

  // アイコンをアニメーションさせるスタイル
  const animatedIconStyle = useAnimatedStyle(() => {
    // animatedPositionを取得
    const position = bottomSheetRef.current?.animatedPosition?.value || 0;

    // Y軸位置を動かす (例: 0〜100の範囲)
    const translateY = interpolate(position, [0, 1], [0, -100]);

    return {
      transform: [{ translateY }],
    };
  });

  return (
    <View style={styles.container}>
      {/* アニメーションアイコン */}
      <Animated.View style={[styles.icon, animatedIconStyle]}>
        <Text style={styles.iconText}>🔵</Text>
      </Animated.View>

      {/* BottomSheet */}
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={[200, 400]} // スナップ位置
        backgroundStyle={styles.sheetBackground}
      >
        <View style={styles.sheetContent}>
          <Text>Bottom Sheet Content</Text>
        </View>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  icon: {
    position: "absolute",
    top: 100,
    left: "50%",
    marginLeft: -25,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#61dafb",
    borderRadius: 25,
  },
  iconText: {
    fontSize: 20,
  },
  sheetBackground: {
    backgroundColor: "white",
    borderRadius: 20,
  },
  sheetContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
