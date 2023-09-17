export interface Root {
    latestLyrics: LatestLyric[]
  }
  
  export interface LatestLyric {
    movie: Movie
    song: Song
    lyrics: Lyrics
    category: Category
    tags: Tag[]
    user_comments: UserComment[]
  }
  
  export interface Movie {
    title: string
    release_date: string
    director: string
    genre: string
    poster: string
  }
  
  export interface Song {
    title: string
    artist: string
    duration: string
  }
  
  export interface Lyrics {
    lyrics_text: string
    language: string
  }
  
  export interface Category {
    category_name: string
  }
  
  export interface Tag {
    tag_name: string
  }
  
  export interface UserComment {
    user_id: number
    username: string
    comment_text: string
    timestamp: string
  }
  