import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-rotation-info' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n';

const RotationInfo = NativeModules.RotationInfo
  ? NativeModules.RotationInfo
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export enum Surface {
  ROTATION_0 = 0,
  ROTATION_90 = 1,
  ROTATION_180 = 2,
  ROTATION_270 = 3
}

export function getRotation(): Promise<number> {
  return RotationInfo.getRotation();
}
