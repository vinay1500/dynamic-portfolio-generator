# Dynamic Portfolio Generator

A dynamic portfolio generator that lets users build and preview portfolio websites using structured forms and reusable templates.

## Live Demo

**Live link:** Not added yet
<!---
> Add your deployed app link here:
>
> `https://your-live-demo-link.com`

--->

## Topics

`react` `typescript` `portfolio-generator` `dynamic-portfolio` `template-builder` `form-driven-ui` `routing` `frontend` `portfolio-project` `resume-website`

---

## Screenshots

<!---> Add your screenshots inside a `screenshots/` folder in the root of the repository. --->

### Home Page
![Home Page](./screenshots/Home_Page.png)

### Portfolio Form
![Portfolio Form](./screenshots/Create_Portfolio.png)

### Template Selection
![Template Selection](./screenshots/Template.png)

### Generated Portfolio Preview
![Generated Portfolio Preview](./screenshots/View_Portfolio.png)

### Mobile View
![Mobile View](./screenshots/mobile-view.png)

---

## Overview

Dynamic Portfolio Generator is a web application designed to help users create professional portfolio websites without building each page manually from scratch. Users can enter structured information such as profile details, skills, projects, education, and experience, then generate a portfolio layout using predefined templates.

The goal of the project is to simplify portfolio creation for students, developers, freelancers, and job seekers by turning form-based input into a presentable portfolio interface.

---

## Architecture Summary

The application follows a component-based frontend architecture focused on modular UI, reusable templates, and dynamic rendering.

### High-level flow

- users enter portfolio data through structured forms
- form data is stored in application state
- a selected template determines the rendered portfolio layout
- routing enables navigation between builder and preview views
- preview components render the final portfolio dynamically from entered data

### Core modules

- **Form Module**  
  Collects portfolio data such as personal information, skills, education, projects, experience, and contact details.

- **Template Module**  
  Provides multiple layout options for rendering the same portfolio data in different styles.

- **Preview Module**  
  Displays the generated portfolio using the currently selected template and user data.

- **Routing Layer**  
  Handles navigation between the landing page, form flow, template selection, and final preview.

- **State Management Layer**  
  Manages user-entered portfolio data and selected template across the app.

---

## Feature List

- Dynamic portfolio generation from user input
- Multi-section form for portfolio data entry
- Template-based portfolio rendering
- Real-time or near real-time preview
- Reusable UI component structure
- Client-side routing between pages/views
- Editable portfolio content
- Responsive portfolio layout support
- Clean separation between data input and presentation
- Portfolio project showcase for personal branding

---

## Tech Stack

- React
- TypeScript
- React Router
- CSS / modular styling
- Component-based frontend architecture

---

## Suggested Folder Structure

```bash
dynamic-portfolio-generator/
├── public/
├── screenshots/
├── src/
│   ├── components/
│   ├── pages/
│   ├── templates/
│   ├── routes/
│   ├── data/
│   ├── types/
│   ├── App.tsx
│   └── main.tsx / index.tsx
├── package.json
├── tsconfig.json
└── README.md

### Getting Started
   ## Prerequisites

# Make sure you have installed:

Node.js
npm
# Clone the repository
git clone https://github.com/vinay1500/dynamic-portfolio-generator.git
cd dynamic-portfolio-generator
# Install dependencies
npm install
# Run the development server
npm start

or, if your project uses Vite:

npm run dev
# Build for production
npm run build
## How It Works
The user fills out portfolio-related sections through forms.
The application stores that information in shared frontend state.
The user selects a template/layout.
The preview screen renders a complete portfolio using the entered data.
The same data can be reused across multiple visual templates.
## Future Improvements
Add export to PDF
Add theme customization and color presets
Add drag-and-drop section reordering
Add image upload for profile and project thumbnails
Add local storage or database persistence
Add authentication and saved user portfolios
Add shareable portfolio URLs
Add GitHub or LinkedIn data import
Add admin/editor dashboard
Add deployment and publishing workflow
## License

This project is shared for portfolio, learning, and demonstration purposes.
