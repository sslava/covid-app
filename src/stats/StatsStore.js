// @flow
import AsyncStorage from '@react-native-community/async-storage';

export default class StatsStore {
  static statsKey: string = 'stats';

  static defaultStats: Object = {};

  load = async (): Promise<Object> => {
    try {
      let json = await AsyncStorage.getItem(StatsStore.statsKey);
      if (!json) {
        return StatsStore.defaultStats;
      }
      return JSON.parse(json);
    } catch {}
    return StatsStore.defaultStats;
  };

  set = async (stats: Object) => {
    await AsyncStorage.setItem(StatsStore.statsKey, JSON.stringify(stats));
  };
}
