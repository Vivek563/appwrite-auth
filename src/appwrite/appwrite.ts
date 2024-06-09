// src/appwrite.js

import { Account, Client } from "appwrite";

const client = new Client();
const account = new Account(client);

client.setEndpoint(import.meta.env.VITE_APP_APPWRITE_ENDPOINT || "").setProject(import.meta.env.VITE_APP_APPWRITE_PROJECT_ID || "");

export { account, client };
