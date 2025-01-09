import Link from "next/link";
export default function Home() {
  return (
    <section className="container mx-auto flex flex-col lg:flex-row py-16 p-4 items-center">
      <div className="flex flex-col gap-4">
        <h1 className="text-5xl font-bold">
          Get exciting news update at your finger tips
        </h1>
        <p className="text-gray-500 text-2xl">
          Get all the trending news happening around you 24hrs. never miss an
          update
        </p>
        <Link className="" href={"/news"}>
          <button className="border p-2 bg-red-500 text-white cursor-pointer rounded-md border-red">
            Try for free
          </button>
        </Link>
      </div>
      <div>
        <img src="/hero.png" alt="." />
      </div>
    </section>
  );
}
