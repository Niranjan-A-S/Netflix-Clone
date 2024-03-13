import { auth } from '@/auth';
import { Navbar } from '@/components/navbar';

export default async function HomePage() {

    const session = await auth();
    return <>
        <Navbar />
    </>;
}
