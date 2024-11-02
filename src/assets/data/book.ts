import { Book, UserBook } from '../../types/book'
// Sample books
export const sampleBooks: Book[] = [
  {
    id: '1',
    title: 'The Enchanted Forest',
    author: 'Alice Green',
    description: 'A fantasy novel about magic and adventure.',
    genre: 'Fantasy',
    coverImage: 'cover1.jpg',
    publicationDate: new Date('2023-01-10'),
    totalChapters: 100,
  },
  {
    id: '2',
    title: 'Science of the Stars',
    author: 'Dr. Starfield',
    description: 'An exploration into the science of astronomy.',
    genre: 'Science',
    coverImage: 'cover2.jpg',
    publicationDate: new Date('2022-07-15'),
    totalChapters: 100,
  },
  {
    id: '3',
    title: 'Historical Heroes',
    author: 'John Legends',
    description: 'Biographies of historical heroes.',
    genre: 'History',
    coverImage: 'cover3.jpg',
    publicationDate: new Date('2021-04-21'),
    totalChapters: 100,
  },
  {
    id: '4',
    title: 'The Mystery House',
    author: 'Mina Shadow',
    description: 'A thrilling mystery set in an abandoned house.',
    genre: 'Mystery',
    coverImage: 'cover4.jpg',
    publicationDate: new Date('2022-10-30'),
    totalChapters: 100,
  },
  {
    id: '5',
    title: 'Cooking 101',
    author: 'Chef Laura',
    description: "A beginner's guide to cooking.",
    genre: 'Cooking',
    coverImage: 'cover5.jpg',
    publicationDate: new Date('2020-06-05'),
    totalChapters: 100,
  },
  {
    id: '6',
    title: 'Mindfulness Guide',
    author: 'Zen Master',
    description: 'A guide to mindfulness and meditation.',
    genre: 'Self-help',
    coverImage: 'cover6.jpg',
    publicationDate: new Date('2023-03-18'),
    totalChapters: 100,
  },
  {
    id: '7',
    title: 'Journey to Mars',
    author: 'Neil Galaxy',
    description: "A sci-fi novel about humanity's journey to Mars.",
    genre: 'Science Fiction',
    coverImage: 'cover7.jpg',
    publicationDate: new Date('2024-02-12'),
    totalChapters: 100,
  },
  {
    id: '8',
    title: 'The Art of Painting',
    author: 'Lisa DaVinci',
    description: 'A comprehensive guide to painting techniques.',
    genre: 'Art',
    coverImage: 'cover8.jpg',
    publicationDate: new Date('2021-11-03'),
    totalChapters: 100,
  },
  {
    id: '9',
    title: 'The Lost Island',
    author: 'Max Explorer',
    description: 'A mystery novel about a lost island.',
    genre: 'Adventure',
    coverImage: 'cover9.jpg',
    publicationDate: new Date('2019-05-25'),
    totalChapters: 100,
  },
  {
    id: '10',
    title: 'Quantum Reality',
    author: 'Eve Scientist',
    description: 'An introduction to quantum mechanics.',
    genre: 'Physics',
    coverImage: 'cover10.jpg',
    publicationDate: new Date('2020-08-19'),
    totalChapters: 100,
  },
]

// Sample user books with different statuses
export const sampleUserBooks: UserBook[] = [
  {
    id: '1',
    title: 'The Enchanted Forest',
    author: 'Alice Green',
    description: 'A fantasy novel about magic and adventure.',
    genre: 'Fantasy',
    coverImage: 'cover1.jpg',
    publicationDate: new Date('2023-01-10'),
    userId: '1',
    status: 'read',
    readDate: new Date('2023-06-12'),
    rating: 3.7,
    totalChapters: 100,
    read: 10,
  },
  {
    id: '3',
    title: 'Historical Heroes',
    author: 'John Legends',
    description: 'Biographies of historical heroes.',
    genre: 'History',
    coverImage: 'cover3.jpg',
    publicationDate: new Date('2021-04-21'),
    userId: '1',
    status: 'recommended',
    rating: 4.7,
    readDate: new Date('2024-11-02'),
    totalChapters: 100,
    read: 10,
  },
  {
    id: '7',
    title: 'Journey to Mars',
    author: 'Neil Galaxy',
    description: "A sci-fi novel about humanity's journey to Mars.",
    genre: 'Science Fiction',
    coverImage: 'cover7.jpg',
    publicationDate: new Date('2024-02-12'),
    userId: '1',
    status: 'new',
    rating: 0,
    readDate: new Date('2024-06-11'),
    totalChapters: 100,
    read: 10,
  },
]
