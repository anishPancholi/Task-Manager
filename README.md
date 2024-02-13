# Task-Manager
This project is a simple task manager web application that utilizes Firebase Realtime Database for task storage. Users can add tasks, mark them as complete, and remove them from the list.

## Getting Started

Follow the steps below to set up the project and connect it to your own Firebase Realtime Database.

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
- A Firebase account and a project created on the [Firebase Console](https://console.firebase.google.com/).

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/task-manager-firebase.git
Navigate to the project directory:

bash
Copy code
cd task-manager-firebase
Install dependencies:

bash
Copy code
npm install
Firebase Configuration
Go to the Firebase Console and create a new project.

Click on "Add app" and select the web platform (</> icon).

Register the app and copy the configuration object provided.

javascript
Copy code
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID",
};
Replace the placeholder values in index.js with the actual configuration.

javascript
Copy code
// index.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"
import { getDatabase, ref } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    ...firebaseConfig,
    // databaseURL: "YOUR_DATABASE_URL" // Optional, you can remove this line
};

const app = initializeApp(appSettings);
Optionally, you can set up authentication in your Firebase project and modify the authentication logic in index.js accordingly.

Usage
Open the index.html file in your browser.

Use the input field to add tasks, and click "Add to Task."

Tasks will be displayed in the list. Click on a task to mark it as complete, or remove it by clicking on it again.

Tasks are stored in your Firebase Realtime Database, and each user has their own task list.
