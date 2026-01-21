"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

const Shorten = () => {
  const [url, seturl] = useState("");
  const [shorturl, setshorturl] = useState("");
  const [generated, setgenerated] = useState("");
  const [copied, setCopied] = useState(false);

  const generate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      longUrl: url,
      shortCode: shorturl,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setgenerated(`${process.env.NEXT_PUBLIC_BASE_URL}/${result.shortCode}`);
        seturl("");
        setshorturl("");
      })
      .catch((error) => console.error(error));
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generated);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-50">
      <h1 className="md:text-4xl text-2xl font-bold text-gray-900 mb-8">
        Generate your short URLs
      </h1>
      <div className="bg-white p-8 rounded-lg shadow-md space-y-4 w-96">
        <input
          type="text"
          value={url}
          placeholder="Enter your long URL here"
          className="border-2 border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:border-sky-500 transition"
          onChange={(e) => seturl(e.target.value)}
        />
        <input
          type="text"
          value={shorturl}
          placeholder="Enter your prefered URL"
          className="border-2 border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:border-sky-500 transition"
          onChange={(e) => setshorturl(e.target.value)}
        />
        <button
          disabled={!url || !shorturl}
          onClick={generate}
          className="w-full px-4 py-2 bg-sky-500 text-white rounded-lg font-semibold hover:bg-sky-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {generated ? "Generating..." : "Shorten"}
        </button>
        {generated && (
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <code className="block break-all text-green-600 mb-2">
              Your shortened URL: <br />
              <Link
                target="_blank"
                href={generated}
                className="hover:underline"
              >
                {generated}
              </Link>
            </code>
            <button
              onClick={copyToClipboard}
              className="flex items-center gap-2 mt-2 px-3 py-1.5 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700 transition"
            >
              <Image src="/copy.svg" alt="Copy" width={16} height={16} />
              {copied ? "Copied!" : "Copy URL"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shorten;
