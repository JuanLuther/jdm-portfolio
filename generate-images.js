import { createCanvas } from "canvas";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projects = [
  {
    title: "E-Commerce Website",
    color: "#FF6B6B",
  },
  {
    title: "Task Management App",
    color: "#4ECDC4",
  },
  {
    title: "Portfolio Website",
    color: "#45B7D1",
  },
  {
    title: "Weather Dashboard",
    color: "#96CEB4",
  },
  {
    title: "Blog Platform",
    color: "#FFEEAD",
  },
  {
    title: "Chat Application",
    color: "#D4A5A5",
  },
];

const generateImage = (project) => {
  const width = 800;
  const height = 600;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext("2d");

  // Fill background
  ctx.fillStyle = project.color;
  ctx.fillRect(0, 0, width, height);

  // Add gradient overlay
  const gradient = ctx.createLinearGradient(0, 0, 0, height);
  gradient.addColorStop(0, "rgba(0, 0, 0, 0.2)");
  gradient.addColorStop(1, "rgba(0, 0, 0, 0.5)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  // Add text
  ctx.fillStyle = "white";
  ctx.font = "bold 48px Arial";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(project.title, width / 2, height / 2);

  // Add subtitle
  ctx.font = "24px Arial";
  ctx.fillText("Project Preview", width / 2, height / 2 + 50);

  // Save the image
  const buffer = canvas.toBuffer("image/jpeg");
  const filepath = path.join(
    __dirname,
    "public",
    "images",
    "projects",
    `${project.title.toLowerCase().replace(/\s+/g, "-")}.jpg`
  );
  fs.writeFileSync(filepath, buffer);
  console.log(`Generated: ${filepath}`);
};

// Create images directory if it doesn't exist
const imagesDir = path.join(__dirname, "public", "images", "projects");
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Generate images for all projects
projects.forEach((project) => {
  generateImage(project);
});

console.log("All project images generated successfully!");
