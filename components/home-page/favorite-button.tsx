import { useCurrentUser } from "@/hooks/use-current-user";
import { useFavorites } from "@/hooks/use-favorites";
import { IFavoriteButtonProps } from "@/types/component-props";
import axios from "axios";
import { FC, memo, useCallback, useMemo } from "react";
import { AiOutlineCheck, AiOutlinePlus } from "react-icons/ai";

export const FavoriteButton: FC<IFavoriteButtonProps> = memo(({ movieId }) => {

    const { mutate: mutateFavorites } = useFavorites();
    const { data: currentUser, mutate } = useCurrentUser();

    const isFavorite = useMemo(() => {
        const list = currentUser?.favoriteIds || [];
        return list.includes(movieId);
    }, [currentUser, movieId]);

    const toggleFavorites = useCallback(async () => {
        let response;
        if (isFavorite) {
            response = await axios.delete('/api/favorite', { data: { movieId } });
        } else {
            response = await axios.post('/api/favorite', { movieId });
        }
        const updatedFavoriteIds = response?.data?.favoriteIds;
        mutate({
            ...currentUser,
            favoriteIds: updatedFavoriteIds
        });

        mutateFavorites();
    }, [currentUser, isFavorite, movieId, mutate, mutateFavorites]);

    const Icon = useMemo(() => isFavorite ? AiOutlineCheck : AiOutlinePlus, [isFavorite]);

    return (
        <div
            onClick={toggleFavorites}
            className="cursor-pointer group/item  w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex items-center justify-center transition hover:border-neutral-300  ">
            <Icon size={25} className="text-white" />
        </div>
    );
});