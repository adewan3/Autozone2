### Title 
AutoZone Project

### Description
Developing a react native app for displaying the Year, Make, Model, Engine Screen
Each screen is dependent of the previous screen

### Prerequisites

Please go through the package.json file to check all the dependencies
you can run the follwoing command to run the App in Expo

    expo start
    
    "start": "expo start",
    "android": "expo start --android",
    "ios": "expo start --ios",
    "web": "expo start --web"

### Installation

 "dependencies": {
    "@react-navigation/material-top-tabs": "^6.6.5",
    "@react-navigation/native": "^6.1.9",
    "@react-navigation/stack": "^6.3.20",
    "expo": "~49.0.15",
    "expo-status-bar": "~1.6.0",
    "install": "^0.13.0",
    "npm": "^10.2.4",
    "react": "18.2.0",
    "react-native": "0.72.6",
    "react-native-safe-area-context": "^4.7.4"
  },
  "devDependencies": {
    "@babel/core": "^7.20.0",
    "@types/react": "~18.2.14",
    "@types/react-native": "^0.72.6",
    "typescript": "^5.1.3"
  },



### Flow of the Application
1. The Home Screen Consist of a button which will open the Model. As shown below

![Alt text](<Screenshot 2023-11-19 at 5.55.41 PM.png>)

2. The Year Screen consists of years from 2024 to 1995. Each row is Clickable and on clicking it will open the Make Screen

![Alt text](<Screenshot 2023-11-19 at 5.57.34 PM.png>)

3. The Make Screen will fetch "the year information" as props from Year Screen and use this year to call the API --> 
https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForManufacturerAndYear/mer?year={year}&format=json

![Alt text](<Screenshot 2023-11-19 at 6.00.30 PM.png>)

4. The Model screen also works in the same fashion and is called only when Make is selected. The Model Screen will fetch Models from the Make Selected using this API-->
https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMake/ACE?format=json

![Alt text](<Screenshot 2023-11-19 at 6.03.23 PM.png>)

5. The final Screen that is the Engine Screen shows all the selected data fetched  from the selected: YEAR--> MAKE-->MODE and then it is displayed here

![Alt text](<Screenshot 2023-11-19 at 6.03.23 PM-1.png>)

### Folder Structure
SRC
    --> components
        -->CustomNavigationBar.tsx (Is the main Navigation Bar used among all the Screens)
    --> navigation
        --> MainNavigation.tsx (Has two stacks a model stack navigation and Main navigation)
    
    --> screens
        --> ChooseYearScreen.tsx (Year)
        --> ChooseMakeScreen.tsx (Make)
        --> ChooseModelScreen.tsx (Models)
        --> ChooseEngine.tsx (final Screen)
    
    --> types
        --> navigationTypes.ts ()
     


### Author

Aayush Dewan: aayush@jobhuntmails.com


# Autozone2
