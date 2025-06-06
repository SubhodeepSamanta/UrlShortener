import { generateNanoId } from "../utils/helper.js";
import urlSchema from "../models/shortUrl.model.js";
import { saveShortUrl } from "../dao/shortUrl.js";

export const createShortUrlWithoutUser = async (url) => {
  const shortUrl = generateNanoId(7);
  if (!shortUrl) {
    throw new Error("Short Url Not Generated");
  }
  await saveShortUrl(shortUrl, url);
  return shortUrl;
};

export const createShortUrlWithUser = async (url) => {
  const shortUrl = generateNanoId(7);
  await saveShortUrl(url, shortUrl, userId);
  return shortUrl;
};
