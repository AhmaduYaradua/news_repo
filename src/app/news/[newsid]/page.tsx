import { NewsCardProps } from "@/components/news/NewsCard";
import React from "react";

function Page({ newsHeadLine }: NewsCardProps) {
  return (
    <div>
      <h1>{newsHeadLine}</h1>
    </div>
  );
}

export default Page;
