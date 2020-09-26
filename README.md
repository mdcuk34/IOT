
# Frontend challenge

## Setup

#### Server
- `cd server && yarn install`
- `yarn start`

#### Mobile App
- `cd iotApp && yarn install`
- `cd ios && pod install && cd ..`
- `yarn ios`

## Challenge 

You are working for a startup who are working with IOT devices. 
They want to build a mobile app (web or native) to monitor the water level of plants and action the water system remotely. You have been brought on as the first FE engineer and there is no FE yet in place. 
The startup want to validate the concept by doing some user testing and have asked for a POC to be built. 

A skeleton web app with a lightweight express/graphql server exists with queries/mutations that will serve the data you need in (/server). 


## Tasks

- [ ] Build a home screen / dashboard and show the currently logged in user.
- [x] Display a list of paired moisture sensors (for plants) and paired taps. You can get the list from the ```devices``` query. 
- [x] Build an overlay or similar to display the pair new device flow. Use the `addDevice` mutation.
- [x] Use the `plants` query to display a dropdown (or typeahead if you want to be a bit more fancy) of plants when adding a new device/sensor (a sensor belongs to a plant or more than one plant in a small area).

There's a `requestDevices` method in `/utils` as an example to get you started. The server is in the `/server` dir. You can scrap the whole app if you want but this server will serve the data you need. Feel free to change anything you want. 


## Stretch

1. Build a sign in screen and use the `user` query to mock a sign in by passing one of the user/password combinations and store an appropriate token to keep the user signed in. Localstorage is fine. 
2. Add some data to capture the ideal moisture level for a plant when you’re adding it. You could modify the mock response or create a new endpoint to lookup. Do whatever you think makes more sense and then we can discuss.


## Keep in mind

* This should be a react app with typescript. Feel free to use the CRA provided or any other boilerplate you prefer. If you're building a native app then you'll need to get a new boilerplate. 
* Use redux if you want to but you might decide that it’s not needed. Make a call and we can discuss your choice when you talk us through your work. 
* Aim to complete at least 2 of the tasks but complete as many more as you like. We don't want you to spend days on this task. See how much you can get done in a few hours and we can discuss what you might have done if you had more time. 
* Write any tests that are useful. We’re not after loads of coverage. 
* There are no designs to work to. We're more concerned with functionality at this stage. You will have to make some UI / layout choices.
* If you have questions feel free to ask them. 


Have fun. We look forward to seeing your work!
