import { Badge } from "@/components/ui/badge";

export default function RightSideBar() {
  return (
    <div className="hidden md:block border-l-2 w-1/4 pt-2 pl-4">
      <div className="flex justify-center items-center h-40 bg-slate-100">
        ADV BANNER
      </div>
      <div className="flex flex-col">
        <h1 className="font-semibold text-lg tracking-tight py-4">
          Popular Tags
        </h1>
        <div className="flex gap-5 flex-wrap">
          <Badge className="bg-slate-500 text-white">s sds</Badge>
          <Badge className="bg-slate-500 text-white">test</Badge>
          <Badge className="bg-slate-500 text-white">sads sads</Badge>
          <Badge className="bg-slate-500 text-white">test</Badge>
          <Badge className="bg-slate-500 text-white">sdds sdsds</Badge>
          <Badge className="bg-slate-500 text-white">test</Badge>
        </div>
      </div>
      <div className="flex justify-center items-center h-40 bg-slate-100 mt-4">
        ADV BANNER
      </div>
    </div>
  );
}
