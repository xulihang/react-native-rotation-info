import * as React from 'react';

import { StyleSheet, View, Text, Button } from 'react-native';
import { getRotation, Surface } from 'react-native-rotation-info';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();

  React.useEffect(() => {
    updateRotation();
  }, []);
  const updateRotation = async () => {
    let rotation = await getRotation();
    if (rotation == Surface.ROTATION_0) {
      setResult(0);
    } else if (rotation == Surface.ROTATION_90) {
      setResult(90);
    } else if (rotation == Surface.ROTATION_180) {
      setResult(180);
    } else if (rotation == Surface.ROTATION_270) {
      setResult(270);
    }
  }
  return (
    <View style={styles.container}>
      <Button onPress={updateRotation} title="Retrieve"/>
      <Text>Rotation Degree: {result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
