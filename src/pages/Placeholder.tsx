import React from "react";

const Placeholder = ({ title }: { title: string }) => (
  <div className="min-h-screen flex flex-col items-center justify-center">
    <h1 className="text-4xl font-bold mb-4">{title}</h1>
    <p className="text-lg text-muted-foreground">This is a placeholder page. Content coming soon.</p>
  </div>
);

export default Placeholder;
