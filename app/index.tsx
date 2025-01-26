import { SafeAreaView, StatusBar, Platform } from "react-native";
import WebView from "react-native-webview";

export default function HomeScreen() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: "white",
      }}
    >
      <WebView source={{ uri: "https://linkt.one" }} />
    </SafeAreaView>
  );
}
