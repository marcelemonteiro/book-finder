import Image from "next/image";

export default function Book() {
  return (
    <div className="md:flex md:gap-4 md:items-center p-4 mb-8 max-w-2xl bg-amber-100">
      <Image src="/book_cover.png" width={150} height={150} alt="Book cover" />

      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-medium">Jane Austen - Coleção I</h2>
        <p className="text-sm">Jane Austen . 2020</p>
        <p className="text-sm">
          As obras de Jane Austen retratam personagens complexas da sociedade
          rural georgiana e marcam a crescente do romantismo.
        </p>
      </div>
    </div>
  );
}
