
# Project Blueprint

## Overview

This project is a simple, single-page web application that allows users to generate random lottery numbers. It is built using modern HTML, CSS, and JavaScript, following best practices for web development. Users can generate multiple sets of numbers at once and toggle between light and dark themes.

## Current Features

### Version 1.2: Multi-set Lotto Number Generator

*   **HTML (`index.html`):**
    *   A clean and accessible structure with a main heading, a button to generate numbers, and a section to display multiple sets of results.
    *   Includes a theme toggle switch to change between dark and light modes.
*   **CSS (`style.css`):**
    *   A modern and visually appealing design with a focus on user experience.
    *   Uses a dark theme by default, with an optional light theme.
    *   Layout updated to display multiple rows of lottery numbers.
    *   Responsive design that adapts to different screen sizes.
    *   Uses CSS variables for easy theme management.
*   **JavaScript (`main.js`):**
    *   A function to generate 4 sets of 6 unique random numbers between 1 and 45.
    *   An event listener on the "Generate" button to trigger the number generation and display the results in 4 separate rows.
    *   An event listener for the theme toggle that switches the theme and saves the user's preference in local storage.

## Development Plan

*   **Task:** Generate 4 sets of lotto numbers at a time.
*   **Steps:**
    1.  Update `index.html` to allow for multiple rows of numbers to be displayed.
    2.  Modify `style.css` to correctly style the multiple rows of numbers.
    3.  Update `main.js` to generate 4 sets of numbers and display them.
