import { NextApiRequest, NextApiResponse } from "next";

const playlists = [
  {
    id: 1,
    title: "Love IU",
    description: "Melody with playful whispers",
    tracks: 10,
    image: "/images/kpop/iu.jpg",
  },
  {
    id: 2,
    title: "POP Style",
    description: "We are all IU",
    tracks: 12,
    image: "/images/kpop/iu2.jpg",
  },
  {
    id: 3,
    title: "Take me to the Water",
    description: "All day long, all night long",
    tracks: 11,
    image: "/images/kpop/kpop1.jpg",
  },
  {
    id: 4,
    title: "After",
    description: "Cigarettes after sex playlist",
    tracks: 20,
    image: "/images/kpop/kpop2.jpg",
  },
  {
    id: 5,
    title: "G-Dragon ",
    description: "The best playlist",
    tracks: 9,
    image: "/images/kpop/g2.jpg",
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(playlists);
}
