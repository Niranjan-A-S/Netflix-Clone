import { auth } from '@/auth';
import { UserCard } from '@/components/user-card';
import { redirect } from 'next/navigation';

export default async function ProfilesPage() {

    const session = await auth();
    if (!session?.user) return redirect('/auth');

    return (
        <div className="flex items-center h-full justify-center">
            <div className="flex flex-col">
                <h1 className="text-3xl md:text-6xl text-white text-center">Who&#39;s watching?</h1>
                <div className="flex items-center justify-center gap-8 mt-10">
                    <UserCard name={session?.user?.name || 'Guest'} />
                </div>
            </div>
        </div>
    );
};

