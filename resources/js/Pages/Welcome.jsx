import {Link, Head} from '@inertiajs/react';

export default function Welcome({auth, posts}) {
    return (
        <>
            <Head title="Posts"/>
            <div
                className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center
                bg-gray-100 dark:bg-dots-lighter selection:bg-red-500 selection:text-white">
                <div className="sm:fixed sm:top-0 p-6">
                    {auth.user ? (
                        <Link
                            href={route('posts.index')}
                            className="font-semibold focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route('login')}
                                className="font-semibold focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Log in
                            </Link>

                            <Link
                                href={route('register')}
                                className="font-semibold focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500 ml-4"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>

                <div className="p-6 text-gray-900 text-center w-2/5">
                    {posts && posts.length > 0 ? (
                        posts.map((post) => (
                            <div key={post.id} className='hover:scale-105 transition duration-200' style={{
                                padding: '10px',
                                marginBottom: '20px',
                                borderRadius: '15px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '10px',
                                boxShadow: '0 0px 5px 0 rgba(0, 0, 0, 0.2), 0 0px 10px 0 rgba(0, 0, 0, 0.15)',
                            }}>
                                <p>{post.title}</p>
                                <p>{post.text}</p>
                                <p>{new Date(post.created_at).toLocaleDateString()}</p>
                                <p>{post.user ? post.user.name : 'Unknown'}</p>
                            </div>
                        ))
                    ) : (<p>No posts</p>)}
                </div>
            </div>

        </>
    );
}
