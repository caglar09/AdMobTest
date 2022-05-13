import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";

import firebase from "@react-native-firebase/app";

import admob, {
  MaxAdContentRating,
  InterstitialAd,
  RewardedAd,
  BannerAd,
  TestIds,
  BannerAdSize,
} from "@react-native-firebase/admob";

if (firebase.apps.length === 0) {
  firebase
    .initializeApp({
      appId: Platform.select({
        android: "<APP-ID>",
        ios: "<APP-ID>",
      }),
      projectId: "<PROJECT-ID>>",
      apiKey: Platform.select({
        android: "<APP-ID>",
        ios: "<APP-ID>",
      }),
    })
    .finally(() => {
      admob()
        .setRequestConfiguration({
          // Update all future requests suitable for parental guidance
          maxAdContentRating: MaxAdContentRating.PG,

          // Indicates that you want your content treated as child-directed for purposes of COPPA.
          tagForChildDirectedTreatment: true,

          // Indicates that you want the ad request to be handled in a
          // manner suitable for users under the age of consent.
          tagForUnderAgeOfConsent: true,
        })
        .then(() => {
          // Request config successfully set!

          InterstitialAd.createForAdRequest(TestIds.INTERSTITIAL);

          RewardedAd.createForAdRequest(TestIds.REWARDED);
        });
    });
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <BannerAd
        unitId={TestIds.BANNER}
        size={BannerAdSize.FULL_BANNER}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
