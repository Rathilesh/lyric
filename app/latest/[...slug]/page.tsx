import { LatestLyric } from "@/app/types/latestLyrics";
import Pagination from "@/components/Pagination";
import Search from "@/components/Search";
import SongCard from "@/components/SongCard";

async function getData({ slug }: { slug: [] }) {
  return await fetch(
    `https://lyric-wine.vercel.app/api/lyrics/latest/${slug.join("/")}`,
    {
      cache: "no-store",
    }
  )
    .then((data) => data.json())
    .then((res) => res.data);
}

export default async function Home({ params }: { params: { slug: [] } }) {
  const data = await getData(params);
  return (
    <div className="flex flex-col">
      {JSON.stringify(params)}
      <Search />
      <Pagination pagination={data.pagination} title="Latest Lyrics" />
      <main className="w-full transition pt-2 pr-4 h-auto grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
        {data.latestLyrics.map((lyrics: LatestLyric, key: number) => (
          <>
            {key % 2 == 0 && (
              <div className="col-span-1 sm:col-span-2 md:col-span-2">
                <div className="bg-gray-300 p-8 flex justify-center items-center font-bold">
                  ADV BANNER
                </div>
              </div>
            )}
            <SongCard key={lyrics.lyrics.lyrics_text} data={lyrics} />
          </>
        ))}
      </main>
      <Pagination pagination={data.pagination} title="Latest Lyrics" />
    </div>
  );
}
