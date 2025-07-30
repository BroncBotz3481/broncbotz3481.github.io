# BroncBotz Robotics Team Website

The official website for BroncBotz Team 3481, a FIRST Robotics Competition team from Brandeis High School in San Antonio, Texas.

🌐 **Live Website**: [https://broncbotz.org](https://broncbotz.org)  
📂 **GitHub Repository**: [https://github.com/BroncBotz3481/broncbotz3481.github.io](https://github.com/BroncBotz3481/broncbotz3481.github.io)

## About

This is a modern, responsive website built with Next.js that showcases our robotics team's journey, achievements, and community involvement. The site features information about our team members, robots, sponsors, and upcoming events.

## Features

- **Responsive Design**: Optimized for all devices and screen sizes
- **Interactive Components**: Dynamic carousels, modals, and navigation
- **Team Showcase**: Detailed information about team members and leadership
- **Robot Gallery**: Historical overview of our competition robots (2018-2024)
- **Sponsor Recognition**: Dedicated section highlighting our valued sponsors
- **Contact Information**: Easy ways to get in touch with the team
- **Social Media Integration**: Links to our Instagram, Facebook, and YouTube

## Pages

1. **Home** - Welcome section with team overview and highlights
2. **About** - Team history, mission, achievements, and social media links
3. **Team** - Student leadership, mentors, and subteam information
4. **Robots** - Gallery of competition robots with detailed specifications
5. **Sponsors** - Recognition of our sponsors and partnership opportunities
6. **Contact** - Contact information and inquiry form

## Deployment

The website is automatically deployed to GitHub Pages using GitHub Actions:

- **Deployment Branch**: `gh-pages`
- **Trigger**: Automatic deployment on every push to the `main` branch
- **Build Process**: Next.js static export optimized for GitHub Pages
- **Custom Domain**: Configured to serve at [broncbotz.org](https://broncbotz.org)

### Deployment Workflow

1. Code changes are pushed to the `main` branch
2. GitHub Actions automatically builds the Next.js application
3. Static files are exported and deployed to the `gh-pages` branch
4. Changes are live at [broncbotz.org](https://broncbotz.org) within minutes

## Development Setup

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager

### Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/BroncBotz3481/broncbotz3481.github.io.git
cd broncbotz3481.github.io
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the application for production
- `npm run start` - Start production server (requires build first)
- `npm run export` - Export static files for deployment
- `npm run lint` - Run ESLint for code quality

## Project Structure

\`\`\`
├── app/                    # Next.js app directory
├── components/            # React components
│   ├── pages/            # Page components
│   └── ui/               # Reusable UI components
├── public/               # Static assets (images, logos, etc.)
├── styles/               # CSS and styling files
├── .github/workflows/    # GitHub Actions deployment workflow
└── README.md            # This file
\`\`\`

## Contributing

We welcome contributions from team members and the community! Here's how to get involved:

### For Team Members

1. **Content Updates**: Update team member information, robot details, or sponsor logos
2. **Feature Requests**: Suggest new features or improvements
3. **Bug Reports**: Report any issues you encounter

### Making Changes

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Make your changes and test locally
4. Commit your changes: `git commit -m "Description of changes"`
5. Push to your branch: `git push origin feature/your-feature-name`
6. Create a Pull Request

### Content Guidelines

- **Images**: Optimize images for web use (WebP format preferred)
- **Text**: Keep content concise and engaging
- **Accessibility**: Ensure all content is accessible (alt text for images, proper headings)
- **Branding**: Maintain consistent use of team colors and branding

## Technical Details

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom components
- **UI Components**: shadcn/ui component library
- **Icons**: Lucide React icons
- **Deployment**: GitHub Pages with GitHub Actions
- **Domain**: Custom domain configured through GitHub Pages

## Social Media

Stay connected with BroncBotz:

- **Instagram**: [@broncbotz](https://instagram.com/broncbotz)
- **Facebook**: [facebook.com/Bronc.Botz](https://facebook.com/Bronc.Botz)
- **YouTube**: [@BHSBroncBotz](https://youtube.com/@BHSBroncBotz)

## Contact

**BroncBotz Team 3481**  
Brandeis High School  
San Antonio, Texas

For website issues or suggestions, please open an issue in this repository or contact the team through our website.
