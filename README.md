# Impresos FADM Website

A static website for Impresos FADM, a printing and packaging company based in Mexico City. The site showcases the company's services, including printing, custom packaging, and thermoforming solutions.

## Quick Start

**No installation required!** This is a static website that works in any modern browser.

### Option 1: Direct Browser (Recommended)
1. **Download** this repository to your computer
2. **Double-click** `index.html` to open it in your browser
3. **That's it!** The website works perfectly without any server or additional software.

### Option 2: Local Server (Optional)
If you want to run a local server (useful for testing contact forms), you can use any of these methods:

**Using VS Code Live Server Extension (Easiest):**
1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html` → "Open with Live Server"
3. The website will automatically open in your browser with live reload

**Using Node.js (if you have it):**
```bash
npx http-server . -p 8000
```

**Using Python (if you have it):**
```bash
python -m http.server 8000
```

**Using PHP (if you have it):**
```bash
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## Project Structure

```
Impresos FADM/
├── index.html              # Main homepage (Spanish)
├── index-en.html           # Homepage (English)
├── about.html / about-en.html     # About page
├── servicios.html / servicios-en.html  # Services page
├── contact.html / contact-en.html      # Contact page
├── thankyou.html           # Thank you page (form submissions)
├── css/
│   ├── styles.css          # Custom styles
│   └── template.css        # Template styles
├── script.js               # Custom JavaScript
├── images/                 # All website images
├── fonts/                  # Custom fonts
└── package.json            # Project configuration
```

## Features

- **Bilingual Support**: Spanish (default) and English versions
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Contact Forms**: Integrated contact and quote request forms
- **Modern UI**: Bootstrap-based with custom styling
- **Image Gallery**: Showcases company work and facilities
- **Service Catalog**: Detailed information about printing and packaging services

## Pages

- **Home** (`index.html`) - Company overview and main services
- **About** (`about.html`) - Company history, mission, and values
- **Services** (`servicios.html`) - Detailed service offerings
- **Contact** (`contact.html`) - Contact information and quote request form

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Custom styling with Bootstrap 4.6
- **JavaScript** - Interactive features and animations
- **Bootstrap** - Responsive framework
- **Font Awesome** - Icons
- **Owl Carousel** - Image sliders
- **Animate.css** - CSS animations
- **WOW.js** - Scroll animations

## Development

This is a static website - no build process required! Just edit the HTML, CSS, or JavaScript files directly and refresh your browser.

### Making Changes

1. Edit the relevant HTML, CSS, or JavaScript files
2. Refresh your browser to see changes
3. For CSS changes, you may need to do a hard refresh (Ctrl+F5 or Cmd+Shift+R)

## Form Handling

The contact forms are configured to use [FormSubmit](https://formsubmit.co/) service, sending emails to `ventas@fadm.com.mx`. After form submission, users are redirected to `thankyou.html`.

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Internet Explorer 11+

## Contact

For questions about this website, contact:
- **Email**: ventas@fadm.com.mx
- **Phone**: (55) 50954600
- **Location**: Ciudad de México, México

## License

Copyright © 2025 Impresos y Empaques FADM. All rights reserved.