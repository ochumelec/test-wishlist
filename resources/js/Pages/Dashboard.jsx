import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link, useForm} from '@inertiajs/react';
import TextInput from "@/Components/TextInput.jsx";
import InputLabel from "@/Components/InputLabel.jsx";
import InputError from "@/Components/InputError.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import SecondaryButton from "@/Components/SecondaryButton.jsx";


export default function Dashboard({auth, wish_lists}) {
    const {data, setData, post, processing, errors, reset} = useForm({
        password: '',
        password_confirmation: '',
    });


    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">My Wish Lists</h2>}
        >
            <Head title="Dashboard"/>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">

                    {wish_lists.map((item) => (
                        <div key={item.id} className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                                <div className="grid grid-flow-col flex justify-between">
                                    <div className="flex justify-start">
                                        {item.name}
                                    </div>
                                    <div className="flew grid grid-flow-col">
                                    <div>
                                        <Link href={`/wishlist/edit/${item.url}`}>
                                            <SecondaryButton>
                                                Edit
                                            </SecondaryButton>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link href={`/wishlist/${item.url}`}>
                                            <SecondaryButton>
                                                View
                                            </SecondaryButton>
                                        </Link>
                                    </div>
                                    </div>
                                </div>
                        </div>
                    ))}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
