import React from "react";

export default function page({ params }: { params: { id: string } }) {
  const name = "partho";

  return (
    <div>
      <h1>This is dynamic route {name} {params.id}</h1>
    </div>
  );
}
