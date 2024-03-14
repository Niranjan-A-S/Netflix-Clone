'use client'

import React, { memo } from 'react';

import { IMovieListProps } from '@/types/component-props';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import { MovieCard } from './movie-card';

export const MovieList: React.FC<IMovieListProps> = memo(({ data, title, hasError }) => {

  if (hasError) {
    return (
      <div className="px-4 md:px-12 mt-4 justify-center flex align-center gap-2">
        <ExclamationTriangleIcon className="h-7 w-7 text-red-500 text-center" />
        <p className="text-red-500 text-lg font-semibold">{`Failed loading ${title} movies`}</p>
      </div>
    );
  }

  if (data?.length) return (
    <div className="px-4 md:px-12 mt-4 space-y-8">
      <div>
        <p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">{title}</p>
        <div className="grid grid-cols-4 gap-2">
          {data.map((movie) => (
            <MovieCard key={movie.id} data={movie} />
          ))}
        </div>
      </div>
    </div >
  )
})

