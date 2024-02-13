'use server';
import { scrapeAmazonProduct } from '../scraper';
import { connectToDB } from '../mongoose';
import Product from '../models/product.model';
import { getLowestPrice, getHighestPrice, getAveragePrice } from '../utils';

export async function scrapeAndStoreProduct(productUrl: string) {
  if (!productUrl) {
    return;
  }
  try {
    connectToDB();
    const scrapedProduct = await scrapeAmazonProduct(productUrl);
    if (!scrapedProduct) {
      return;
    }

    //add the scraped product to Mongo so we can track price changes with cron jobs.
    let product = scrapedProduct;
    const existingProduct = await Product.findOne({ url: scrapedProduct.url });
    if (existingProduct) {
      const updatedPriceHistory: any = [
        ...existingProduct.priceHistory,
        { price: scrapedProduct.currentPrice }
      ];
      product = {
        ...scrapedProduct,
        priceHistory: updatedPriceHistory,
        lowestPrice: getLowestPrice(updatedPriceHistory),
        highestPrice: getHighestPrice(updatedPriceHistory),
        averagePrice: getAveragePrice(updatedPriceHistory)
      };
    }
  } catch (error: any) {
    throw new Error(`Failed to create/update product: ${error.message}`);
  }
} // Path: lib/actions/index.ts
