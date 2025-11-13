# Frontend Mentor - Intro Section with Dropdown Navigation

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5).

## Overview

### The Challenge

Users should be able to:

- View relevant dropdown menus on desktop and mobile when interacting with navigation links
- View the optimal layout depending on device screen size
- See hover states for all interactive elements on the page

### Built With

- **HTML5** - Semantic markup
- **CSS3** - Flexbox, media queries, responsive design
- **JavaScript** - DOM manipulation for dropdown and hamburger menu interactions
- **Mobile-First Workflow** - Built for mobile first, enhanced for larger screens

## Features

✅ Fully responsive design (mobile, tablet, desktop)
✅ Interactive dropdown menus for Features and Company
✅ Hamburger menu for mobile navigation
✅ Smooth transitions and hover effects
✅ Accessible navigation structure

## Key Learnings

- **Mobile-First Approach**: Started with mobile styles and progressively enhanced for larger screens using media queries
- **Responsive Navigation**: Implemented toggle functionality for dropdowns that work across all screen sizes
- **Event Listeners**: Used JavaScript to manage menu visibility based on user interactions and window resizing
- **Media Query Best Practices**: Used `min-width` for mobile-first breakpoints (768px, 925px+)
- **CSS Flexbox**: Leveraged flexbox for flexible, responsive layouts

## Code Highlights

**Responsive Dropdown Toggle (JavaScript):**

```javascript
featuresDropdown.addEventListener("click", () => {
  const isOpen = featuresDD.style.display === "flex";
  if (!isOpen) {
    featuresDD.style.display = "flex";
    featuresArrow.src = "./images/icon-arrow-up.svg";
  } else {
    featuresDD.style.display = "none";
    featuresArrow.src = "./images/icon-arrow-down.svg";
  }
});
```

**Mobile-First CSS:**

```css
/* Base styles (mobile) */
.hero {
  flex-direction: column-reverse;
  width: 100%;
}

/* Enhanced for larger screens */
@media screen and (min-width: 768px) {
  .hero {
    flex-direction: row;
    justify-content: space-around;
  }
}
```

## Continued Development

- Add smooth transitions/animations for dropdown menus
- Implement keyboard navigation (arrow keys, Enter, Escape)
- Improve accessibility with ARIA labels
- Refactor JavaScript to reduce code repetition
- Consider using CSS custom properties for colors and spacing

## Resources Used

- [MDN Web Docs - Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)
- [MDN Web Docs - Media Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries)
- [Frontend Mentor](https://www.frontendmentor.io/)

## Author

- GitHub - [4rch1tT](https://github.com/4rch1tT)
- Frontend Mentor - [4rch1tT](https://www.frontendmentor.io/profile/4rch1tT)

---

**Challenge by** [Frontend Mentor](https://www.frontendmentor.io)
**Coded by** Archit Anirudhan
