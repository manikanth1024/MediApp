
## To run the medi-app

### Prerequisites

- Node.js v16 or higher
- Java sdk 17 or higher
- Xcode (for iOS development)/Android Studio (for Android development)
- React Native setup here. [React Native Environment Setup](https://reactnative.dev/docs/environment-setup)

### Installation & Setup

1. **Clone the repository**
   ```sh
   git clone https://github.com/manikanth1024/MediApp.git
   ```

2. **Install dependencies**
   ```sh
    cd MediApp
   yarn install
   # or
   npm install 
   ```

3. **Run the app (in a new terminal)**

   **For iOS:**
   - After npm install, install the iOS pods
   ```sh 
    cd ios/pod install
    ```
   ```sh
   yarn ios
   # or
   npm run ios
   ```

   **For Android:**
   ```sh
   yarn android
   # or
   npm run android
   ```
    **Troubleshooting tip for Android:**
    - If any gradlew issues or build issues, simply run
    ```sh
    cd android/.gradlew clean ```

---

## Tech Stack

- **Framework Used**: React Native Cli
- **Language Used**: TypeScript
- **State Management Used**: Redux, Redux Toolkit
- **Navigation**: React Navigation (Native Stack)

---

## Folder Structure Overview

```
MediApp/src/
    -- components/              # UI components folder

        ── Button.tsx           # Custom button component
        ── Label.tsx            # Custom Text label component
        ── ErrorMessage.tsx     # Error message display component
        ── PrescriptionDetailsCard.tsx  # Prescription card display component
        ── StepItem.tsx         # Status step indicator component
    
    ── screens/                 # Screens folder 

        ── StartScreen.tsx      # Start prescription flow screen
        ── SessionStatusScreen.tsx    # Session status tracking screen
        ── PrescriptionReviewScreen.tsx  # Review prescription details  screen
        ── OrderConfirmationScreen.tsx   # Order confirmation screen

    ── navigation/              # Navigation folder

        ── StackNavigator.tsx   # navigation screens flow

    ── services/                # API services folder

        ── sessionStatusService.ts  # Mocked session and prescription Api data and its methods
        -- prescriptionReviewService.ts # Mocked prescription review Api data and its methods
    
    -─ store/                   # Redux store folder

        ── store.ts   # Redux store configuration file to store the sessionStatus and prescriptionReview data
    
        ── slices/.   # Actions and reducers folder

            ── sessionStatusSlice.ts  # Session status reducer
            -- prescriptionReviewSlice.ts # Prescription review reducer

    ── utils/                   # Utility functions & constants folder

        ── globalStyles.ts      # Global stylesheet file used across the app
        ── strings.ts           # App labels
        ── theme.ts             # Reusable colors, spacing, font sizees 
        -─ types.ts             # interface definations & declarations
```
---

## Mock API Flow Explanation

-- When the user clicks on Start prescription flow and SessionStatus screen mounts we're calling mocked operations here.

### Flow steps

**Start Prescription Flow** (`startPrescriptionSession`)
    -- At first we're calling the startPrescriptionFlow method with some time delay and it returns an object of {sessionId, staus}

**Check Session Status** (`checkSessionStatus`)
    -- Then we're calling the checkSessionStatus method from the state `created` -> ``authorizing` → `received` → `ready`
    -- This same method also handles error states to show the error message to the user if the mock api fails i.e., `error` | `session_expired` | `user_cancellation` | `network_failure`.

**Complete Prescription Session** (`completePrescriptionSession`)
    -- This method will be called after the checkSessionStatus is success and returns the `ready` state
    -- This method will return the mocked prescription review api data

## Assumptions Made

**Single Session Flow:**
    - App handles one prescription session per launch.
**User Authentication:** 
    - Assumes user is pre-authenticated before app launch.
**Mock Patient Data:** 
    - Prescription and patient data are assumed to exist in the pharmacy system.
**Network Connectivity:**
    - App assumes network is available (no offline mode).
**Pharmacy Availability:** 
    - Single pharmacy (ABC Pharmacy) is pre-configured in demo.

## Error States 

**error**
    -- Standard error state
    -- Will be triggered when exception is thrown duing the session
    -- User will see an error card with the message

**session_expired**
    -- Session expired state
    -- Triggering this manually by pressing a `Expire session` button during the checkSessionStatus transforming from `created` -> `ready`
    -- User will see a session_expired card with the message

**user_cancelled**
    -- User cancelled state
    -- Triggering this manually by pressing a `Cancel flow` button during the checkSessionStatus transforming from `created` -> `ready`
    -- User will see a user_cancelled card with the message

 **network_failed**
    -- network connection failed state
    -- Triggering this manually by pressing a `Fail network` button during the checkSessionStatus transforming from `created` -> `ready`
    -- User will see a network_failed card with the message

## Security Considerations

**Sensitive data:** prescriptionReference token , patientReference, sessionId are treated as sensitive and must be encrypted while storage

**Why tokens must not be logged:** Full tokens can replay prescription retrieval. Logging them violates HIPAA/GDPR and creates exploitable audit trails.

**Secure storage in production:** Use React native secure storage to store the tokens and other sensitive data but not in the Async storage because its not encrypted.

**Auth:** User must be authorized to start the startPrescriptionFlow and must send the jwt token to access other parts of the app after login.

**Replacing the mock SDK:** Use the methods imported from sdk/api in prescriptionReviewService.ts and sessionStatusService.ts to make it work in production.

**Preparation for internal testing:**

### iOS internal testing build
- After the ios profile is created for the specific app u want to create a build for,
- Add the user who wants to test the app under internal testers section appstore console
- To create a build for iOS, from the xcode filemenu select the `Product` tab and click Archive and select the approriate build type and click next to push the app to testflight
- The user who wants to test it must install the testflight app on their iOS device and they install the app from testflight.

### Android internal testing build
- After the keystore file is created for the specific app
- Add the user who wants to test the app under alpha/beta testing section
- To create the build for Android, simply navigate to ```cd android``` and enter the given command ```./gradlew build ``` to create a build 
- After the build is created an .aab file will be generated and that .aab file can be pushed direcly to playstore console alpha/beta section.

### Known Limitations

- No persistance is added for the stored in redux, state will be lost on app restart 
- setTimeout-based delays to check the each status returned from checkPrescriptionStatus method (not real polling), called it multiple times until it returned the ready state.
- Manual button clicks required for error testing, user must manually restart flow after errors.
- Only one pharamcy is supoorted in start prescription flow, user can't select the multiple pharmacies.
- Data is hardcoded in each and every api call happening across the app

### Change in production
- User can select the pharamcy from the list of pharamacies in the Start Prescription screen
- In Session Status screen, will implement the methods imported from sdk/api to change the status without using any time delays, so there won't be any mock data will be required.
- Implement camera integration to capture the uploaded prisciption receipt and uses ocr to extract the prescription content.
- Integrate the authentication flow like jwt/OAuth for the user to login into the app, stores jwt token into the secure storage.
- Required data  other than sensitive data will be stored permanantly in async storage.
- Handles error states and messages caught automatically and add the retry logics.
- Integrate the monitoring system to handle any crash reports and analytics to handle the user logs.
- Builds will be configured as per the environment for testing, pre-prod and production releases.


