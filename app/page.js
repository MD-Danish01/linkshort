import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section>
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
          <h1 className="md:text-6xl text-2xl font-bold">Welcome to URL Shortener</h1>
          <p className="mt-3 md:text-2xl text-xl">Shorten your links easily and quickly</p>
          <Link href={"/shorten"}>
            <button className="mt-6 px-6 py-3 bg-sky-500 text-white rounded-2xl">
              Get Started
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
