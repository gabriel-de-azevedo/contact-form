# Frontend Mentor - Contact form solution

This is a solution to the [Contact form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/contact-form--G-hYlqKJj). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Complete the form and see a success toast message upon successful submission
- Receive form validation messages if:
  - A required field has been missed
  - The email address is not formatted correctly
- Complete the form only using their keyboard
- Have inputs, error messages, and the success message announced on their screen reader
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [GitHub Repository](https://github.com/gabriel-de-azevedo/contact-form)
- Live Site URL: [GitHub Page](https://gabriel-de-azevedo.github.io/contact-form/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Vite](https://vite.dev/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Hook Form](https://www.react-hook-form.com/)
- [React Toastify](https://www.npmjs.com/package/react-toastify)

### What I learned

Well, it was my first time using Tailwind CSS, so that took a little bit of getting used to. The main thing I noticed is that it works best when using something like [Atomic Design](https://atomicdesign.bradfrost.com/chapter-2/) and breaking down components to the smallest unit possible. Otherwise we end up writing the same styles everywhere over and over or creating a ton of custom classes (and would probably be better off using pure CSS at that point).

Also, ESLint got really mad when I started using custom props on my React components without typing them, even though I'm not using TypeScript. Instead of trying to get rid of the warnings, I decided to just go back to using TypeScript on my next React projects. If I'll have to type things anyways, might as well type everything and get the benefits.

Other than that, I had to read a lot of documentation because of all the libraries I decided to use.

And, finally, I had to figure out how to deploy a React project to GitHub Pages. That's something I never had to do before, but didn't take that long to figure out.

In summary, I:

- Used a few different tools and had to read a lot about them.
- Learned how to deploy React apps to GitHub Pages.
- Decided to always use TypeScript when using React.
- Am considering not using Tailwind CSS for small projects.

## Author

- GitHub - [gabriel-de-azevedo](https://github.com/gabriel-de-azevedo)
- LinkedIn - [gabriel-marques-de-azevedo](https://www.linkedin.com/in/gabriel-marques-de-azevedo/)
- Frontend Mentor - [@gabriel-de-azevedo](https://www.frontendmentor.io/profile/gabriel-de-azevedo)
