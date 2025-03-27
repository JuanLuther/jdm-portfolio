import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log("Starting deployment to GitHub Pages...");

// First run the build script
try {
  console.log("Building project...");
  execSync("node build.js", { stdio: "inherit" });
} catch (error) {
  console.error("Error building project:", error.message);
  process.exit(1);
}

// Create a temporary directory for deployment
const tmpDir = path.join(__dirname, "gh-pages-deploy");
if (fs.existsSync(tmpDir)) {
  console.log("Cleaning up previous deployment files...");
  fs.rmSync(tmpDir, { recursive: true, force: true });
}

fs.mkdirSync(tmpDir, { recursive: true });

// Function to copy files recursively
const copyRecursive = (src, dest) => {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();

  if (isDirectory) {
    fs.mkdirSync(dest, { recursive: true });
    fs.readdirSync(src).forEach((childItemName) => {
      copyRecursive(
        path.join(src, childItemName),
        path.join(dest, childItemName)
      );
    });
  } else {
    fs.copyFileSync(src, dest);
  }
};

// Copy public folder to temp directory
console.log("Copying files for deployment...");
copyRecursive(path.join(__dirname, "public"), tmpDir);

// Initialize Git in the temp directory
console.log("Initializing Git repository...");
process.chdir(tmpDir);

try {
  execSync("git init", { stdio: "inherit" });
  execSync("git add .", { stdio: "inherit" });
  execSync('git commit -m "Deploy to GitHub Pages"', { stdio: "inherit" });

  // Read homepage URL from package.json
  const packageJsonPath = path.join(__dirname, "package.json");
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));

  let repoUrl;
  if (packageJson.homepage) {
    // Extract GitHub repo URL from homepage
    const match = packageJson.homepage.match(
      /https:\/\/([^.]+)\.github\.io\/([^/]+)/
    );
    if (match) {
      const [, username, repo] = match;
      repoUrl = `https://github.com/${username}/${repo}.git`;
    }
  }

  if (!repoUrl) {
    throw new Error(
      "Unable to determine GitHub repository URL from package.json homepage"
    );
  }

  // Add GitHub remote and push
  console.log(`Pushing to GitHub repository: ${repoUrl}`);
  execSync(`git remote add origin ${repoUrl}`, { stdio: "inherit" });
  execSync("git checkout -b gh-pages", { stdio: "inherit" });
  execSync("git push -f origin gh-pages", { stdio: "inherit" });

  console.log("\nDeployment completed successfully! 🎉");
  console.log(`Your site should be available at: ${packageJson.homepage}`);
  console.log(
    "\nImportant: If this is your first deployment, it may take a few minutes for GitHub Pages to become active."
  );
  console.log(
    "Make sure you have enabled GitHub Pages in your repository settings for the gh-pages branch."
  );
} catch (error) {
  console.error("\nDeployment failed:", error.message);
  console.log("\nPlease ensure:");
  console.log("1. You have Git installed and configured");
  console.log(
    "2. You have access to the GitHub repository specified in package.json"
  );
  console.log(
    '3. You have updated the "homepage" field in package.json with your actual GitHub username and repository'
  );
  process.exit(1);
} finally {
  // Return to the project directory
  process.chdir(__dirname);

  // Clean up
  console.log("\nCleaning up...");
  fs.rmSync(tmpDir, { recursive: true, force: true });
}
