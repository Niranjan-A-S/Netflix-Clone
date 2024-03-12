'use client';

import { DEFAULT_USER_IMAGE } from '@/constants';
import { useUser } from '@/hooks/use-user';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

export const UserCard: React.FC = () => {
    const router = useRouter();
    const user = useUser();
    const selectProfile = useCallback(() => {
        router.push('/');
    }, [router]);

    return (
        <div className="group flex-row w-44 mx-auto" onClick={selectProfile}>
            <div className="w-44 h-44 rounded-md flex items-center justify-center border-2 border-transparent group-hover:cursor-pointer group-hover:border-white overflow-hidden">
                <Image
                    draggable={false}
                    className="w-max h-max object-contain"
                    src={user?.image ?? DEFAULT_USER_IMAGE}
                    alt="profile"
                    width={130}
                    height={130}
                    priority
                />
            </div>
            <div className="mt-4 text-gray-400 text-2xl text-center group-hover:text-white">{user?.name || 'Guest'}</div>
        </div>
    );
};
