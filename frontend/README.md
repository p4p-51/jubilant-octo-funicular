# Welcome to Funicular's Frontend!

Currently, Funicular is deployed on [funicular.merc.dev](funicular.merc.dev). Go and have a play :)

If you want to host this on your own  machine, keep reading...


# Project setup

## Prerequisites


### Yarn

You'll also need to have yarn installed, as this project uses yarn as its package manager. Simply 

```npm i yarn```

(Assuming you have npm/Node, which you hopefully do)

### Firebase 

Since this project uses Firebase, a set of API keys are needed to run this. We have not included our own API keys, so you'll need to [get your own](https://firebase.google.com/docs/auth). 

Once you have these, please create place them inside an `.env` file using these names:

```
VUE_APP_FB_API_KEY
VUE_APP_FB_AUTH_DOMAIN
VUE_APP_FB_PROJECT_ID
VUE_APP_FB_STORAGE_BUCKET
VUE_APP_FB_MESSAGING_SENDER_ID
VUE_APP_FB_APP_ID
VUE_APP_FB_MEASUREMENT_ID
```



## Get started

Once you have pulled the repo down and set your Firebase keys, you can now get it up and running!

Remember to run `yarn` first to install all project dependencies. 

Then, simply `yarn start` and you'll be under way!

Do note that a locally hosted frontend of the application connects to a locally hosted backend. So remember to [run the backend](https://github.com/p4p-51/jubilant-octo-funicular/blob/main/backend/README.md) as well in order for this to work properly. 

## How to set up the backend?

Please find the [backend Readme here](https://github.com/p4p-51/jubilant-octo-funicular/blob/main/backend/README.md).