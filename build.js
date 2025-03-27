import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log("Building project for GitHub Pages deployment...");

// The build process is already minimal since our site is static
// All files are already in the public directory for GitHub Pages to serve
// We just need to create a .nojekyll file to prevent GitHub from using Jekyll
fs.writeFileSync(path.join(__dirname, "public", ".nojekyll"), "", "utf8");

// Update homepage URL in package.json if necessary
try {
  const packageJsonPath = path.join(__dirname, "package.json");
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));

  if (packageJson.homepage.includes("yourusername")) {
    console.log(
      '\nWARNING: Update the "homepage" field in package.json with your actual GitHub username'
    );
    console.log(
      "Example: https://youractualusername.github.io/portfolio-vanilla\n"
    );
  }
} catch (error) {
  console.error("Error checking package.json:", error);
}

console.log("Build completed successfully!");
console.log("To deploy to GitHub Pages, run: npm run deploy");
