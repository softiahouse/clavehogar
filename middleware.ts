import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const isCrmPage = pathname.startsWith("/crm") && !pathname.startsWith("/crm/login");
  const isCrmApi = pathname.startsWith("/api/crm") && !pathname.startsWith("/api/crm/auth");

  if (isCrmPage || isCrmApi) {
    const session = req.cookies.get("crm-session")?.value;
    const expected = process.env.CRM_SESSION_TOKEN;
    if (!expected || session !== expected) {
      if (isCrmApi) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }
      return NextResponse.redirect(new URL("/crm/login", req.url));
    }
  }

  return NextResponse.next();
}

export const config = { matcher: ["/crm/:path*", "/api/crm/:path*"] };
