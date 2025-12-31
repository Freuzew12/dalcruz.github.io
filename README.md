Dino Runner — Playable on Android

Quick start

1. Serve the folder and open on your Android device (recommended):

```bash
# from the project folder
python3 -m http.server 8000
# then open http://<your-PC-IP>:8000 on Android Chrome
```

2. Or open the `index.html` file directly in the browser (some Android browsers restrict local files).

3. To install as a PWA-like shortcut in Chrome: open the page, open Chrome menu → "Add to Home screen".

Controls
- Tap the screen or click to jump.
- Press Space or Up arrow on desktop to jump.
- Tap when game over to restart.

Notes
- This is a simple canvas prototype meant to run in mobile browsers. For native Android packaging, use a WebView wrapper (Android Studio) or tools like Capacitor/Cordova.

Capacitor packaging (create Android APK)

1. Install Node.js and npm on your PC.

2. From the project folder, run:

```bash
# install Capacitor packages
npm install --save @capacitor/core @capacitor/cli

# initialize Capacitor (creates capacitor.config.json)
npx cap init dino-runner com.example.dinorunner --web-dir=www

# copy web files into www (or use the helper script)
./build_capacitor.sh
```

3. Android opening/building

- After `npx cap add android` completes, run `npx cap open android` to open the generated Android project in Android Studio. Build an APK or App Bundle from Android Studio.

Notes & requirements
- You must have Android Studio and required SDKs installed to build an APK.
- The helper script `build_capacitor.sh` automates copying files and adding the Android platform — run it locally after step 1.

