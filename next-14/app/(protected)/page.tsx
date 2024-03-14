import { BillBoard } from '@/components/home/bill-board';
import { FavoriteList } from '@/components/home/favorite-list';
import { TrendingList } from '@/components/home/trending-list';
import { Navbar } from '@/components/navbar';

export default async function HomePage() {

    return <>
        <Navbar />
        <BillBoard />
        <div className="pb-40">
            <TrendingList />
            <FavoriteList />
        </div>
    </>;
}
