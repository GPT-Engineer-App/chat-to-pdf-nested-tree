# chat-to-pdf-nested-tree

A nested tree structure of a chat-to-PDF interface: 
- Body
  - Header
    - Upload Button
  - Main Container
    - Sidebar
      - List Item: "smartwatch_user_guide.pdf"
      - List Item: "CV.pdf"
    - Content Area
      - PDF Preview Window
        - PDF Content: "SMART WATCH USER GUIDE"
        - PDF Navigation Controls (Zoom, Next Page, Previous Page, etc.)
      - Chat Interface (Modal)
        - Modal Header: "Welcome to the PDF file, 'Smart Watch User Guide'!"
        - Close Button [X]
        - Question Section
          - Sample Question 1: "Where can I find how-to videos..."
          - Sample Question 2: "Which phones are compatible..."
        - Input Field: "Ask any question"
        - Submit Button
  - Footer (if applicable)

The chat interface modal includes a header with the title and close button, a body with instructional text and example questions, and a footer with an input field and submit button. The upload area provides instructions for drag and drop as well as a button to browse from the computer.

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/chat-to-pdf-nested-tree.git
cd chat-to-pdf-nested-tree
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Tech stack

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Chakra UI](https://chakra-ui.com/)

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
