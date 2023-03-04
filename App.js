import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import { BarCodeScanner } from 'expo-barcode-scanner';
import CameraPermissions from './CameraPermissions.js';
import Scanner from './Scanner.js';

export default function App() {
  const [hasPermission, setHasPermission] = useState(false)



  async function askForCameraPermission() {
    const { status } = await BarCodeScanner.requestPermissionsAsync()
    console.log(status)

    setHasPermission(status === 'granted')
  }
  useEffect(() => {
    askForCameraPermission()
  }, [])



  // Check permissions and return the screen

  return (
    <>
      {!hasPermission && <CameraPermissions askForCameraPermission={askForCameraPermission} />}
      {hasPermission && <Scanner />}

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
