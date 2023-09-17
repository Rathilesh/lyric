import { authMiddleware } from "@clerk/nextjs";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/nextjs/middleware for more information about configuring your middleware

// export default authMiddleware({});

// export const config = {
//   matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
// };

// import { authMiddleware } from "@clerk/nextjs";
export default authMiddleware({
  publicRoutes: ["/","/api/lyrics/latest","/about","/search","/latest","/latest(.)*","/api(.)*","/search/(.)*"]
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)", "/api/lyrics/latest/(.*)"],
};
