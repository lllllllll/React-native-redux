import { API } from 'react-native-dotenv';

export async function get() {
  const data = await fetch(API, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  });

  return data.json();
}
