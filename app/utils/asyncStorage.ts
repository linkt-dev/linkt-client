import AsyncStorage from '@react-native-async-storage/async-storage';

export const asyncStorage = {
  storeData : async (key:string, value:any) => {
    try {
      await AsyncStorage.setItem(key, typeof value === 'object' ? JSON.stringify(value) : value);
    } catch (e) {
    }
  },
   getData : async (key:string) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if(value === null){
        return null;
      }
      if(typeof value === 'object'){
        return JSON.parse(value);
      }
      return value;
    } catch (e) {
    }
  }
}