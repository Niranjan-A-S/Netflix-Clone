'use client';

import { useMovieList } from '@/hooks/use-movie-list';
import React, { memo } from 'react';
import { MovieList } from './movie-list';

export const FavoriteList: React.FC = memo(() => {
    const { data: movies = [], error } = useMovieList();
    return <MovieList data={movies} title="Favorites" hasError={!!error} />;
});

