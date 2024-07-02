
import { NextApiRequest, NextApiResponse } from "next";

const suggestions = [
  {
    image: "/images/kpop/kpop1.jpg",
    title: "Saturn",
    artist: "SZA",
    isNew: true,
    duration: "2:32",
    bpm: "164 BPM",
    key: "C Maj",
    genres: ["Pop", "Indie", "Rock"],
  },
  {
    image: "/images/kpop/kpop2.jpg",
    title: "One of the girl",
    artist: "The Weeknd",
    isNew: false,
    duration: "2:32",
    bpm: "164 BPM",
    key: "C Maj",
    genres: ["Pop", "Indie", "Rock"],
  },
  {
    image: "/images/kpop/g.jpg",
    title: "Midnight Melody",
    artist: "BTS",
    isNew: true,
    duration: "3:45",
    bpm: "130 BPM",
    key: "G Min",
    genres: ["K-Pop", "Dance", "Electronic"],
  },
  {
    image: "/images/kpop/iu1.jpg",
    title: "Eternal Sunshine",
    artist: "IU",
    isNew: false,
    duration: "4:12",
    bpm: "120 BPM",
    key: "A Maj",
    genres: ["Ballad", "Indie", "Pop"],
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(suggestions);
}
