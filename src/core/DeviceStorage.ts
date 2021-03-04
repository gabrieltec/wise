import AsyncStorage from "@react-native-community/async-storage";

class DeviceStorage {
  public static async saveData(key: string, data: Object) {
    try {
      await AsyncStorage.setItem(key, data);
    } catch (e) {
      console.error(`error when trying to save ${key} data`);
    }
  }

  public static async getData(key: string) {
    try {
      return await AsyncStorage.getItem(key);
    } catch (e) {
      console.error(`error when trying to get ${key} data`);
    }
  }

  public static async clearData() {
    try {
      await AsyncStorage.clear();
    } catch (e) {
      console.error("error when performing AsyncStorage clear action");
    }
  }
  
}

export default DeviceStorage;
