# Bronc Botz SPA Website

A modern Single Page Application (SPA) recreation of the BroncBotz robotics team website, designed for hosting on GitHub Pages.

## Features

- **Single Page Application**: Smooth navigation without page reloads
- **Responsive Design**: Works perfectly on all devices and screen sizes
- **Interactive Carousel**: Showcases team photos and robots with navigation
- **Multiple Pages**: Home, About, Team, Sponsors, and Contact sections
- **Contact Form**: Functional contact form with validation
- **Mobile Navigation**: Collapsible navigation menu for mobile devices
- **Loading Animations**: Smooth transitions between pages
- **GitHub Pages Ready**: All files optimized for static hosting

## Pages

1. **Home** - Hero section with carousel and team overview
2. **About** - Team history, mission, and achievements
3. **Team** - Student leadership and subteam information
4. **Sponsors** - Sponsor recognition and sponsorship opportunities
5. **Contact** - Contact information and inquiry form

## Technical Features

- Hash-based routing for GitHub Pages compatibility
- Modular component architecture
- Vanilla JavaScript (no external dependencies)
- CSS Grid and Flexbox for responsive layouts
- Smooth page transitions and loading states
- Mobile-first responsive design
- Accessible navigation and forms

## Setup for GitHub Pages

1. Create a new repository on GitHub
2. Upload all files to the repository
3. Go to Settings > Pages
4. Select "Deploy from a branch" and choose "main"
5. Your site will be available at `https://yourusername.github.io/repository-name`

## Customization

- Replace placeholder images with actual team photos
- Update team member information and roles
- Modify sponsor logos and information
- Customize colors and styling in `styles.css`
- Add new pages by extending the router in `app.js`

## File Structure

- `index.html` - Main HTML structure and navigation
- `styles.css` - All styling and responsive design
- `app.js` - SPA router, components, and functionality
- `logo.png` - Custom bronco logo
- `README.md` - This documentation

## Browser Support

This SPA works in all modern browsers and is optimized for mobile devices. The hash-based routing ensures compatibility with GitHub Pages static hosting.

## Development

To add new pages:
1. Add a new component function to the `components` object in `app.js`
2. Add a navigation link to the header in `index.html`
3. The router will automatically handle the new route

The application uses a simple but effective routing system that's perfect for GitHub Pages hosting while providing a modern SPA experience.

# Run 
- Run Prod (default):
> docker-compose up --build
- Run Dev (with hot reloads):
> docker-compose -f docker-compose.yml -f docker-compose.dev.yml up --build
