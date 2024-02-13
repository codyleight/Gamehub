const db = require('./connection');
const { User, Product, Category } = require('../models');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  await cleanDB('Category', 'categories');
  await cleanDB('Product', 'products');
  await cleanDB('User', 'users');

  const categories = await Category.insertMany([
    { name: 'RPG' },
    { name: 'Horror' },
    { name: 'MMO' },
    { name: 'Moba' },
    { name: 'Shooter' }
  ]);

  console.log('categories seeded');

  const products = await Product.insertMany([
    {
      name: 'Zelda',
      description:
        'Classic Adventure of Zelda!',
      image: 'zelda1.jpg',
      category: categories[0]._id,
      price: 2.99,
      quantity: 500
    },
    {
      name: 'League of Legends',
      description:
        'Toxic',
      image: 'League.jpg',
      category: categories[3]._id,
      price: 1.99,
      quantity: 500
    },
    {
      name: 'Zombies',
      category: categories[1]._id,
      description:
        'Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.',
      image: 'zombie.jpg',
      price: 7.99,
      quantity: 20
    },
    {
      name: 'Spooky',
      category: categories[1]._id,
      description:
        'Spooky',
      image: 'ghost.png',
      price: 3.99,
      quantity: 50
    },
    {
      name: 'Phasmaphobia',
      category: categories[1]._id,
      description:
        'Scary Ghost',
      image: 'phasmo.png',
      price: 14.99,
      quantity: 100
    },
    {
      name: 'World of Warcraft',
      category: categories[2]._id,
      description:
        'Nerd',
      image: 'wow.png',
      price: 399.99,
      quantity: 30
    },
    {
      name: 'OldSchool Runescape',
      category: categories[2]._id,
      description:
        'pog',
      image: 'osrs.png',
      price: 199.99,
      quantity: 30
    },
    {
      name: 'Warcraft 3',
      category: categories[3]._id,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
      image: 'wow.png',
      price: 9.99,
      quantity: 100
    },
    {
      name: 'Call of Duty',
      category: categories[4]._id,
      description: 'Ut vulputate hendrerit nibh, a placerat elit cursus interdum.',
      image: 'zombie.jpg',
      price: 1.99,
      quantity: 1000
    },
    {
      name: 'Valorant',
      category: categories[4]._id,
      description:
        'Sed a mauris condimentum, elementum enim in, rhoncus dui. Phasellus lobortis leo odio, sit amet pharetra turpis porta quis.',
      image: 'valo.png',
      price: 2.99,
      quantity: 1000
    },
    {
      name: 'CSGO',
      category: categories[4]._id,
      description:
        'Vestibulum et erat finibus erat suscipit vulputate sed vitae dui. Ut laoreet tellus sit amet justo bibendum ultrices. Donec vitae felis vestibulum, congue augue eu, finibus turpis.',
      image: 'csgo.png',
      price: 7.99,
      quantity: 100
    },
    {
      name: '007',
      category: categories[4]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: '007.png',
      price: 9.99,
      quantity: 600
    }
  ]);

  console.log('products seeded');

  await User.create({
    firstName: 'cody',
    lastName: 'thompson',
    email: 'test@gmail.com',
    password: '123456',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Bijan',
    lastName: 'thompson',
    email: 'bijan@gmail.com',
    password: '123456'
  });

  console.log('users seeded');

  process.exit();
});
