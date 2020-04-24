import {useEffect, useState} from 'react';
import {AppState} from 'react-native';
import usePrevious from './usePrevious';

export function useAppState() {
  const [appState, setAppState] = useState(AppState.currentState);
  useEffect(() => {
    function onChange(newState) {
      setAppState(newState);
    }

    AppState.addEventListener('change', onChange);
    return () => {
      AppState.removeEventListener('change', onChange);
    };
  }, []);

  return appState;
}

export function useAppStateActive(onActive) {
  const current = useAppState();
  const prev = usePrevious(current);
  useEffect(() => {
    if (prev && prev.match(/inactive|background/) && current === 'active') {
      onActive();
    }
  }, [current, prev, onActive]);
}
