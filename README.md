
# Multi-Step Form Application

## Overview

This project is a multi-step form built using React.js. It includes personal information, address information, and a confirmation step. The form features data validation, error handling, navigation controls, state management using React hooks, and data persistence using local storage. After form submission, the application navigates to a new form page.

## Features

- **Multi-Step Navigation**: Navigate between three form steps: Personal Information, Address Information, and Confirmation.
- **Validation**: Client-side validation ensures all fields are correctly filled before proceeding.
- **State Management**: Efficient state management with React hooks (`useState`, `useEffect`).
- **Local Storage**: Form data is persisted to local storage to retain user input between steps.
- **Responsive Design**: The form is responsive and works well on desktop, tablet, and mobile screens.
- **Debounced Storage**: Saves form data to local storage with a debounce function to optimize performance.
- **New Form Navigation**: After submitting the main form, the user is navigated to a new form.

## Installation and Setup

### Prerequisites

- Node.js
- npm (Node Package Manager)

### Steps to Install

1. **Clone the repository**:
   ```sh
   git clone <repository-url>
   cd multi-step-form

   Install dependencies:
2. npm install
Start the development server:

3. npm start
Running the Application
Open your browser and navigate to http://localhost:3000 to view the application.

## Project Structure

multi-step-form/
├── public/
├── src/
│   ├── components/
│   │   ├── PersonalInfo.js
│   │   ├── AddressInfo.js
│   │   ├── Confirmation.js
│   │   ├── Stepper.js
│   │   ├── NewForm.js
│   ├── hooks/
│   │   └── useDebounce.js
│   ├── App.js
│   ├── index.js
│   ├── index.css
├── .gitignore
├── package.json
├── README.md

## Components
 **PersonalInfo: Handles the first step of the form, collecting name, email, and phone number.
 **AddressInfo: Manages the second step, gathering address details. Utilizes debounced local storage for data persistence.
 **Confirmation: The final step, where users can review and submit their information.
 **Stepper: Visual representation of the form steps.
 **NewForm: The new form displayed after the main form submission.
 **Custom Hooks
 **useDebounce: Debounces any fast-occurring state changes, particularly useful for optimizing local storage updates.
