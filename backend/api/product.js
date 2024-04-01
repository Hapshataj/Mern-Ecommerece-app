import mongoose from 'mongoose';
import productModel from '../models/productModel.js';
import categoryModel from '../models/categoryModel.js'; // Import the category model
import fs from 'fs';
import path from 'path';
import slugify from 'slugify';

// Function to fetch category ID by name
const getCategoryIdByName = async (categoryName) => {
    try {
        const category = await categoryModel.findOne({ name: categoryName });
        return category ? category._id : null;
    } catch (error) {
        console.error('Error fetching category ID:', error);
        return null;
    }
};

const Products = [
    // Men's Wear
    {
        name: "Men's Jacket",
        description: "Stylish jacket for men",
        price: 99.99,
        category: "Men\'s Wear",
        quantity: 10,
        shipping: true,
        featured: true,
        bestSeller: false,
        slug: slugify("Men's Jacket"),
        photoFilename: "Men-jacket1.jpg",
    },
    {
        name: "Men's Trousers",
        description: "Classic trousers for men",
        price: 79.99,
        category: "Men's Wear",
        quantity: 15,
        shipping: false,
        featured: false,
        bestSeller: true,
        slug: slugify("Men's Trousers"),
        photoFilename: "Men-trousers1.jpg",
    },
    {
        name: "Men's Trousers",
        description: "Fancy trousers for men",
        price: 59.99,
        category: "Men's Wear",
        quantity: 15,
        shipping: false,
        featured: false,
        bestSeller: true,
        slug: slugify("Men's Trousers"),
        photoFilename: "Men-trousers2.jpg",
    },
    {
        name: "Men's Jacket",
        description: "Stylish Jacket for men",
        price: 79.99,
        category: "Men's Wear",
        quantity: 15,
        shipping: true,
        featured: true,
        bestSeller: false,
        slug: slugify("Men's Jacket"),
        photoFilename: "Men-jacket3.jpg",
    },
    {
        name: "Men's Losefir joggers",
        description: "Classic joggers for men",
        price: 79.99,
        category: "Men's Wear",
        quantity: 15,
        shipping: false,
        featured: false,
        bestSeller: true,
        slug: slugify("Men's joggers"),
        photoFilename: "Men-Loosefir joggers.jpg",
    },
    {
        name: "Men's T-shirt",
        description: "Casual tshirt for men",
        price: 49.99,
        category: "Men's Wear",
        quantity: 20,
        shipping: true,
        featured: true,
        bestSeller: false,
        slug: slugify("Men's T-shirt"),
        photoFilename: "Men-tshirt.jpg",
    },
    {
        name: "Men's Jacket",
        description: "Comfortable Coat for men",
        price: 79.99,
        category: "Men's Wear",
        quantity: 15,
        shipping: true,
        featured: true,
        bestSeller: false,
        slug: slugify("Men's Jacket"),
        photoFilename: "Men-jacket2.jpg",
    },
    {
        name: "Men's T-shirt",
        description: "Casual tshirt for men",
        price: 49.99,
        category: "Men's Wear",
        quantity: 20,
        shipping: true,
        featured: true,
        bestSeller: false,
        slug: slugify("Men's T-shirt"),
        photoFilename: "Men-tshirt2.jpg",
    },

    // Women's Wear
    {
        name: "Women's coat",
        description: "Stylish coat for women",
        price: 149.99,
        category: "Women's Wear",
        quantity: 10,
        shipping: false,
        featured: false,
        bestSeller: true,
        slug: slugify("Women's coat"),
        photoFilename: "Women Coat.jpg",
    },
    {
        name: "Women's Printed T-shirt",
        description: "Elegant T-shirt for women",
        price: 129.99,
        category: "Women's Wear",
        quantity: 8,
        shipping: true,
        featured: false,
        bestSeller: true,
        slug: slugify("Women's T-shirt"),
        photoFilename: "Printed T-shirt.jpg",
    },

    {
        name: "Women's jacket",
        description: "Stylish short denim jacket for women",
        price: 59.99,
        category: "Women's Wear",
        quantity: 12,
        shipping: true,
        featured: true,
        bestSeller: false,
        slug: slugify("Women's jacket"),
        photoFilename: "short denim jacket.jpg",
    },
    {
        name: "Women's coat",
        description: "Stylish coat for women",
        price: 149.99,
        category: "Women's Wear",
        quantity: 10,
        shipping: false,
        featured: false,
        bestSeller: true,
        slug: slugify("Women's coat"),
        photoFilename: "women coat1.jpg",
    },
    {
        name: "Women's jeans",
        description: "Fashionable jeans for women",
        price: 89.99,
        category: "Women's Wear",
        quantity: 10,
        shipping: true,
        featured: false,
        bestSeller: true,
        slug: slugify("Women's jeans"),
        photoFilename: "women jean1.jpg",
    },
    {
        name: "Women's jeans",
        description: "Comfortable jeans for women",
        price: 89.99,
        category: "Women's Wear",
        quantity: 10,
        shipping: true,
        featured: false,
        bestSeller: true,
        slug: slugify("Women's jeans"),
        photoFilename: "women jean2.jpg",
    },
    {
        name: "Women's jumpsuit",
        description: "Black jusmsuit for women",
        price: 89.99,
        category: "Women's Wear",
        quantity: 10,
        shipping: true,
        featured: false,
        bestSeller: true,
        slug: slugify("Women's jumpsuit"),
        photoFilename: "women jumpsuit.jpg",
    },
    {
        name: "Women's jersy",
        description: "Stylish jersey top for women",
        price: 149.99,
        category: "Women's Wear",
        quantity: 10,
        shipping: false,
        featured: false,
        bestSeller: true,
        slug: slugify("Women's jersey"),
        photoFilename: "Woemn jersey top.jpg",
    },

    {
        name: "Women's Sports Jackett",
        description: "Stylish sports jacket for women",
        price: 59.99,
        category: "Women's Wear",
        quantity: 12,
        shipping: true,
        featured: true,
        bestSeller: false,
        slug: slugify("Women's Sports Jackett"),
        photoFilename: "Women Sports Jacket.jpg",
    },
    // Kid's Wear
    {
        name: "Kid's Jacket",
        description: "Warm jacket for kids",
        price: 69.99,
        category: "Kid's Wear",
        quantity: 15,
        shipping: true,
        featured: false,
        bestSeller: true,
        slug: slugify("Kid's Jacket"),
        photoFilename: "kids jacket.jpg",
    },

    {
        name: "Kid's Shirt",
        description: "Cool shirt for kids",
        price: 29.99,
        category: "Kid's Wear",
        quantity: 20,
        shipping: true,
        featured: true,
        bestSeller: false,
        slug: slugify("Kid's Shirt"),
        photoFilename: "kids shirt.jpg",
    },
    {
        name: "Kid's Jeans",
        description: "Stylish jeans for kids",
        price: 49.99,
        category: "Kid's Wear",
        quantity: 18,
        shipping: true,
        featured: true,
        bestSeller: false,
        slug: slugify("Kid's Jeans"),
        photoFilename: "kids1.jpg",
    },
    {
        name: "Kid's Trousers",
        description: "Stylish 3 trousers for kids",
        price: 58.99,
        category: "Kid's Wear",
        quantity: 18,
        shipping: true,
        featured: true,
        bestSeller: false,
        slug: slugify("Kid's trousers"),
        photoFilename: "kids3.jpg",
    },
    {
        name: "Kid's night waer",
        description: "Cozy night waer for kids",
        price: 39.99,
        category: "Kid's Wear",
        quantity: 25,
        shipping: true,
        featured: false,
        bestSeller: true,
        slug: slugify("Kid's night wear"),
        photoFilename: "kid night.jpg",
    },
    {
        name: "Kid's Trouser",
        description: "Stylish jeans for kids",
        price: 49.99,
        category: "Kid's Wear",
        quantity: 18,
        shipping: true,
        featured: true,
        bestSeller: false,
        slug: slugify("Kid's Trouser"),
        photoFilename: "kid4.jpg",
    },
    {
        name: "Kid's Jacket",
        description: "Warm jacket for kids",
        price: 69.99,
        category: "Kid's Wear",
        quantity: 15,
        shipping: true,
        featured: false,
        bestSeller: true,
        slug: slugify("Kid's Jacket"),
        photoFilename: "kids jacket2.jpg",
    },
    {
        name: "Kid's Jeans",
        description: "Comfortable jeans for kids",
        price: 49.99,
        category: "Kid's Wear",
        quantity: 18,
        shipping: true,
        featured: true,
        bestSeller: false,
        slug: slugify("Kid's Jeans"),
        photoFilename: "kids2.jpg",
    },
    // Additional Products
    {
        name: "Women's coat",
        description: "Stylish top for women",
        price: 39.99,
        category: "Women's Wear",
        quantity: 15,
        shipping: true,
        featured: true,
        bestSeller: false,
        slug: slugify("Women's coat"),
        photoFilename: "Women trench coat.jpg",
    },
    {
        name: "Men's tie",
        description: "Casual tie for men",
        price: 34.99,
        category: "Men's Wear",
        quantity: 20,
        shipping: true,
        featured: true,
        bestSeller: false,
        slug: slugify("Men's tie"),
        photoFilename: "tie1.jpg",
    },


];


const seedProducts = async () => {
    try {
        await productModel.deleteMany({});

        // Loop through each product and seed it
        for (const productData of Products) {
            const { category: categoryName, photoFilename, ...productInfo } = productData;

            // Fetch the category ID for the current product
            const categoryId = await getCategoryIdByName(categoryName);

            // If category ID is found, assign it to the product and seed the product
            if (categoryId) {
                productInfo.category = categoryId;
                const Product = new productModel(productInfo);

                if (photoFilename) {
                    const imagesDir = '../backend/images'; // Change this to the actual path
                    const photoPath = path.join(imagesDir, photoFilename);
                    Product.photo.data = fs.readFileSync(photoPath);
                    Product.photo.contentType = 'image/jpeg';
                }

                await Product.save();
            } else {
                console.error(`Category '${categoryName}' not found for product '${productInfo.name}'`);
            }
        }

        console.log('Products seeded successfully');
    } catch (error) {
        console.error('Error seeding products:', error);
    }
};

export default seedProducts;
