// @flow
import AsyncStorage from '@react-native-community/async-storage';

export default class ItemStore {
  key: string;
  defaultValue: ?any;

  constructor(key: string, defaultValue: ?any) {
    this.key = key;
    this.defaultValue = defaultValue;
  }

  load = async (): Promise<Object> => {
    try {
      let json = await AsyncStorage.getItem(this.key);
      if (!json) {
        return this.defaultValue;
      }
      return JSON.parse(json);
    } catch {}
    return this.defaultValue;
  };

  set = async (stats: Object) => {
    await AsyncStorage.setItem(this.key, JSON.stringify(stats));
  };
}
