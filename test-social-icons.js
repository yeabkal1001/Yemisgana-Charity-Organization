const fs = require('fs');
const content = fs.readFileSync('components/get-involved/index.tsx', 'utf8');
if (content.includes('aria-label') && content.includes('Facebook')) {
    console.log("aria-label already exists");
} else {
    console.log("No aria-label on social icons");
}
