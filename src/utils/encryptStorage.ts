import EncryptedStorage from 'react-native-encrypted-storage';

const setEncryptStorage = async <T>(key: string, data: T) => {
  await EncryptedStorage.setItem(key, JSON.stringify(data));
};

const getEncryptStorage = async (key: string) => {
  const data = await EncryptedStorage.getItem(key);

  return data ? JSON.parse(data) : null;
};

const removeEncryptStorage = async (key: string) => {
  const data = await getEncryptStorage(key);
  if (data) {
    await removeEncryptStorage(key);
  }
};

export {setEncryptStorage, getEncryptStorage, removeEncryptStorage};
