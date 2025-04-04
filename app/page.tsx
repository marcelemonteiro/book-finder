"use client";

import { useState } from "react";
import Book from "@/components/Book";

export default function Home() {
  const [book, setBook] = useState(false);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-color-2 text-6xl font-title font-medium mb-8">
        BookFinder
      </h1>

      {book && <Book />}

      <button
        className="cursor-pointer bg-color-2 text-color-1 text-sm font-sans rounded-lg uppercase p-4 hover:opacity-80 transition-all transition-discrete"
        onClick={() => setBook((prev) => !prev)}
      >
        Gerar livro aleatório
      </button>
    </div>
  );
}
