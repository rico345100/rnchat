# React Native ChatApp with WebSocket

## Link react-native-prompt-android
Run this command before runs(only once).
> $ react-native link react-native-prompt-android

## Run dev
> $ react-native run-android

## Build
> $ cd android && ./gradlew assembleRelease

## Important
Before runs the app, set WebSocket URL to proper domain.

```javascript
	export function init() {
		socket = new WebSocket('ws://some-correct-domain.com');
		...
	}
```

used React-Native v.0.37