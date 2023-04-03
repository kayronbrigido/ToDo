# Todo Application

## Requeriments:

- NodeJs  
- React Native  
- Android or IOS Emulator/Device   
- Postgres or PostgreSQL or another database of your choice (Check Typeorm for supported databases)  

## Environment:

The collection of Postman environment variables are attached in the root folder, the Token is automatically stored in the token variable as soon as you are able to login, to make Task requests you must be authenticated or you will receive an unauthorized error, the Backend port this one is set to 2525, if you change it, don't forget to change the host variable in your Postman collection

**The application is not configured for production only for development**

**in the Mobile/src/config/server.ts folder you must change the BACKEND_URL variable to the one you use, like http://localhost:2525 127.0.0.1:2525 etc.**

## Instalation and Running:
#### Backend
**NPM**
```sh
cd Backend
npm i
npm run dev
```
**Yarn**
```sh
cd Backend
yarn install
yarn dev
```
#### MOBILE
**NPM**
```sh
cd Mobile
npm i
npm run android
```
**Yarn**
```sh
cd Mobile
yarn install
yarn android
```
## Tips and Recommendations

#### Backend

In the Backend folder there is a file called **constants.ts** , it is where you must use your environment variables for other files to use, as is the case of **database.ts** where the database is configured   

#### Mobile

Theme (Dark or Light) is configured to use the theme selected on the device, you can configure it so that the user can choose the desired theme instead of being the default of the device   

The default language setting is Brazilian Portuguese (PT-BR), you can add new languages in the ./Mobile/src/i18n/langagues folder, in addition you can add a new setting so that the user switches languages whenever to wish
