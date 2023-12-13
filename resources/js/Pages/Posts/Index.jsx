import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link} from '@inertiajs/react';
import axios from 'axios';

export default function Index({auth, posts: initialPosts}) {
    const [posts, setPosts] = React.useState(initialPosts);

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Posts"/>

            <div className="py-12 text-center">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <h1> All Posts</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-5xl mx-auto sm:px-6 lg:px-8">
                <div className="overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="p-6 text-gray-900 text-center flex" style={
                        {
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '20px',
                            flexWrap: 'wrap'
                        }
                    }>
                        {posts && posts.length > 0 ? (
                            posts.map((post) => (
                                <div key={post.id} style={{
                                    padding: '10px',
                                    borderRadius: '10px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '15vw',
                                    height: '30vh',
                                    boxShadow: '0 0px 10px 0 rgba(0, 0, 0, 0.2), 0 0px 10px 0 rgba(0, 0, 0, 0.15)',
                                }}>
                                    <p>{post.title}</p>
                                    <p>{post.text}</p>

                                    <div className='py-4 flex justify-center gap-4'>

                                        <Link
                                            href={route('posts.show', {post: post.id})}
                                            style={{
                                                backgroundColor: '#6e4f00',
                                                color: 'white',
                                                padding: '5px 10px',
                                                borderRadius: '10px'
                                            }}
                                        >
                                            More
                                        </Link>

                                        <Link
                                            href={route('posts.edit', {post: post.id})}
                                            style={{
                                                backgroundColor: '#00bbff',
                                                color: 'white',
                                                padding: '5px 10px',
                                                borderRadius: '10px'
                                            }}
                                        >
                                            Edit
                                        </Link>

                                        <form
                                            onSubmit={(e) => {
                                                e.preventDefault();
                                                axios.delete(route('posts.destroy', {post: post.id})).then(() => {
                                                    setPosts(posts.filter(p => p.id !== post.id));
                                                });
                                            }}
                                        >
                                            <button
                                                type="submit"
                                                style={{
                                                    backgroundColor: '#5b0000',
                                                    color: 'white',
                                                    padding: '5px 10px',
                                                    borderRadius: '10px'
                                                }}
                                            >
                                                Delete
                                            </button>
                                        </form>


                                    </div>
                                </div>
                            ))
                        ) : (<p>No posts</p>)}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}