// src/appwrite.js

import { Account, Client } from "appwrite";

const client = new Client();
const account = new Account(client);

client
     .setEndpoint(process.env.REACT_APP_APPWRITE_ENDPOINT!) // Your Appwrite endpoint
     .setProject(process.env.REACT_APP_APPWRITE_PROJECT_ID!); // Your Appwrite project ID

export { account, client };
