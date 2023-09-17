import Pagination from "@/components/Pagination";
import Search from "@/components/Search";
import SongCard from "@/components/SongCard";
import { LatestLyric } from "./types/latestLyrics";

async function getData() {
  return await fetch("https://lyric-wine.vercel.app/api/lyrics/latest", {
    cache: "no-store",
  })
    .then((data) => data.json())
    .then((res) => res?.data);
}

export default async function Home() {
  const data = await getData();
  return (
    <div className="flex flex-col">
      <Search />
      <Pagination pagination={data?.pagination} title="Latest Lyrics" />
      <main className="w-full transition pt-2 pr-4 h-auto grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
        {data?.latestLyrics.map((lyrics: LatestLyric, key: number) => (
          <>
            {key % 2 == 0 && (
              <div className="col-span-1 sm:col-span-2 md:col-span-2">
                <div className="bg-gray-300 p-8 flex justify-center items-center font-bold">
                  ADV BANNER
                </div>
              </div>
            )}
            <SongCard key={lyrics?.lyrics.lyrics_text} data={lyrics} />
          </>
        ))}
      </main>
      <Pagination pagination={data?.pagination} title="Latest Lyrics" />
    </div>
  );
}
