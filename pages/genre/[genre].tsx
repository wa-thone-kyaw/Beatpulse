import React from "react";
import { useRouter } from "next/router";
import "../../styles/globals.css";
const GenrePage: React.FC = () => {
  const router = useRouter();
  const { genre } = router.query;

  if (typeof genre !== "string") {
    return null;
  }

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-400 to-purple-600 text-white">
      <h1 className="text-4xl font-bold mb-4">{genre}</h1>
      <p className="text-lg">
        This is the {genre} page content. Coming soon❤️.
      </p>
    </div>
  );
};

export default GenrePage;
