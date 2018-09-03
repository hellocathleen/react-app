# Point Break - a Vancouver Island surfer's guide to great surfing
Point Break is all about getting you the info you need in order to enjoy the best of Vancouver Island surfing. Point Break offers user registration, where a user may select up to 10 of their favorite Vancouver Island beaches. Users will then receive notifications via email or text, depending on their preference, telling them when the weather conditions are just right for a great day of surfing. 

Point Break also offers simplified surf forecasts on their home page so you can have a quick look at what the swell and wind will be like up to six days in advance. We've included a star-rating system so that you can interpret the forecast more easily if you're new to reading these types of forecasts. 

Point Break presents a simple, clean user interface for quick and easy use.

## Getting Started

1. Create the `.env` by using `.env.example` as a reference: `cp .env.example .env`
2. Update the .env file with your correct local information
3. Install dependencies: `npm i`
4. Run the server: `npm start`
5. Run the back-end: [Point Break server](https://github.com/hellocathleen/VI-Surf-Buddy) 
6. Visit `http://localhost:3000`

## Demo

![Home](https://github.com/hellocathleen/react-app/blob/cathleen/public/screenshots/Home.png?raw=true)
* Register, log in, or view this week's forecasts.

![Forecast](https://github.com/hellocathleen/react-app/blob/cathleen/public/screenshots/Forecasts.png?raw=true)
* Check the swell and wind conditions up to six days in advance for Vancouver Island beaches

![Register](https://github.com/hellocathleen/react-app/blob/cathleen/public/screenshots/Register.png?raw=true)
* Register so you can receive notifications for your favorite Vancouver Island beaches

![Profile](https://github.com/hellocathleen/react-app/blob/cathleen/public/screenshots/User%20Profile.png?raw=true)
* Manage your favorite beaches and notification settings in your user profile page

### Dependencies

* React
* React Google Maps
* Axios
* Webpack
* [babel-loader](https://github.com/babel/babel-loader)
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server)