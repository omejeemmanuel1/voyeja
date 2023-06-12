# Voyeja Frontend Style Guide

## HTML
- Use HTML5 doctype and semantic HTML elements for improved accessibility and SEO.
- Separate concerns by keeping markup separate from styles and scripts.

## CSS
- Organize CSS properties in a consistent order (e.g., layout, typography, colors).
- Use meaningful class names or names related to what you're working on and avoid excessive use of nested selectors.
- Use class-based selectors over element selectors for improved performance.
- Avoid using inline styles except when necessary.

## React
- Follow the official React style guide and best practices.
- Use functional components by default unless you need to use class components for a specific reason.
- Use TSX syntax for rendering HTML within Typescript code.
- Organize component files and folders based on their functionality and purpose.
- Prefer using arrow functions for component methods to avoid binding issues.
- Avoid directly manipulating the DOM and use React's state and props system instead.

## Component Structure
- Use a consistent component structure, such as separating folders for components, styles, and tests.
- Name components using PascalCase and use descriptive names that reflect their purpose.
- Keep components small and focused on a single responsibility.
- Separate presentational (UI) components from container (logic) components for better reusability and maintainability.

## Page Structure
The Page Structure component serves as the container for rendering all other smaller components.

### Purpose
The purpose of the Page Structure component is to provide a consistent layout and structure for the page, acting as the main container for all other components.

### Usage
To use the Page Structure component, follow these steps:

## File Organization
- Organize project files based on feature.
- Use meaningful and descriptive file names.


## Version Control and Git
- Use meaningful and descriptive commit messages.
- Create feature branches for each new feature or bug fix.
- Regularly pull changes from the main branch and resolve conflicts promptly.
- Avoid committing large binary files or sensitive information.


---