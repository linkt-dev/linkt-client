import PushNotification from "@/push-notification";
import WebView from "react-native-webview";

export default function HomeScreen() {
  return (
    <>
      <PushNotification />
      <WebView source={{ uri: "https://linkt-webview.vercel.app/" }} />;
    </>
  );
}
