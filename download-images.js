import https from "https";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const images = [
  {
    url: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop",
    filename: "ecommerce.jpg",
  },
  {
    url: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop",
    filename: "task-manager.jpg",
  },
  {
    url: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
    filename: "portfolio.jpg",
  },
  {
    url: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop",
    filename: "weather.jpg",
  },
  {
    url: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=600&fit=crop",
    filename: "blog.jpg",
  },
  {
    url: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=800&h=600&fit=crop",
    filename: "chat.jpg",
  },
  {
    url: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80",
    filename: "hero-profile.jpg",
    description: "Hero section profile image",
  },
  {
    url: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80",
    filename: "hero-bg.jpg",
    description: "Hero section background image",
  },
  {
    url: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80",
    filename: "about-profile.jpg",
    description: "About section profile image",
  },
  {
    url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    filename: "project1.jpg",
    description: "Project 1 image",
  },
  {
    url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    filename: "project2.jpg",
    description: "Project 2 image",
  },
  {
    url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    filename: "project3.jpg",
    description: "Project 3 image",
  },
  {
    url: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
    filename: "project4.jpg",
    description: "Project 4 image",
  },
  {
    url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    filename: "project5.jpg",
    description: "Project 5 image",
  },
  {
    url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    filename: "project6.jpg",
    description: "Project 6 image",
  },
  {
    url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    filename: "project7.jpg",
    description: "Project 7 image",
  },
  {
    url: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
    filename: "project8.jpg",
    description: "Project 8 image",
  },
  {
    url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    filename: "project9.jpg",
    description: "Project 9 image",
  },
  {
    url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    filename: "project10.jpg",
    description: "Project 10 image",
  },
  {
    url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    filename: "project11.jpg",
    description: "Project 11 image",
  },
  {
    url: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
    filename: "project12.jpg",
    description: "Project 12 image",
  },
];

const downloadImage = (url, filename) => {
  return new Promise((resolve, reject) => {
    const filepath = path.join(__dirname, "public", "images", filename);
    const file = fs.createWriteStream(filepath);

    https
      .get(url, (response) => {
        response.pipe(file);
        file.on("finish", () => {
          file.close();
          console.log(`Downloaded: ${filename}`);
          resolve();
        });
      })
      .on("error", (err) => {
        fs.unlink(filepath, () => {}); // Delete the file if there was an error
        console.error(`Error downloading ${filename}:`, err.message);
        reject(err);
      });
  });
};

const downloadAllImages = async () => {
  try {
    // Create the directory if it doesn't exist
    const dir = path.join(__dirname, "public", "images");
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    for (const image of images) {
      await downloadImage(image.url, image.filename);
    }
    console.log("All images downloaded successfully!");
  } catch (error) {
    console.error("Error downloading images:", error);
  }
};

downloadAllImages();
