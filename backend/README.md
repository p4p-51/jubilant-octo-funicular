# Funicular Backend
Project 51 - Mercury Lin & Daniel Li

### How to Run
#### ENV variables
copy `.end.example` to`.env` with the following 
```
MONGODB_URI=<MONGODB_URI>
ENV=<DEV|PROD> (Optional, DEV default)
PORT=Port Number (Optional, 9002 Default)
```

#### Firebase Admin
For Firebase Auth Admin APIs, navigate to 
1. Firebase console 
2. Project Settings
3. Service Accounts
4. Firebase Admin SDK
5. Generate new private key

Store this JSON as `firebase.json`
> **NOTE:** A separate firebase project is recommend for dev and prod

Afterwards run `yarn install` and then `yarn run dev`

### API Docs
When the server is running go to `localhost:9002/api-docs` for API documentation

> **NOTE:** To test the APIs, an authorization token is required from the frontend
