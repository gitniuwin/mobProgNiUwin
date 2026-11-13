import React from 'react';
import { StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import { WINEWISE_HTML } from './winewisePrototype';

type Props = { onLoaded: () => void; onError: () => void };

export default function PrototypeView({ onLoaded, onError }: Props) {
  return <WebView
    originWhitelist={['*']}
    source={{ html: WINEWISE_HTML, baseUrl: 'https://winewise.local/' }}
    javaScriptEnabled
    domStorageEnabled
    sharedCookiesEnabled
    allowFileAccess
    setSupportMultipleWindows={false}
    onLoadEnd={onLoaded}
    onError={onError}
    onHttpError={onError}
    style={styles.webview}
    containerStyle={styles.container}
  />;
}

const styles = StyleSheet.create({
  webview: { flex: 1, backgroundColor: '#080305' },
  container: { flex: 1, backgroundColor: '#080305' },
});
