import React, {useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, useForm} from '@inertiajs/react';
import {Inertia} from "@inertiajs/inertia";

export default function Edit({auth, post}) {
    const {data, setData, put, processing} = useForm({
        title: post.title || '',
        text: post.text || '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route('posts.update', {post: post.id}));
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Edit post"/>

            <div className="py-12 text-center">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <h1>Edit post</h1>
                            <form onSubmit={handleSubmit}
                                  className='flex flex-col items-center justify-center gap-4 mt-4'>
                                <input
                                    style={{
                                        borderRadius: '20px',
                                        textAlign: 'center',
                                        padding: '5px 15px',
                                        width: '25%',
                                        height: '5vh'
                                    }}
                                    type="text"
                                    value={data.title}
                                    onChange={e => setData('title', e.target.value)}
                                    placeholder="Title"
                                />
                                <input
                                    style={{
                                        borderRadius: '20px',
                                        textAlign: 'center',
                                        padding: '5px 15px',
                                        width: '25%',
                                        height: '10vh'
                                    }}
                                    type="text"
                                    value={data.text}
                                    onChange={e => setData('text', e.target.value)}
                                    placeholder="Text"
                                />
                                <button disabled={processing} type="submit" style={{
                                    color: 'white',
                                    backgroundColor: '#00bbff',
                                    padding: '5px 15px',
                                    borderRadius: '10px',
                                    fontSize: '20px',
                                }}>Edit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}