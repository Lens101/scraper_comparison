"use server"
import axios from 'axios';
import * as cheerio from 'cheerio';
import { extractPrice } from '../actions/utils';

export async function scrapeAmazonProduct(url: string) {
  if(!url) {
    return;
  }

  //Bright Data proxy config
  const un = String(process.env.BRIGHT_DATA_UN);
  const pw = String(process.env.BRIGHT_DATA_PW);
  const port = 22225;
  const session_id = (1000000 * Math.random()) | 0;
  const options = {
    auth: {
      username: `${un}-session-${session_id}`,
      password: pw,

    },
    host:'brd.superproxy.io',
    port: port,
    rejectUnauthorized: false,

  };

  try {
    const response = await axios.get(url, options);
    const $ = cheerio.load(response.data);
    
    //extract product title
    const title = $('#productTitle').text().trim();

    const currentPrice = extractPrice(
      $('.priceToPay span.a-price-whole'),
      $('.a.size.base.a-color-price'),
      $('.a-button-selected .a-color-base'),
    );

    const originalPrice = extractPrice(
      $('#priceblock_ourprice'),
      $('.a-price.a-text-price span.a-offscreen'),
      $('#listPrice'),
      $('#priceblock_dealprice'),
      $('.a-size-base.a-color-price')
    );

    const outOfStock = $('#availability span').text().trim().toLowerCase() === "currently unavailable";

    const images = $('#imgBlkFront').attr('data-a-dynamic-image') ||
    $('#landingImage').attr('data-a-dynamic-image');
    
    const imageUrls = Object.keys(JSON.parse(images || '{}'));

    console.log(title,currentPrice, originalPrice, outOfStock, imageUrls);
  } catch (error:any) {
    throw new Error(`Failed to scrape product: ${error.message}`);
    
  }
};