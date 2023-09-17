"use client";
import Link from "next/link";
import { Badge } from "./ui/badge";

export default function Pagination({
  pagination,
  title,
}: {
  pagination: { currentPage: number; totalPages: number; perPage: number };
  title: string;
}) {
  return (
    <div className="flex justify-between w-full pr-4 pt-5 pb-4">
      <h3 className="font-bold text-xl tracking-tight">
        {title ?? "some tilte"}
      </h3>
      <div className="flex gap-1">
        {JSON.stringify(pagination)}
        {[...Array(pagination?.totalPages)].map((x, i) => (
          <Link
            href={
              i == 0
                ? "/"
                : "/latest/" +
                  (i + 1) +
                  "/" +
                  pagination.totalPages * pagination.perPage
            }
            key={i}
          >
            <Badge>{i + 1}</Badge>
          </Link>
        ))}
      </div>
    </div>
  );
}
