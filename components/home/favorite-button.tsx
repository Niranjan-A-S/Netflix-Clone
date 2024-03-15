'use client';

import { HeartIcon as HeartIconOutline } from '@heroicons/react/24/outline';
import axios from 'axios';
import React, { useCallback, useMemo } from 'react';

import { useFavorites } from '@/hooks/use-favorites';
import { useUser } from '@/hooks/use-user';
import { IWatchMovie } from '@/types';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';


const FavoriteButton: React.FC<IWatchMovie> = ({ movieId }) => {
    const { mutate: mutateFavorites } = useFavorites();
    const { data: user, mutate: mutateUser } = useUser();

    const isFavorite = useMemo(() => user?.favoriteIds?.includes(movieId), [user?.favoriteIds, movieId]);

    const toggleFavorites = useCallback(async () => {
        let response;

        if (isFavorite) {
            response = await axios.delete('/api/movies/favorites', { data: { movieId } });
        } else {
            response = await axios.post('/api/movies/favorites', { movieId });
        }
        const updatedFavoriteIds = response?.data?.favoriteIds;

        mutateUser({
            ...user,
            favoriteIds: updatedFavoriteIds
        });
        mutateFavorites();
    }, [isFavorite, mutateUser, user, mutateFavorites, movieId]);

    const Icon = useMemo(() => (isFavorite ? HeartIconSolid : HeartIconOutline), [isFavorite]);

    return (
        <Icon onClick={toggleFavorites} className="cursor-pointer  text-white hover:text-neutral-300 w-7 h-7 lg:w-10 lg:h-10 transition" />
    );
};

export default FavoriteButton;
