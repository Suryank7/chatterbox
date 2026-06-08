import "dotenv/config";
import { v2 as cloudinary } from "cloudinary";
import https from "https";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

async function test() {
  try {
    const result = await cloudinary.uploader.upload("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==");
    console.log("Upload Success:", result.secure_url);
  } catch (error) {
    console.error("Upload Error:", error);
    // If it's a 403, see if we can get the body
    if (error.http_code === 403) {
      console.log("Error object details:", JSON.stringify(error, null, 2));
    }
  }
}
test();
