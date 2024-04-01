import Category from '../models/categoryModel.js';

const categoriesSeed = [
    {
        name: "Men's Wear",
        slug: "men's-wear",
    },
    {
        name: "Women's Wear",
        slug: "women's-wear",
    },
    {
        name: "Kid's Wear",
        slug: "kid's-wear",
    },
];

const seedCategories = async () => {
    try {
        await Category.insertMany(categoriesSeed);
        console.log('Categories seeded successfully');
    } catch (error) {
        console.error('Error seeding categories:', error);
    }
};

export default seedCategories;
