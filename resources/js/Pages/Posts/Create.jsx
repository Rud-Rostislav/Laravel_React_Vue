import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import PrimaryButton from '@/Components/PrimaryButton';
import {useForm, Head} from '@inertiajs/react';

export default function Create({auth}) {
    const {data, setData, post, processing, reset, errors} = useForm({
        title: '', text: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('posts.store'), {onSuccess: () => reset()});
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Posts"/>
            <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8 mt-16">
                <form onSubmit={submit} style={{display: 'flex', flexDirection: 'column', gap: '25px'}}>
                    <input
                        value={data.title}
                        placeholder="Title"
                        className="text-center block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                        type="text"
                        onChange={e => setData('title', e.target.value)}
                    />

                    <textarea
                        value={data.text}
                        placeholder="Text"
                        className="text-center block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                        onChange={e => setData('text', e.target.value)}
                    ></textarea>

                    <PrimaryButton style={{
                        width: '50%', display: 'flex', justifyContent: 'center',
                        margin: '0 auto'
                    }} disabled={processing}>Save</PrimaryButton>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}