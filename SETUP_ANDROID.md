# Let's Math - React to Android APK Setup Guide

This guide walks you through converting the React app to an Android APK that can be imported into Android Studio.

## Prerequisites

Before starting, ensure you have:
- Node.js 16+ (download from https://nodejs.org/)
- Java Development Kit (JDK) 11+ (download from https://www.oracle.com/java/technologies/downloads/)
- Android SDK (installed via Android Studio)
- Android Studio (latest version)

## Step 1: Install Dependencies

```bash
npm install
```

## Step 2: Build the React App

Create an optimized production build:

```bash
npm run build
```

This creates a `/build` folder with all the compiled React code.

## Step 3: Add Capacitor (Android Bridge)

Add the Android platform to Capacitor:

```bash
npm run android:add
```

This command:
- Creates an `android/` folder with a complete Android Studio project
- Generates all necessary Gradle configurations
- Sets up the Android project to wrap your React web app

## Step 4: Sync the Build

Copy your React build to the Android app:

```bash
npm run sync
```

This copies the `/build` folder contents into the Android WebView assets.

## Step 5: Open in Android Studio

Open the Android project in Android Studio:

```bash
npm run android:open
```

Or manually:
1. Open Android Studio
2. Go to **File → Open**
3. Navigate to `<project-root>/android/` folder
4. Click **Open**
5. Wait for Gradle sync to complete

## Step 6: Build APK

In Android Studio, build the APK:

1. Go to **Build → Build Bundle(s) / APK(s) → Build APK(s)**
2. Wait for the build to complete
3. The APK is saved in `android/app/build/outputs/apk/`

### For App Bundle (for Play Store):

1. Go to **Build → Build Bundle(s) / APK(s) → Build Bundle(s)**
2. Select a signing key or create a new one
3. The bundle is saved in `android/app/build/outputs/bundle/`

## Step 7: Signing (for Release)

To sign your APK for Play Store:

1. In Android Studio, go to **Build → Generate Signed Bundle / APK**
2. Select APK or Bundle (for Play Store, use Bundle)
3. Click **Next**
4. Create or select a keystore file
5. Fill in the keystore details
6. Complete the signing wizard

## Workflow for Updates

Each time you update the React app:

```bash
npm run build     # Rebuild React app
npm run sync      # Copy to Android assets
# Then rebuild in Android Studio
```

Or use one command (requires building in Android Studio after):
```bash
npm run build && npm run sync
```

## Important Notes

- **Capacitor Version**: This project uses Capacitor 5.7.0 for maximum compatibility
- **Package ID**: The app ID is `com.letsmath.app` - change this in `capacitor.config.json` and `android/app/build.gradle` if needed
- **App Name**: Change in `capacitor.config.json` if needed
- **Local Storage**: Student progress is saved to the device using localStorage

## Troubleshooting

### Build fails with "gradle not found"
- Ensure Java is installed: `java -version`
- Ensure Android SDK is installed via Android Studio

### APK won't install
- Ensure your device is on Android 7.0 or higher
- Enable "Unknown Sources" in device settings

### Changes not appearing in app
- Always run `npm run sync` after rebuilding React
- Clear app cache in Android Studio: **Build → Clean Project**

## File Structure

```
.
├── public/              # Static files
├── src/                 # React source code
│   ├── components/      # Reusable components
│   ├── pages/           # Page components
│   ├── data.js          # All math content
│   └── App.jsx          # Main app component
├── android/             # Android Studio project (created by Capacitor)
├── build/               # Production React build (created by npm run build)
├── package.json         # Dependencies & scripts
├── capacitor.config.json # Capacitor configuration
└── SETUP_ANDROID.md     # This file
```

## Next Steps

1. Customize branding: Change app icon and splash screen
2. Update privacy policy and terms
3. Add analytics if desired
4. Test on multiple devices
5. Release to Play Store

For more help, visit:
- Capacitor Docs: https://capacitorjs.com/docs
- React Docs: https://react.dev
- Android Studio Docs: https://developer.android.com/studio
