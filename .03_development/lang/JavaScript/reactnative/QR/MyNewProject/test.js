import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  StyleSheet,
  Button,
  Switch,
  FlatList,
  SectionList,
  ActivityIndicator,
  Alert,
  Animated,
  Dimensions,
  KeyboardAvoidingView,
  Linking,
  Modal,
  PixelRatio,
  RefreshControl,
  StatusBar,
} from 'react-native';
/////////////////
// Switch
/////////////////
// React Nativeの**Switch**コンポーネントは、オン/オフの切り替えを実現するUI要素です。
// Webのトグルスイッチに似たもので、状態を「オン」または「オフ」に設定するために使われます。

// 基本的な特徴
// 2つの状態を持つ: true（オン）または false（オフ）。
// 状態に応じて見た目が変わる。
// ユーザーがタップやスワイプで切り替え可能。
// 軽量でシンプルなデザイン。
// 基本的な使い方
// 以下はシンプルなスイッチの例です：

// tsx
// コードをコピーする
// import React, { useState } from 'react';
// import { View, Text, Switch, StyleSheet } from 'react-native';

// const App = () => {
//   const [isEnabled, setIsEnabled] = useState(false);

//   const toggleSwitch = () => setIsEnabled(previousState => !previousState);

//   return (
//     <View style={styles.container}>
//       <Text>Switch is {isEnabled ? 'ON' : 'OFF'}</Text>
//       <Switch
//         trackColor={{ false: '#767577', true: '#81b0ff' }} // トラックの色
//         thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'} // スイッチの丸い部分
//         ios_backgroundColor="#3e3e3e" // iOS専用: トラックの背景色
//         onValueChange={toggleSwitch} // 値が変わったときのコールバック
//         value={isEnabled} // 現在の状態
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// export default App;
// プロパティ
// 主要なProps
// Prop	型	説明
// value	boolean	スイッチの現在の状態 (true=ON, false=OFF)
// onValueChange	function	状態が変わったときに呼び出されるコールバック関数
// trackColor	{ false, true }	トラック（スイッチの背景部分）の色を指定
// thumbColor	string	スイッチの丸い部分の色を指定
// ios_backgroundColor	string	iOS専用：トラックの背景色を指定（状態に関係なく適用される）
// disabled	boolean	スイッチを無効化する（タッチ不可）
// style	object	スイッチのスタイルを指定（通常は不要）
// トラックとスイッチの色設定例
// trackColor はオフ（false）とオン（true）の状態ごとに背景色を変更します。
// thumbColor はスイッチ本体の色を設定します。
// tsx
// コードをコピーする
// <Switch
//   trackColor={{ false: 'gray', true: 'blue' }}
//   thumbColor={isEnabled ? 'white' : 'black'}
//   onValueChange={toggleSwitch}
//   value={isEnabled}
// />
// 注意点
// スタイリングの制限
// スイッチのデザインはプラットフォームに依存します。カスタマイズの幅が限られており、完全に自由なデザインを作るのは難しいです。カスタムスイッチを作りたい場合は、TouchableOpacityなどを利用して独自のコンポーネントを作成することを検討してください。

// iOSとAndroidの違い

// iOSではトラックのデフォルト背景色が薄いグレー。
// Androidではトラックの色が濃い灰色になります。
// Switchの活用例
// 例えば、ダークモードの切り替えや通知のオン/オフといった単純なトグル操作に最適です。

// tsx
// コードをコピーする
// const App = () => {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   return (
//     <View style={{ flex: 1, backgroundColor: isDarkMode ? 'black' : 'white' }}>
//       <Switch
//         value={isDarkMode}
//         onValueChange={setIsDarkMode}
//         thumbColor={isDarkMode ? 'yellow' : 'gray'}
//         trackColor={{ true: 'green', false: 'red' }}
//       />
//       <Text style={{ color: isDarkMode ? 'white' : 'black' }}>
//         Dark Mode is {isDarkMode ? 'Enabled' : 'Disabled'}
//       </Text>
//     </View>
//   );
// };
// React NativeのSwitchは単純で使いやすいトグル要素であり、軽量な操作を提供しますが、カスタマイズ性が限られているため、複雑なデザインが必要な場合は代替案を検討するのが良いでしょう。
