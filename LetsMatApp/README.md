# Let's Math - Android App

A complete, production-ready Android app for teaching mathematics with confidence.

## Features

✅ **16 Complete Chapters** with concepts, worked examples, and practice questions
✅ **Essential Tricks & Shortcuts** for quick memorisation
✅ **2027 Predicted Questions** based on exam pattern analysis
✅ **Progress Tracking** with confidence levels (Learning → Practicing → Confident)
✅ **Exam Pattern Guide** explaining paper structure and strategy
✅ **Beautiful UI** optimised for mobile
✅ **Offline Support** - works without internet
✅ **Local Data Storage** - student progress saved on device

## Quick Start

### Step 1: Open in Android Studio

1. Download and install **Android Studio** from https://developer.android.com/studio
2. Open Android Studio
3. Go to **File → Open**
4. Navigate to and select the **LetsMatApp** folder
5. Click **Open**
6. Wait for Gradle sync to complete (bottom right)

### Step 2: Build & Run

#### On Emulator:
1. Click **Run → Run 'app'** (or press Shift+F10)
2. Select an Android Virtual Device
3. Click **OK**
4. Wait for the app to build and run

#### On Physical Device:
1. Connect Android phone/tablet via USB
2. Enable Developer Mode on device (Settings → About → tap Build Number 7 times)
3. Click **Run → Run 'app'**
4. Select your connected device
5. Click **OK**

### Step 3: Build APK for Distribution

**Debug APK** (for testing):
- Go to **Build → Build Bundle(s) / APK(s) → Build APK(s)**
- APK location: `LetsMatApp/app/build/outputs/apk/debug/app-debug.apk`

**Release APK** (for Play Store):
- Go to **Build → Generate Signed Bundle / APK**
- Select **APK**
- Create/select a keystore file
- Fill in keystore details
- Complete signing wizard
- APK location: `LetsMatApp/app/build/outputs/apk/release/app-release.apk`

**App Bundle** (for Play Store):
- Go to **Build → Generate Signed Bundle / APK**
- Select **Android App Bundle**
- Follow the same signing process
- Bundle location: `LetsMatApp/app/build/outputs/bundle/release/app-release.aab`

## Project Structure

```
LetsMatApp/
├── app/
│   ├── src/
│   │   ├── main/
│   │   │   ├── assets/          ← React app built files
│   │   │   │   ├── index.html   ← Main HTML file
│   │   │   │   ├── css/
│   │   │   │   ├── js/
│   │   │   │   └── static/
│   │   │   ├── java/com/letsmath/app/
│   │   │   │   └── MainActivity.kt  ← Android entry point
│   │   │   └── res/             ← Android resources
│   │   │       ├── values/
│   │   │       ├── drawable/
│   │   │       ├── mipmap/
│   │   │       └── xml/
│   │   └── test/
│   ├── build.gradle             ← App build config
│   └── proguard-rules.pro        ← Code obfuscation rules
├── build.gradle                 ← Project build config
├── settings.gradle              ← Project settings
├── gradle.properties            ← Gradle configuration
└── README.md                    ← This file
```

## How It Works

1. **MainActivity.kt** loads the React web app from `assets/index.html`
2. WebView renders the React app as a native Android app
3. Student progress is stored in the device's browser localStorage
4. No server connection required - fully offline

## Customisation

### Change App Name
1. Open `app/src/main/res/values/strings.xml`
2. Change: `<string name="app_name">Your App Name</string>`
3. Rebuild

### Change App Icon
1. Right-click `app/src/main/res/` folder
2. Select **New → Image Asset**
3. Upload your icon
4. Configure as needed
5. Rebuild

### Change Package Name (Advanced)
1. Open `app/build.gradle`
2. Change: `applicationId "com.letsmath.app"` to your ID
3. Refactor MainActivity package name
4. Update AndroidManifest.xml
5. Rebuild

## Requirements

- **JDK**: Java 11 or higher
- **Android SDK**: API 21 minimum (Android 5.0)
- **Android Studio**: Latest version recommended
- **RAM**: 4GB minimum
- **Disk Space**: 2GB minimum

## Building from Command Line (Advanced)

```bash
# In the LetsMatApp directory

# Build APK
./gradlew assembleDebug

# Build Release APK
./gradlew assembleRelease

# Build App Bundle
./gradlew bundleRelease

# Run tests
./gradlew test

# Clean build
./gradlew clean
```

## Troubleshooting

### "Gradle sync failed"
- Right-click project → **Open Module Settings**
- Go to **Project** tab
- Set **Gradle JDK** to Java 11+
- Click **OK**

### "Cannot find Android SDK"
- Open **File → Project Structure**
- Go to **SDK Location**
- Install Android SDK if needed
- Confirm API 34 is installed

### APK won't install on device
- Device must be Android 5.0 (API 21) or higher
- Enable **Unknown Sources** in device settings
- Clear app cache if reinstalling

### App crashes on startup
- Clear app data: **Settings → Apps → Let's Math → Storage → Clear Data**
- Reinstall APK
- Check logcat for errors (View → Tool Windows → Logcat)

## Publishing to Play Store

1. **Create keystore**: Tools → Generate Signed Bundle / APK
2. **Build release bundle**: Build → Generate Signed Bundle / APK → Select Bundle
3. **Create Google Play Console account**: https://play.google.com/console
4. **Create app**: Add new app
5. **Upload bundle**: Apps → Your App → Release → Create new release → Upload AAB
6. **Fill content rating questionnaire**
7. **Set pricing**: Choose free or paid
8. **Review and publish**

## Privacy & Data

- ✅ No user tracking
- ✅ No analytics
- ✅ No server connection
- ✅ All data stored locally on device
- ✅ Student progress never leaves the device

## Support

### Issues Building?
- Ensure JDK is installed: `java -version`
- Ensure Android SDK is installed via Android Studio
- Try: **File → Invalidate Caches / Restart**
- Try: **Build → Clean Project**

### Technical Help
- Android Studio Help: Built-in (? menu)
- Gradle Docs: https://docs.gradle.org
- Android Docs: https://developer.android.com

## Version Information

- **App Version**: 1.0.0
- **Min SDK**: 21 (Android 5.0)
- **Target SDK**: 34 (Android 14)
- **Compile SDK**: 34
- **Kotlin**: 1.9.10

## License

Built to help students learn mathematics effectively.

---

**Happy building! Let's make math education better! 📱✨**
