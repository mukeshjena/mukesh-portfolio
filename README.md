# Mukesh's Modern Portfolio Website

A modern, responsive portfolio website built with React, Framer Motion, and Tailwind CSS featuring dark mode, smooth animations, and mobile-first design.

## ✨ Features

- **Modern Design**: Clean, professional, and visually appealing interface
- **Dark Mode**: Toggle between light and dark themes with smooth transitions
- **Responsive**: Fully responsive design that works on all devices
- **Animations**: Smooth animations and micro-interactions using Framer Motion
- **Fast**: Built with Vite for lightning-fast development and building
- **SEO Ready**: Structured for good SEO performance
- **Accessible**: Built with accessibility best practices

## 🚀 Tech Stack

- **Frontend**: React 18 + Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Email**: EmailJS integration ready
- **Deployment**: Ready for deployment on any static hosting platform

## 📁 Project Structure

```
mukesh-portfolio/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.jsx       # Navigation header with smooth scrolling
│   │   │   └── Footer.jsx       # Footer with social links
│   │   └── sections/
│   │       ├── Hero.jsx         # Landing section with CTA
│   │       ├── About.jsx        # About me section
│   │       ├── Skills.jsx       # Technical skills showcase
│   │       ├── Services.jsx     # Services offered
│   │       ├── Portfolio.jsx    # Project portfolio with filtering
│   │       └── Contact.jsx      # Contact form and information
│   ├── context/
│   │   └── ThemeContext.jsx     # Dark mode context
│   ├── data/
│   │   └── portfolioData.js     # All website content and data
│   ├── utils/
│   └── assets/
├── public/
│   └── assets/
│       ├── images/              # Add your images here
│       └── pdf/                 # Add your resume here
└── ...config files
```

## 🛠️ Installation & Setup

1. **Navigate to the project directory:**
   ```bash
   cd mukesh-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview production build:**
   ```bash
   npm run preview
   ```

## 🎨 Customization

### 1. Update Personal Information
Edit `src/data/portfolioData.js` to update:
- Personal information
- Skills and experience
- Projects and portfolio items
- Social media links
- Contact information

### 2. Add Your Images
Place your images in `public/assets/images/`:
- `profile.png` - Your profile photo
- `about.jpg` - About section image
- Project images for portfolio section
- Testimonial images

### 3. Add Your Resume
Place your resume PDF in `public/assets/pdf/Resume.pdf`

### 4. Customize Colors
Edit `tailwind.config.js` to change the color scheme:
```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your brand colors here
      }
    }
  }
}
```

### 5. Email Integration
To enable the contact form:
1. Sign up for [EmailJS](https://www.emailjs.com/)
2. Update the EmailJS configuration in `Contact.jsx`
3. Replace the placeholder with your EmailJS credentials

## 📱 Sections Overview

1. **Hero**: Eye-catching landing section with call-to-action buttons
2. **About**: Professional introduction with key metrics
3. **Skills**: Technical expertise organized by categories
4. **Services**: Services you offer with detailed descriptions
5. **Portfolio**: Project showcase with filtering and live links
6. **Contact**: Contact form and social media links

## 🎯 Performance Features

- **Lazy Loading**: Components load as needed
- **Optimized Images**: Proper image optimization setup
- **Minimal Bundle**: Tree-shaking and code splitting
- **Fast Animations**: Hardware-accelerated CSS animations
- **SEO Optimized**: Meta tags and semantic HTML

## 🚀 Deployment

The website can be deployed to any static hosting platform:

### Vercel (Recommended)
```bash
npm run build
# Deploy dist/ folder to Vercel
```

### Netlify
```bash
npm run build
# Deploy dist/ folder to Netlify
```

### GitHub Pages
```bash
npm run build
# Deploy dist/ folder to GitHub Pages
```

## 🎨 Design Features

- **Smooth Scrolling**: Seamless navigation between sections
- **Parallax Effects**: Subtle parallax animations
- **Hover Interactions**: Interactive elements with hover states
- **Loading Animations**: Staggered animations for better UX
- **Mobile First**: Designed for mobile with progressive enhancement

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Support

If you have any questions or need help customizing the website, feel free to reach out!

---

**Built with ❤️ by Mukesh Jena**
