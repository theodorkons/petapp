## **🐾 PetApp**

A pet adoption tracking application that allows users to browse available, pending, and sold pets. Users can filter pets by status and explore details about them using a clean and interactive UI.

## **📖 Table of Contents**

- [Features](#features)
- [Technologies](#technologies)
- [Environment Configuration](#environment-configuration)
- [Running the Application](#running-the-application)
- [Usage](#usage)
- [Testing](#testing)
- [Deployment](#deployment)

## **🎯 Features**

- **Filter Pets by Status**: View pets based on their adoption status (`Available`, `Pending`, `Sold`).
- **Interactive Buttons**: Click on filter buttons to dynamically fetch and display pets.
- **Dynamic Pet Cards**: Pets are displayed in cards showing their name and category.
- **Loading Indicator**: A loader appears while fetching pet data.
- **Error Handling**: Displays an error message if fetching fails.

## **🛠️ Technologies**

- **Vite**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **TanStack React Query**
- **npm**
- **Vitest** (for testing)

### **📌 Prerequisites**

- **Node.js**
- **Postman** (optional for API testing)

## **⚙️ Environment Configuration**

Create a `.env` file in the root directory and add your API configurations:

```plaintext
# API Base URL
VITE_BASE_API_URL='https://petstore.swagger.io/v2/pet/findByStatus'

```

## **🚀 Running the Application**

### **1️⃣ Install Dependencies**

```bash
npm install
```

### **2️⃣ Start the Development Server**

```bash
npm run dev
```

Then, open your browser and navigate to `http://localhost:5173/`.

## **🐶 Usage**

1. **Click on the status buttons** (`Available`, `Pending`, `Sold`) to fetch pets dynamically.
2. **View pets in cards**, displaying their name, category, and status.
3. **If no pets are found**, the UI handles the empty state.
4. **Loading animation appears** while data is being fetched.

## **🧪 Testing**

PetApp includes unit tests using **Vitest**.

Run tests with:

```bash
npm run test
```

## **🌍 Deployment**

PetApp is deployed on **Vercel**.  
Access it here:  
👉 [PetApp on Vercel](https://petapp-seven.vercel.app/)
