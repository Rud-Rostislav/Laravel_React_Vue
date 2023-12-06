import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link} from '@inertiajs/react';
import {Inertia} from '@inertiajs/inertia'

export default function Show({auth, post}) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Posts"/>

            <div className="py-12 text-center">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 flex flex-col justify-center gap-4">
                            <p>ID: {post.id}</p>
                            <p>Title:</p>
                            <p>{post.title}</p>
                            <p>Text:</p>
                            <p>{post.text}</p>
                            <p>Created at:</p>
                            <p>{post.created_at}</p>
                            <p>Created by:</p>
                            <p>{post.user ? post.user.name : 'Unknown'}</p>
                            <Link
                                href={route('posts.index')}
                                style={{
                                    backgroundColor: 'blue',
                                    color: 'white',
                                    padding: '5px',
                                    borderRadius: '10px',
                                    margin: '10px'
                                }}
                            >
                                Go to all
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}