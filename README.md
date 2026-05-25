
## To run the app

### Prerequisites

- Node.js v16 or higher
- Java sdk 17 or higher
- Xcode (for iOS development)/Android Studio (for Android development)
- React Native setup here. [React Native Environment Setup](https://reactnative.dev/docs/environment-setup)

### Installation & Setup

1. **Clone the repository**
   ```sh
   git clone <repository-url>
   cd MediApp
   ```

2. **Install dependencies**
   ```sh
   yarn install
   # or
   npm install 
   ```

3. **Run the app (in a new terminal)**

   **For iOS:**
   - After npm install, install the iOS pods
   ```sh 
    cd iOS/pod install
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
    -- components/              # Reusable UI components
        ── Button.tsx           # Custom button component
        ── Label.tsx            # Text label component
        ── ErrorMessage.tsx     # Error message display component
        ── PrescriptionDetailsCard.tsx  # Prescription card display
        ── StepItem.tsx         # Status step indicator
    
    ── screens/                 # Screen components
        ── StartScreen.tsx      # Initial app screen
        ── SessionStatusScreen.tsx    # Session status tracking
        ── PrescriptionReviewScreen.tsx  # Review prescription details
        ── OrderConfirmationScreen.tsx   # Order confirmation

    ── navigation/              # Navigation configuration
        ── StackNavigator.tsx   # Stack navigator setup

    ── services/                # API/SDK services
        ── sessionStatusService.ts  # Mock session and prescription API
    
    -─ store/                   # Redux state management
        ── store.ts             # Redux store configuration
        ── slices/
            ── sessionStatusSlice.ts  # Session status reducer
            -- prescriptionReviewSlice.ts # prescription review reducer

    ── utils/                   # Utility functions & constants
        ── globalStyles.ts      # Global stylesheet
        ── strings.ts           # String constants & status mappings
        ── theme.ts             # Color, spacing, font constants
        -─ types.ts             # TypeScript type definitions
```

---