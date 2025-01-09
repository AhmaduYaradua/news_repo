// import { Card } from "antd";
import React from "react";
import Link from "next/link";

// const { Meta } = Card;

export interface NewsCardProps {
  newsImageUrl: string;
  newsHeadLine: string;
  newsUrl: string;
}

function NewsCard({ newsImageUrl, newsHeadLine }: NewsCardProps) {
  return (
    <section>
      {/* <div>
        <Card
          hoverable
          style={{ width: 240 }}
          cover={<img alt="example" src={newsImageUrl} />}
        >
          <Meta title={newsHeadLine} description="" />
        </Card>
      </div> */}
      <Link href={`news/${newsHeadLine}`}>
        <div>
          <img
            className="w-[500px] h-[200px] object-cover"
            src={
              newsImageUrl ||
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNNLEL-qmmLeFR1nxJuepFOgPYfnwHR56vcw&s"
            }
            alt="."
          />
          {/* <a href={newsUrl} target="_blank"> */}
          <h2 className="text-lg font-semibold hover:underline cursor-pointer">
            {newsHeadLine === "[Removed]"
              ? "No headline available"
              : newsHeadLine.slice(0, 70)}
            {newsHeadLine.length > 95 && "..."}
          </h2>
          {/* </a> */}
        </div>
      </Link>
    </section>
  );
}

export default NewsCard;
