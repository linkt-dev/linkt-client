import { SafeAreaView } from "react-native";
import WebView from "react-native-webview";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "red" }}>
      <WebView source={{ uri: "https://linkt-webview.vercel.app/" }} />
    </SafeAreaView>
  );
}
