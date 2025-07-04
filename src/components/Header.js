import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-green-600 text-white p-4 text-center">
      <Link to="/" className="text-2xl font-bold">
        What's For Dinner?
      </Link>
    </header>
  );
}
