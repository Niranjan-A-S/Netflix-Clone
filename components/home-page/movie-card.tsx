/* eslint-disable @next/next/no-img-element */
import { IMovieCardProps } from "@/types/component-props";
import { useRouter } from "next/router";
import { FC, memo, useContext } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";
import { FavoriteButton } from "./favorite-button";
import { infoModalContext } from "@/context/info-model-context";

export const MovieCard: FC<IMovieCardProps> = memo(({ movie: { thumbnailUrl, duration, genre, _id } }) => {

    const router = useRouter();
    const { openModal } = useContext(infoModalContext);


    return <div className="group bg-zinc-900 col-span relative h-[12vw]">
        <img
            className="cursor-pointer object-cover transition duration shadow-xl rounded-md group-hover:opacity-90 sm:group-hover:opacity-0 delay-300 w-full h-[12vw]"
            src={thumbnailUrl}
            alt="" />
        <div className="opacity-0 absolute top-0 transition duration-200 z-10 invisible sm:visible delay-300 w-full scale-0 group-hover:scale-110 group-hover:-translate-y-[6vw] group-hover:translate-x-[2vw] group-hover:opacity-100
            ">
            <img
                className="cursor-pointer object-cover transition duration shadow-xl rounded-t-md delay-300 w-full h-[12vw]"
                src={thumbnailUrl}
                alt="Thumbnail" />
            <div className="z-10 bg-zinc-800 p-2 lg:p-4 absolute w-full transition shadow-md rounded-b-md
                ">
                <div className="flex flex-row items-center gap-3">
                    <div className="cursor-pointer w-6 h-6 lg:w-10 lg:h-10 rounded-full bg-white flex items-center justify-center transition hover:bg-neutral-300" onClick={() => router.push(`/watch/${_id}`)}>
                        <BsFillPlayFill size={30} />
                    </div>
                    <FavoriteButton movieId={_id} />
                    <div
                        onClick={() => openModal(_id)}
                        className="cursor-pointer ml-auto group/item w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex items-center justify-center transition hover:border-neutral-300">
                        <BiChevronDown size={30} className="text-white group-hover/item:text-neutral-300" />
                    </div>
                </div>
                <p className="text-green-400 font-semibold mt-4">
                    New <span className="text-white">2023</span>
                </p>
                <div className="flex flex-row mt-4 gap-2 items-center">
                    <p className="text-white text-[14px]">{duration}</p>
                </div>
                <div className="flex flex-row mt-4 gap-2 items-center">
                    <p className="text-white text-[14px]">{genre}</p>
                </div>
            </div>
        </div>
    </div>;
});