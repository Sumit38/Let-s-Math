# This is a configuration file for ProGuard.
# http://proguard.sourceforge.net/index.html#manual/usage.html

-dontusemixedcaseclassnames
-verbose

-keepattributes SourceFile,SourceLineNumber
-keepattributes *Annotation*

-keep public class * extends android.app.Activity
-keep public class * extends android.app.Service
-keep public class * extends android.content.BroadcastReceiver
-keep public class * extends android.content.ContentProvider

-keep public class * extends android.view.View {
    public <init>(android.content.Context);
    public <init>(android.content.Context, android.util.AttributeSet);
    public <init>(android.content.Context, android.util.AttributeSet, int);
    public void set*(...);
}

-keepclasseswithmembernames class * {
    native <methods>;
}

-keepclasseswithmembers class * {
    public <init>(android.content.Context, android.util.AttributeSet);
}

-keep class * extends android.app.Fragment {
    public <init>();
}

-keep class * extends androidx.fragment.app.Fragment {
    public <init>();
}

-keepclassmembers class android.content.res.TypedArray {
    public float getDimension(int, float);
}

-keep class android.webkit.** { *; }
-keep public class android.net.http.**
-keep public interface android.net.http.**

-dontwarn android.webkit.**
