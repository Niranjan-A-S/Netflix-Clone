import { BillBoard } from '@/components/home/bill-board';
import { TrendingList } from '@/components/home/trending-list';
import { Navbar } from '@/components/navbar';

export default async function HomePage() {

    return <>
        <Navbar />
        <BillBoard />
        <div className="pb-40">
            <TrendingList />
        </div>
    </>;
}
