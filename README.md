Bill Splitter App

Overview
The Bill Splitter App is a simple and interactive web application that allows users to easily split a bill among multiple people, including tips based on service quality. The app is built using React.js and provides a user-friendly interface with live calculations and animations.

Features
Bill Input: Enter the total bill amount.
People Input: Specify the number of people sharing the bill.
Tip Selection: Choose a tip percentage based on the quality of service using interactive icons:
😔 No Tip (0%)
😐 It was OK (10%)
🙂 Good service (20%)
😍 Wow (30%)
Real-Time Calculation: Instantly calculates:
Bill per person.
Tip per person.
Total amount per person.
Error Handling: Alerts users with meaningful error messages if required inputs are missing.
Stylish and Responsive: Clean and modern design with responsive elements for various devices.

Installation and Setup

Clone the repository:

git clone https://github.com/your-username/bill-splitter-app.git
cd bill-splitter-app
Install dependencies:

npm install
Start the development server:

npm start
Open your browser and navigate to http://localhost:3000 to use the app.

Usage
Enter the total bill amount in the Bill input field.
Enter the number of people splitting the bill in the How many people? input field.
Select the desired tip percentage by clicking on one of the service icons.
Click the CALCULATE button to see:
The bill amount per person.
The tip amount per person.
The total amount per person.
Tech Stack
React.js: Frontend library.
SweetAlert2: For elegant alert pop-ups.
CSS: For custom styling.
FontAwesome: For icons representing service quality.
Screenshots
Main Interface:

Includes input fields for bill and people, tip selection buttons, and the calculate button.
Result Display:

Shows the calculated bill, tip, and total per person.
Future Enhancements
Add currency selection for international users.
Enhance mobile responsiveness.
Allow custom tip percentages.
Integrate a dark mode for better accessibility.