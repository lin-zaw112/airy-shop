import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};

export function middleware(request) {
  const cookiesList = cookies();
  const hasToken = cookiesList.has("jwt");
  if (!hasToken && request.nextUrl.pathname.startsWith("/Checkout"))
    return NextResponse.rewrite(new URL("/auth/login", request.url));
  //
  // const response = NextResponse.next();
  // const { name: jwt, value: Token } = cookiesList.get("jwt");
  // response.cookies.set(jwt, Token);
  // return response;
}
