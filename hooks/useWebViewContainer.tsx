import { useEffect, useRef, useState } from "react";
import WebView from "react-native-webview";
import { Alert, BackHandler } from "react-native";

export interface navType {
  url: string;
  canGoBack: boolean;
}

export const useWebViewContainer = () => {
  const webViewRef = useRef<WebView>(null);
  const [navState, setNavState] = useState({
    url: "",
    canGoBack: false,
  });

  const close = () => {
    Alert.alert("종료하시겠어요?", "확인을 누르면 종료합니다.", [
      {
        text: "취소",
        onPress: () => {},
        style: "cancel",
      },
      { text: "확인", onPress: () => BackHandler.exitApp() },
    ]);
  };

  useEffect(() => {
    const handleBackButton = () => {
      if (navState.canGoBack) {
        if (navState.url === "your url") {
          close();
        } else {
          webViewRef.current?.goBack();
        }
      } else {
        close();
      }

      return true;
    };

    BackHandler.addEventListener("hardwareBackPress", handleBackButton);

    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handleBackButton);
    };
  }, [navState]);

  return { webViewRef, setNavState, close };
};
