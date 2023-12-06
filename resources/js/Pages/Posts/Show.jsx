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
                        <div className="p-6 text-gray-900">
                            <h1>Show post {post.id}</h1>
                            <p>{post.title}</p>
                            <p>{post.text}</p>
                            <Link
                                href={route('posts.index')}
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