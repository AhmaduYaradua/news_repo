import Link from "next/link";
import React from "react";

function About() {
  return (
    <div>
      <h1>Aboout</h1>
      <Link href={"/about/story"}>Our story</Link>
    </div>
  );
}

export default About;
