# Appwrite Authentication with React and TypeScript

This project demonstrates user authentication using Appwrite with a React and TypeScript frontend. The project includes login, registration, and protected routes to ensure only authenticated users can access certain parts of the application.

```dotnetcli
├── src
│   ├── components
│   │   ├── login
│   │   │   └── Login.tsx
│   │   ├── register
│   │   │   └── Register.tsx
│   │   ├── dashboard
│   │   │   └── Dashboard.tsx
│   │   └── ui
│   │       ├── button.tsx
│   │       ├── input.tsx
│   │       └── label.tsx
│   ├── appwrite
│   │   └── appwrite.ts
│   ├── types
│   │   └── user.types.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── .env
├── package.json
├── README.md
└── tsconfig.json

```

## Getting Started

### Prerequisites

-    Node.js
-    npm or yarn
-    Appwrite server setup

#### Installation

-    Clone the repository:

```bash
git clone https://github.com/your-username/appwrite-react-auth.git
cd appwrite-react-auth
```

-    Install dependencies:

```bash
npm install
```

-    Set up environment variables:

Create a .env file in the root directory and add your Appwrite project configuration:

```bash
VITE_APPWRITE_ENDPOINT=http://localhost/v1
VITE_APPWRITE_PROJECT_ID=your_project_id
```

-    Running the Application
     To start the application in development mode:

```bash
npm run dev
```

### Open your browser and navigate to http://localhost:5173.
