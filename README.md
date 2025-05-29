# HTML to PDF Converter (Full-Width Render with Puppeteer)

This script converts a local HTML file into a high-fidelity PDF using Puppeteer. It captures the entire rendered layout, including dynamic content, styles, and full-width formatting.

## Prerequisites

- Node.js and npm
- Install Puppeteer with:

  npm install puppeteer

## Usage

1. Place your HTML file in the project directory, and replace `your_html_file_name.html` with your actual html file name.
2. In the terminal, run:

   node html-to-pdf.js

This will generate a PDF named `your_html_file_name.pdf` with:

- Full page width (1920px)
- Dynamic height based on content
- Backgrounds and styles included

## Customization

- To adjust layout, edit the `width` and `height` in the script.
- Rename `your_html_file_name.html` and `your_html_file_name.pdf` in the script if using different filenames.
- Margins are currently set to zero (`margin: 0`) for edge-to-edge rendering.

## Notes

- Designed for scenarios where browser printing fails or doesn't capture the layout correctly.
- Works best for static or client-side-rendered HTML. If your page requires external assets, ensure paths are relative or accessible.