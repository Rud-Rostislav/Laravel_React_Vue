import {Link, Head} from '@inertiajs/react';

export default function Welcome({auth, posts}) {
    return (
        <>
            <Head title="Posts"/>
            <div
                className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center
                bg-gray-100 dark:bg-dots-lighter selection:bg-red-500 selection:text-white">
                <div className="sm:fixed sm:top-0 sm:right-0 p-6 text-end">
                    {auth.user ? (
                        <Link
                            href={route('dashboard')}
                            className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route('login')}
                                className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Log in
                            </Link>

                            <Link
                                href={route('register')}
                                className="ms-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>

                <div className="p-6 text-gray-900 text-center w-2/5">
                    {posts && posts.length > 0 ? (
                        posts.map((post) => (
                            <div key={post.id} style={{
                                border: '1px solid black',
                                padding: '10px',
                                marginBottom: '20px',
                                borderRadius: '10px'
                            }}>
                                <p>{post.id}</p>
                                <p>{post.title}</p>
                                <p>{post.text}</p>
                            </div>
                        ))
                    ) : (<p>No posts</p>)}
                </div>
            </div>

        </>
    );
}
