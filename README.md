# COVID-19 Statistics Tracker

A React Native mobile application that provides real-time COVID-19 statistics and information globally. Track cases, recoveries, and deaths worldwide, explore regional data, learn about prevention measures, and access emergency resources.

## Features

- **Global Statistics:** Real-time COVID-19 statistics for the entire world
- **Country-specific Data:** Detailed statistics for individual countries with historical trends
- **Regional Data:** Breakdown of statistics for states/regions within countries
- **Data Visualization:** Interactive charts including bar charts, trend graphs, and pie charts
- **Information Center:** Educational content about symptoms, prevention measures, and recommendations
- **Localization:** Full support for English and Russian languages
- **Sharing:** Generate and share statistics via social media platforms
- **Offline Support:** Access previously loaded data without an internet connection

## Technologies Used

- React Native (0.63.3)
- Redux with Redux Thunk for state management
- React Navigation 5.x for navigation
- Styled Components for styling
- D3-scale & D3-shape for data visualization
- i18n-js & react-native-localize for internationalization
- React Native SVG for rendering graphics
- AsyncStorage for local data persistence

## Prerequisites

- Node.js (>= 12.x)
- npm or yarn
- React Native CLI
- Xcode (for iOS development)
- Android Studio (for Android development)
- CocoaPods (for iOS dependencies)

## Installation

```bash
# Clone the repository
git clone git@github.com:sslava/rucovid.git
cd rucovid

# Install dependencies
npm install
# or
yarn install

# Install iOS dependencies
cd ios
pod install
cd ..
```

## Running the App

### iOS

```bash
# Run on iOS simulator
npm run ios
# or
yarn ios
```

### Android

```bash
# Make sure you have an Android emulator running or a device connected
npm run android
# or
yarn android
```

### Start Metro Bundler separately

```bash
npm start
# or
yarn start
```

## Project Structure

```
src/
├── App.js                 # Entry point
├── app/                   # Redux store and modules
├── assets/                # Static assets (icons, images, localization)
├── common/                # Shared utilities and helpers
├── components/            # UI components
│   ├── Countries/         # Country listing screens
│   ├── CountryDetails/    # Country detail screens
│   ├── Info/              # Informational screens
│   ├── Stats/             # Statistics components
│   ├── common/            # Common UI components
│   └── shared/            # Shared components across features
```

## API

The application uses a custom COVID-19 API from covidum.com for fetching global and country-specific data:

- Global and country statistics: `https://api.covidum.com/request/get_stat`
- Historical data: `https://api.covidum.com/request/get_stat_history/{country_code}`
- Regional data: `https://api.covidum.com/request/get_stat_regions/{country_code}`

## Testing

```bash
# Run tests
npm test
# or
yarn test

# Run linting
npm run lint
# or
yarn lint
```

## Building for Production

### iOS

Build the app using Xcode by selecting the appropriate scheme and choosing "Archive" from the Product menu.

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments
- Medical information adapted from WHO guidelines