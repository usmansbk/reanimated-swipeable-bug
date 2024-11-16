import { useState } from "react";
import {
  Button,
  Modal,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
  Text,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import ReanimatedSwipeable from "react-native-gesture-handler/ReanimatedSwipeable";

export default function App() {
  const [visible, setVisible] = useState(false);
  const [hasSwipeable, setHasSwipeable] = useState(false);

  const onDismiss = () => {
    setVisible(false);
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaView style={styles.container}>
        <StatusBar />
        <Text
          style={{
            paddingVertical: 16,
          }}
        >
          {hasSwipeable
            ? "Rendered <Swipeable />"
            : "No <Swipeable /> element rendered"}
        </Text>
        <Button
          title="Toggle Swipeable Component"
          onPress={() => {
            setHasSwipeable(!hasSwipeable);
          }}
          color={hasSwipeable ? "red" : "green"}
        />
        <View
          style={{
            paddingVertical: 16,
          }}
        />
        <Button
          title="Open Modal"
          onPress={() => {
            setVisible(true);
          }}
        />
        {hasSwipeable && <ReanimatedSwipeable />}
        <Modal
          visible={visible}
          onDismiss={onDismiss}
          onRequestClose={onDismiss}
          style={styles.modal}
          transparent
          statusBarTranslucent
          animationType="slide"
        >
          <View
            style={{
              flex: 1,
              padding: 16,
              backgroundColor: "pink",
            }}
          >
            <Button title="Close Modal" onPress={onDismiss} />
          </View>
        </Modal>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  modal: {
    flex: 1,
  },
});
