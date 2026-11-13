import React, { useEffect, useReducer, useRef } from 'react';
import { ActivityIndicator, Image, Platform, StatusBar, StyleSheet, Text, View } from 'react-native';
import PrototypeView from './PrototypeView';

type LoadState = { loading: boolean; failed: boolean };
type LoadAction = { type: 'LOADED' } | { type: 'FAILED' };
const initialLoadState: LoadState = { loading: true, failed: false };
function loadReducer(state: LoadState, action: LoadAction): LoadState {
  if (action.type === 'LOADED') return { loading: false, failed: false };
  return { loading: false, failed: true };
}

export default function App() {
  const [loadState, dispatch] = useReducer(loadReducer, initialLoadState);
  const shown = useRef(false);
  useEffect(() => {
    const fallback = setTimeout(() => dispatch({ type: 'LOADED' }), 12000);
    return () => clearTimeout(fallback);
  }, []);

  return <View style={styles.root}>
    <StatusBar hidden />
    <PrototypeView onLoaded={() => { if (shown.current) return; shown.current = true; setTimeout(() => dispatch({ type: 'LOADED' }), 1700); }} onError={() => dispatch({ type: 'FAILED' })} />
    {loadState.loading && <View pointerEvents="none" style={styles.loading}>
      <Image source={require('./assets/icon.png')} style={styles.logo} resizeMode="contain" />
      <Text style={styles.brand}>WINEWISE</Text>
      <Text style={styles.tagline}>SMART SOMMELIER & TASTE CELLAR</Text>
      <ActivityIndicator color="#dfbe7d" size="small" style={{ marginTop: 28 }} />
      <Text style={styles.loadingText}>Preparing your cellar…</Text>
    </View>}
    {loadState.failed && !loadState.loading && <View style={styles.error}>
      <Image source={require('./assets/icon.png')} style={styles.logo} resizeMode="contain" />
      <Text style={styles.brand}>WineWise could not load</Text>
      <Text style={styles.loadingText}>Check the app setup and reload Expo.</Text>
    </View>}
  </View>;
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#080305' },
  loading: { ...StyleSheet.absoluteFillObject, alignItems: 'center', justifyContent: 'center', backgroundColor: '#080305' },
  error: { ...StyleSheet.absoluteFillObject, alignItems: 'center', justifyContent: 'center', backgroundColor: '#080305', padding: 28 },
  logo: { width: 92, height: 92, marginBottom: 16 },
  brand: { color: '#f7e7c4', fontFamily: Platform.select({ ios: 'Georgia', android: 'serif', default: 'Georgia' }), fontSize: 23, letterSpacing: 4 },
  tagline: { color: '#b89d97', fontSize: 9, letterSpacing: 2, marginTop: 8 },
  loadingText: { color: '#b89d97', fontSize: 12, marginTop: 12 },
});
