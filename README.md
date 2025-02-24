
# Pontifex User Profile

This project is a basic prototype of a user profile management application built with React. It includes features such as auth pages and a dashboard for profile management.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **React Router**: A library for routing in React applications.
- **Vite**: A build tool that provides a faster and leaner development experience for modern web projects.
- **CSS Modules**: A CSS file in which all class and animation names are scoped locally by default.

## Project Structure

```
pontifex-user-profile/
├── node_modules/
├── public/
├── src/
│   ├── components/
│   │   ├── Applications.jsx
│   │   ├── AuthForm.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProfileSection.jsx
│   ├── pages/
│   │   ├── AuthPage.jsx
│   │   ├── Dashboard.jsx
│   ├── styles/
│   │   ├── Applications.module.css
│   │   ├── AuthForm.module.css
│   │   ├── Dashboard.module.css
│   │   ├── ProfileSection.module.css
│   ├── App.jsx
│   ├── main.jsx
├── .gitignore
├── package.json
├── README.md
├── vite.config.js
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher) or yarn (v1.22 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/T-E-G-A/pontifex-user-profile.git
   cd pontifex-user-profile
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Running the Project

1. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

2. Open your browser and navigate to generated url eg: `http://localhost:3000` to see the application running.

### Building for Production

1. Build the project:
   ```bash
   npm run build
   # or
   yarn build
   ```

2. The built files will be in the `dist` directory.

### Linting

1. Run the linter:
   ```bash
   npm run lint
   # or
   yarn lint
   ```

## License

This project is licensed under the MIT License.

