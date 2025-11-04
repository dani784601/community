import * as SecureStore from "expo-secure-store";

async function saveSecureStore(key: string, value: string) {
  await SecureStore.setItemAsync(key, value);
}

async function getSecureStore(key: string) {
  const value = await SecureStore.getItemAsync(key);
  return value;
}

async function removeSecureStore(key: string) {
  await SecureStore.deleteItemAsync(key);
}

export { getSecureStore, removeSecureStore, saveSecureStore };
