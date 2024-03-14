import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
            {/* todo */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                className="w-32 h-auto mb-8"
                src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
                alt="Netflix Logo"
            />
            <h1 className="text-4xl font-bold mb-4">404 - Not Found</h1>
            <p className="text-lg mb-8">The page you are looking for does not exist.</p>
            <Link href="/" className="bg-red-600 text-white py-2 px-6 rounded-md hover:bg-red-700 transition duration-300">Home</Link>
        </div>
    );
}
