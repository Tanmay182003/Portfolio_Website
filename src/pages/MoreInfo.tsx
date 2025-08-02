import React from "react";
import { Link } from "react-router-dom";

const MoreInfo = () => (
  <div className="min-h-screen flex flex-col items-center justify-center">
    <h1 className="text-5xl font-bold mb-4 text-primary">404</h1>
    <p className="text-2xl font-semibold mb-2">Oops! Page not found</p>
    <Link to="/" className="mt-6 px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary-glow transition-colors">
      Return to Home
    </Link>
  </div>
);

export default MoreInfo;
