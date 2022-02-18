package com.reactnativerotationinfo;



import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.module.annotations.ReactModule;

@ReactModule(name = RotationInfoModule.NAME)
public class RotationInfoModule extends ReactContextBaseJavaModule {
    public static final String NAME = "RotationInfo";

    public RotationInfoModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    @NonNull
    public String getName() {
        return NAME;
    }


    @ReactMethod
    public void getRotation(Promise promise) {
        try {
            int rotation = getCurrentActivity().getWindowManager().getDefaultDisplay().getRotation();
            promise.resolve(rotation);
        } catch(Exception e) {
            promise.reject("Error", e);
        }
    }

}
