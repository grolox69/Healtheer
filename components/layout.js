import Head from 'next/head';
import Sidebar from './Sidebar';
import Header from './Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Layout({ children }) {
    return (
        <div className="min-h-full">
            <Head>
                <title>Healtheer</title>
                <link rel="icon" href="/favi.png" />
            </Head>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <Sidebar />
            <div className="lg:pl-64 flex flex-col flex-1 ">
                <Header />
                <main className="flex-1 p-6">
                    { children }
                </main>
            </div>
        </div>
        
    )
}