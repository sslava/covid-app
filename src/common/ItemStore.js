// @flow
import AsyncStorage from '@react-native-community/async-storage';

export class ItemStore {
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

  set = async (data: Object) => {
    await AsyncStorage.setItem(this.key, JSON.stringify(data));
  };
}

export class MapItemStore {
  defaultValue: ?any;
  scope: string;

  constructor(scope: string, defaultValue: ?any) {
    this.scope = scope;
    this.defaultValue = defaultValue;
  }

  load = async (key: string): Promise<Object> => {
    const is = this.getStore_(key);
    return is.load();
  };

  set = async (key: string, data: Object) => {
    const is = this.getStore_(key);
    await is.set(data);
  };

  getStore_(key: string): ItemStore {
    return new ItemStore(`${this.scope}-${key}`, this.defaultValue);
  }
}
