# Course Enrollment CLI

A console-based course enrollment system built with plain JavaScript and Node.js. Browse available courses, read their descriptions, check fees, and enroll by entering your details and payment, all from the terminal.

This is my first JavaScript project.

## Features

- Menu-driven navigation that simulates "pages" in the console (Home, Courses, Course Fees)
- Course list with a description page for each course
- Fee overview for all courses
- Enrollment form that collects name, age, and payment
- Input validation:
  - Age must be a number between 12 and 80
  - Payment must match the exact course fee
  - Invalid menu choices show an error and return you to the page
- Newly enrolled students are added to the class list and displayed in a table
- Simulated loading delays and screen clearing between pages

## Available Courses

| Course ID | Title                              | Fee     |
| --------- | ---------------------------------- | ------- |
| PM-101    | Become a Pokemon Master            | $15,000 |
| CK-250    | The History of Captain Kirk        | $200    |
| DC-130    | JavaTheHut Studio Dance Class 130  | $1,900  |

## Requirements

- [Node.js](https://nodejs.org/) v16 or higher (the app uses the `node:` module prefix)

No external packages or `npm install` needed.

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/<your-username>/course-enrollment-cli.git
   cd course-enrollment-cli
   ```

2. Run the app:

   ```bash
   node index.js
   ```

## How to Use

Navigate by typing the number next to an option and pressing Enter.

```
[1] COURSES
[2] COURSE FEES
[3] EXIT
```

**To enroll in a course:**

1. Choose **COURSES** (or **COURSE FEES**) from the home page
2. Pick a course to read its description
3. Choose **NEXT PAGE** to see the course fee
4. Choose **NEXT PAGE** again to open the enrollment form
5. Enter your **Name**, **Age**, and **Payment** (the exact fee amount)
6. See the updated list of enrolled students, then return home or exit

## Project Structure

```
course-enrollment-cli/
├── index.js     # The whole application
└── README.md
```

Inside `index.js`, the code is organized into sections:

- **Course enrollment database**: arrays and objects holding courses, fees, and enrolled students
- **User interface pages**: template strings that make up each console "page"
- **Prompt functions**: capture user input with `readline`
- **Delay functions**: simulate loading times with `setTimeout`
- **Validation functions**: check age, payment, and menu choices
- **Navigation functions**: move between pages
- **Core functions**: start the app and route from the home page

## Concepts Practiced

- Node.js `readline` for terminal input
- Arrays, objects, and `find()` / `push()`
- Template literals for building UI text
- Arrow functions and callbacks
- `setTimeout` for timed behavior
- `console.table()` for displaying data
- Input validation with conditionals

## Known Limitations

- Data is stored in memory only, so enrolled students reset when the app closes
- Payment is simulated; no real transactions happen
- Names are not validated

## Future Improvements

- Save enrollments to a JSON file so data persists between runs
- Reduce repeated code by using one reusable function for all courses
- Validate that names are not empty
- Add a feature to view all students in a class
- Add automated tests

## Author

Your Name ([@Dom Sunga](https://github.com/drsunga))

## License

This project is open source and available under the [MIT License](LICENSE).
