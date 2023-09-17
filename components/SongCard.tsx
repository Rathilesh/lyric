"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Heart, UserCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useUser } from "@clerk/nextjs";

export default function SongCard({ data }: any) {
  const { isLoaded, isSignedIn, user } = useUser();

  return (
    <Card className="h-30 ">
      <CardHeader>
        <CardTitle>{data.song.title}</CardTitle>
        <CardDescription>
          <div className="flex flex-wrap h-5 items-center space-x-4 text-sm pb-2">
            <div>Movie : {data.movie.title}</div>
            <Separator orientation="vertical" />
            <div>Artist : {data.song.artist}</div>
            <Separator orientation="vertical" />
            <div>Duration : {data.song.duration} Minutes</div>
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex w-full">
          <Image
            src="https://loremflickr.com/640/360"
            alt="movie poster"
            width="500"
            height="500"
            sizes="100"
            objectFit="fill"
            layout="contain"
          />
        </div>
        <p className="pt-2">
          {data.tags.map((tag: { tag_name: string }) => (
            <Badge key={tag.tag_name} variant="outline">
              {tag.tag_name}
            </Badge>
          ))}
        </p>
      </CardContent>
      <CardFooter className="flex justify-between">
        {!isLoaded || !isSignedIn ? (
          <Button
            size="icon"
            variant="outline"
            title="Please login for adding favorites"
          >
            <UserCircle2 className="h-4 w-4" />
          </Button>
        ) : (
          <Button size="icon" variant="outline" title="Add to Favorites">
            <Heart className="h-4 w-4" />
          </Button>
        )}

        <Button size={"sm"}>Click to View</Button>
      </CardFooter>
    </Card>
  );
}
