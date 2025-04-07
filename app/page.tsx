"use client";

import { useState } from "react";
import Book from "@/components/Book";
import Image from "next/image";

export default function Home() {
  const [book, setBook] = useState(false);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-color-2 text-6xl font-title font-medium mb-8">
        BookFinder
      </h1>

      {book ? (
        <Book />
      ) : (
        <Image
          src="/progress_activity.svg"
          width={24}
          height={24}
          alt="Process activity icon"
          className="animate-spin mb-8"
        />
      )}

      <button
        className="cursor-pointer bg-color-2 text-color-1 text-sm font-sans rounded-lg uppercase p-4 hover:opacity-80 transition-all transition-discrete"
        onClick={() => setBook((prev) => !prev)}
      >
        Gerar livro aleatório
      </button>
    </div>
  );
}
