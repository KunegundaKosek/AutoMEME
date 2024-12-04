import { Post, Video } from '@/types';

export const POSTS: Post[] = [
  {
    id: 1,
    title: "Getting Started with Web Development",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "2024-03-15",
  },
  {
    id: 2,
    title: "The Future of Technology",
    content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: "2024-03-14",
  },
];

export const VIDEOS: Video[] = [
  {
    id: 1,
    title: "Amazing Nature",
    url: "https://example.com/video1",
    thumbnail: "https://source.unsplash.com/random/800x600?nature",
  },
  {
    id: 2,
    title: "City Life",
    url: "https://example.com/video2",
    thumbnail: "https://source.unsplash.com/random/800x600?city",
  },
];

export const MEMES = [
  {
    id: 1,
    title: "Programming Meme",
    url: "https://source.unsplash.com/random/800x600?coding",
  },
  {
    id: 2,
    title: "Tech Humor",
    url: "https://source.unsplash.com/random/800x600?technology",
  },
];