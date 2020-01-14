package com.uptown;

import android.app.Application;
import android.content.Context;
import com.facebook.react.PackageList;
import com.facebook.react.ReactApplication;
import io.invertase.firebase.dynamiclinks.ReactNativeFirebaseDynamicLinksPackage;
import io.invertase.firebase.perf.ReactNativeFirebasePerfPackage;
import com.mkuczera.RNReactNativeHapticFeedbackPackage;
import com.BV.LinearGradient.LinearGradientPackage;
import com.reactnative.ivpusic.imagepicker.PickerPackage;
import com.codemotionapps.reactnativedarkmode.DarkModePackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.soloader.SoLoader;
import java.lang.reflect.InvocationTargetException;

import com.reactnativenavigation.NavigationApplication;
import com.reactnativenavigation.react.NavigationReactNativeHost;
import com.reactnativenavigation.react.ReactGateway;
import com.th3rdwave.safeareacontext.SafeAreaContextPackage;

import io.invertase.firebase.app.ReactNativeFirebaseAppPackage;
import io.invertase.firebase.auth.ReactNativeFirebaseAuthPackage;
import io.invertase.firebase.firestore.ReactNativeFirebaseFirestorePackage;
import io.invertase.firebase.storage.ReactNativeFirebaseStoragePackage;
import io.invertase.firebase.crashlytics.ReactNativeFirebaseCrashlyticsPackage;
import io.invertase.firebase.analytics.ReactNativeFirebaseAnalyticsPackage;

import com.facebook.reactnative.androidsdk.FBSDKPackage;
import org.devio.rn.splashscreen.SplashScreenReactPackage;

import java.util.List;
import java.util.Arrays;

public class MainApplication extends NavigationApplication {

            @Override
    protected ReactGateway createReactGateway() {
                ReactNativeHost host = new NavigationReactNativeHost(this, isDebug(), createAdditionalReactPackages()) {
            @Override
            protected String getJSMainModuleName() {
                                return "index";
                            }
       };
                return new ReactGateway(this, isDebug(), host);
            }

            @Override
    public boolean isDebug() {
               return BuildConfig.DEBUG;
            }

           protected List<ReactPackage> getPackages() {
                // Add additional packages you require here
                // No need to add RnnPackage and MainReactPackage
                return Arrays.<ReactPackage>asList(
                        new LinearGradientPackage(),
                        new DarkModePackage(),
                        new SafeAreaContextPackage(),
                        new ReactNativeFirebaseAppPackage(),
                        new ReactNativeFirebaseAuthPackage(),
                        new ReactNativeFirebaseFirestorePackage(),
                        new ReactNativeFirebaseStoragePackage(),
                        new ReactNativeFirebaseCrashlyticsPackage(),
                        new ReactNativeFirebaseAnalyticsPackage(),
                        new ReactNativeFirebaseDynamicLinksPackage(),
                        new FBSDKPackage(),
                        new PickerPackage(),
                        new ReactNativeFirebasePerfPackage(),
                        new SplashScreenReactPackage()
                );
            }

            @Override
            public List<ReactPackage> createAdditionalReactPackages() {
               return getPackages();
            }
}
