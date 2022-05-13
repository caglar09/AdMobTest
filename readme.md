This project is a simple **Google Admob** application. Developed with Expo.

**For installation:**
Add google-services.json and GoogleService-Info.plist files to the project home directory.

in App.js
```jsx
firebase
     .initializeApp({
       appId: Platform.select({
         android: "<APP-ID>",
         ios: "<APP-ID>",
       }),
       projectId: "<PROJECT-ID>",
       apiKey: Platform.select({
         android: "<API-KEY>",
         ios: "<API-KEY>",
       }),
     })
```
You can use \<APP-ID>, \<API-KEY> and \<PROJECT-ID> by changing the fields.