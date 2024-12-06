import AsyncStorage from '@react-native-async-storage/async-storage';

type AsyncStorageDataType<T> = T extends object ? T : string;

export const asyncStorage = {
  storeData: async(key:string, value:any) => {
    try {
      await AsyncStorage.setItem(key, typeof value === 'object' ? JSON.stringify(value) : value);
    } catch (e) {
    }
  },
   getData : async <T>(key:string):Promise<AsyncStorageDataType<T> | null> => {
    try {
      const value = await AsyncStorage.getItem(key);
      if(typeof value === 'string'){
        const parsedValue = JSON.parse(value);
          return parsedValue;
      }  
      return null;
    } catch (e) {
      const value = await AsyncStorage.getItem(key);
      return value as AsyncStorageDataType<T>;
    }
  }
}