# react-native-rotation-info

Get device rotation info

## Installation

```sh
npm install react-native-rotation-info
```

## Usage

```js
import { getRotation, Surface } from "react-native-rotation-info";

// ...

const rotation = await getRotation();
if (rotation == Surface.ROTATION_0) {
  console.log(0);
} else if (rotation == Surface.ROTATION_90) {
  console.log(90);
} else if (rotation == Surface.ROTATION_180) {
  console.log(180);
} else if (rotation == Surface.ROTATION_270) {
  console.log(270);
}
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
