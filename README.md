## Introduction

 - Developed on Vercel, with Next.js 14, using Bright Data's webunlocker for the scraping, this site is designed to assist users in timing their purcahses to save as much money as possible.

 - It notifies users when a product drops in price and alerts them when the product is out of stock, all managed through cron jobs.

## Stack

 - Next.js
 - Bright Data
 - Cheerio
 - Nodemailer
 - MongoDB
 - Headless UI
 - Tailwind CSS
 - TypeScript

## Features


👉 Scraping:
 - A search bar allowing users to input Amazon product links for scraping.
 - Displays the details of products scraped so far, offering insights into tracked items by other users.
 - Showcase the product image, title, pricing, details, and other relevant information scraped from Amazon.


👉 Email:
 - Modal for users to provide email addresses and opt-in for tracking.
 - Notification email if tracked product drops below threshold (40%) discount from the original price, giving user the chance to buy at a good time.

👉 Automated Cron Jobs: 
 - Utilize cron jobs to automate periodic scraping, ensuring data is up-to-date.

