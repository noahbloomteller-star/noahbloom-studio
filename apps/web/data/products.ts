export type Product = {
  slug: string;
  title: string;
  category: string;
  collection: string;
  description: string;
  details: string;
  variant: string;
  marketplaceUrl: string;
};

export const products: Product[] = [
  {
    slug: "raised-on-rhythm",
    title: "Raised on Rhythm",
    category: "T-Shirt",
    collection: "T-Shirt Designs",
    description:
      "A bold dance-inspired design celebrating rhythm, movement, and individuality.",
    details:
      "Created for people who feel most at home when music starts playing. A graphic statement inspired by dance, rhythm, and creative energy.",
    variant: "rhythm",
    marketplaceUrl: "#",
  },
  {
    slug: "joy-looks-like-dancing",
    title: "Joy Looks Like Dancing",
    category: "T-Shirt",
    collection: "T-Shirt Designs",
    description:
      "A joyful design inspired by movement, creativity, and the simple happiness of dancing.",
    details:
      "A playful expression of joy and movement, created for anyone who believes that happiness can be found in the rhythm of everyday life.",
    variant: "dancing",
    marketplaceUrl: "#",
  },
  {
    slug: "one-step-at-a-time",
    title: "One Step at a Time",
    category: "T-Shirt",
    collection: "T-Shirt Designs",
    description:
      "A thoughtful reminder to keep moving forward, one step and one moment at a time.",
    details:
      "A minimal and thoughtful design inspired by patience, progress, and the idea that every meaningful journey begins with a single step.",
    variant: "step",
    marketplaceUrl: "#",
  },
  {
    slug: "bloom-slowly",
    title: "Bloom Slowly",
    category: "T-Shirt",
    collection: "T-Shirt Designs",
    description:
      "A gentle reminder that growth takes time and every journey unfolds at its own pace.",
    details:
      "A calm and encouraging design inspired by personal growth, patience, and the beauty of becoming who you are meant to be.",
    variant: "bloom",
    marketplaceUrl: "#",
  },
];