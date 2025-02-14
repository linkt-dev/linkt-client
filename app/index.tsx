import usePushNotification from "@/hooks/usePushNotification";
import { navType, useWebViewContainer } from "@/hooks/useWebViewContainer";
import { SafeAreaView, StatusBar, Platform, Alert } from "react-native";
import WebView from "react-native-webview";

export default function HomeScreen() {
  // const expoPushToken = usePushNotification();
  const { webViewRef, setNavState } = useWebViewContainer();

  const runFirst = `
    if(!localStorage.getItem('linkt-user')){
        sessionStorage.setItem();
    }
    true;
  `;

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: "white",
      }}
    >
      <WebView
        ref={webViewRef}
        source={{ uri: "https://linkt.one" }}
        injectedJavaScript={runFirst}
        onNavigationStateChange={(nav: navType) => {
          setNavState({ url: nav.url, canGoBack: nav.canGoBack });
        }}
      />
    </SafeAreaView>
  );
}
