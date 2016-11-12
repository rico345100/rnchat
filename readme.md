# React Native ChatApp with WebSocket

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