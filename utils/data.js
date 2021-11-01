import bcrypt from 'bcryptjs'

const data = {
  users: [
    {
      name: 'John',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Jane',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],

  properites: [
    {
      name: 'Property 1',
      slug: 'property-one',
      developer: 'Developer Dubai',
      category: 'Rent',
      image: '/images/p1.jpg',
      isFeatured: true,
      featuredImage: '/images/banner1.jpg',
      rentByMonth: 100,
      rentByYear: 12000,
      type: 'Flat',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: 'A popular shirt',
    },
    {
      name: 'Property 2',
      slug: 'property-two',
      developer: 'Developer Dubai',
      category: 'Sale',
      image: '/images/p2.jpg',
      isFeatured: true,
      featuredImage: '/images/banner2.jpg',
      price: 80000,
      type: 'Banglow',
      rating: 4.2,
      numReviews: 10,
      countInStock: 20,
      description: 'A popular shirt',
    },
    {
      name: 'Property 3',
      slug: 'property-three',
      developer: 'Developer Dubai',
      category: 'Sale',
      image: '/images/p3.jpg',
      price: 90000,
      type: 'Banglow',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: 'Smart looking pants',
    },
    {
      name: 'Property 4',
      slug: 'property-four',
      developer: 'Developer Dubai',
      category: 'Rent',
      image: '/images/p1.jpg',
      isFeatured: true,
      featuredImage: '/images/banner1.jpg',
      rentByMonth: 150,
      rentByYear: 15000,
      type: 'Flat',
      rating: 4.5,
      numReviews: 10,
      countInStock: 20,
      description: 'A popular shirt',
    },
  ],
}

export default data