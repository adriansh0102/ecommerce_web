
import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from "next-auth";

import { getToken } from 'next-auth/jwt';

export async function middleware(req: NextRequest) {

    const session = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

    if (!session) {
        const requestPage = req.nextUrl.pathname;

        console.log(requestPage);
        
        return NextResponse.redirect(new URL(`/auth/login?page=${requestPage}`, req.url))
    }

    return NextResponse.next();

}

export const config = {
    matcher: [
        '/home/cart',
    ]
}