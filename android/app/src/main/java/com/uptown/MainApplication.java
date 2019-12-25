package com.uptown;

import com.mkuczera.RNReactNativeHapticFeedbackPackage;
import com.BV.LinearGradient.LinearGradientPackage;
import com.codemotionapps.reactnativedarkmode.DarkModePackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;

import com.reactnativenavigation.NavigationApplication;
import com.reactnativenavigation.react.NavigationReactNativeHost;
import com.reactnativenavigation.react.ReactGateway;
import com.th3rdwave.safeareacontext.SafeAreaContextPackage;

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
                return Arrays.<ReactPackage>asList(
                        new LinearGradientPackage(),
                        new DarkModePackage(),
                        new SafeAreaContextPackage(),
                        new RNReactNativeHapticFeedbackPackage()
                );
            }

            @Override
            public List<ReactPackage> createAdditionalReactPackages() {
               return getPackages();
            }
}