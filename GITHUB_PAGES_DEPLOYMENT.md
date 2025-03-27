# GitHub Pages Deployment Guide

This guide will walk you through the process of deploying your portfolio website to GitHub Pages.

## Prerequisites

1. A GitHub account
2. Git installed on your computer
3. Your portfolio project pushed to a GitHub repository

## Step 1: Update the homepage URL

Edit the `homepage` field in your `package.json` file to match your GitHub username and repository name:

```json
"homepage": "https://yourusername.github.io/portfolio-vanilla"
```

Replace `yourusername` with your actual GitHub username.

## Step 2: Make sure all assets use relative paths

All assets (images, CSS, JavaScript) must use relative paths to work correctly on GitHub Pages. This has already been configured in your project.

## Step 3: Build the project

Run the build script to prepare your project for deployment:

```bash
npm run build
```

This will create a `.nojekyll` file in your `public` directory to ensure GitHub Pages doesn't use Jekyll processing.

## Step 4: Deploy to GitHub Pages

Run the deploy script to push your website to GitHub Pages:

```bash
npm run deploy
```

This script will:

1. Build your project
2. Create a temporary directory for deployment
3. Copy all files from the `public` directory
4. Initialize a Git repository
5. Create a commit with your website files
6. Push the commit to the `gh-pages` branch of your GitHub repository

## Step 5: Enable GitHub Pages in your repository settings

1. Go to your GitHub repository
2. Click on "Settings"
3. Scroll down to the "GitHub Pages" section
4. Select the `gh-pages` branch as the source
5. Click "Save"

## Step 6: View your deployed website

After a few minutes, your website should be available at:

```
https://yourusername.github.io/portfolio-vanilla
```

## Troubleshooting

If your website doesn't appear or is missing styles/images:

1. Make sure all paths in your HTML, CSS, and JavaScript files are relative
2. Check that the `homepage` field in `package.json` is correct
3. Ensure GitHub Pages is enabled in your repository settings
4. Allow a few minutes for GitHub Pages to build and deploy your site

## Updating your website

Whenever you make changes to your website:

1. Make your changes locally
2. Test them with `npm run dev`
3. When ready, run `npm run deploy` to update your deployed site

## Custom Domain (Optional)

To use a custom domain with your GitHub Pages site:

1. Purchase a domain name from a domain registrar
2. Add a `CNAME` file to your `public` directory containing your domain name
3. Configure your domain's DNS settings according to GitHub's documentation
4. Update the `homepage` field in `package.json` to your custom domain
