import { auth } from '@/auth';
import { BillBoard } from '@/components/home/bill-board';
import { Navbar } from '@/components/navbar';

export default async function HomePage() {

    const session = await auth();
    return <>
        <Navbar />
        <BillBoard />
    </>;
}
