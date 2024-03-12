'use client';

import { images } from '@/constants';
import { IUserCardProps } from '@/types/component-props';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useCallback, useMemo } from 'react';

export const UserCard: React.FC<IUserCardProps> = ({ name }) => {
    const router = useRouter();
    const imgSrc = useMemo(() => images[Math.floor(Math.random() * 4)], []);

    const selectProfile = useCallback(() => {
        router.push('/');
    }, [router]);

    return (
        <div className="group flex-row w-44 mx-auto" onClick={selectProfile}>
            <div className="w-44 h-44 rounded-md flex items-center justify-center border-2 border-transparent group-hover:cursor-pointer group-hover:border-white overflow-hidden">
                <Image
                    draggable={false}
                    className="w-max h-max object-contain"
                    src={imgSrc}
                    alt="profile"
                    width={130}
                    height={130} />
            </div>
            <div className="mt-4 text-gray-400 text-2xl text-center group-hover:text-white">{name}</div>
        </div>
    );
};
