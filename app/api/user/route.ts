import { auth } from '@/auth';
import { NextResponse } from 'next/server';

export const GET = async () => {
    try {
        const session = await auth();
        if (!session || !session.user) return new NextResponse('Unauthorized', { status: 401 });

        return NextResponse.json(session.user);
    } catch (error) {
        return new NextResponse('Session not found', { status: 401 });
    }
};
