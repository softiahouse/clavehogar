import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith("/crm") && !pathname.startsWith("/crm/login")) {
    const session = req.cookies.get("crm-session")?.value;
    if (session !== process.env.CRM_SESSION_TOKEN) {
      return NextResponse.redirect(new URL("/crm/login", req.url));
    }
  }

  return NextResponse.next();
}

export const config = { matcher: ["/crm/:path*"] };
