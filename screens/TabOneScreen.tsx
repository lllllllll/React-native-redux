import * as React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Tab 1</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
      <ScrollView>
        <EditScreenInfo path="/screens/TabOneScreen.tsx" />
        <EditScreenInfo path="/screens/TabOneScreen.tsx" />
        <Text style={styles.title}>Tab 1</Text>
        <EditScreenInfo path="/screens/TabOneScreen.tsx" />
        <EditScreenInfo path="/screens/TabOneScreen.tsx" />
        <EditScreenInfo path="/screens/TabOneScreen.tsx" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
