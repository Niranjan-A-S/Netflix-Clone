'use client';

import { useFavorites } from '@/hooks/use-favorites';
import React, { memo } from 'react';
import { MovieList } from './movie-list';

export const FavoriteList: React.FC = memo(() => {
    const { data: movies = [], error } = useFavorites();
    return <MovieList data={movies} title="Favorites" hasError={!!error} />;
});

