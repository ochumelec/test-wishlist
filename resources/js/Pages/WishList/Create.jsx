import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, useForm, usePage} from '@inertiajs/react';
import TextInput from "@/Components/TextInput.jsx";
import InputLabel from "@/Components/InputLabel.jsx";
import InputError from "@/Components/InputError.jsx";
import UpdateProfileInformationForm from "@/Pages/Profile/Partials/UpdateProfileInformationForm.jsx";
import UpdatePasswordForm from "@/Pages/Profile/Partials/UpdatePasswordForm.jsx";
import DeleteUserForm from "@/Pages/Profile/Partials/DeleteUserForm.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import {Transition} from "@headlessui/react";
import { router } from '@inertiajs/react';

export default function CreateWishList({auth}) {
    const user = usePage().props.auth.user;

    const {data, setData, post, processing, recentlySuccessful, errors, reset} = useForm({
        name: '',
        date: '',
        image: ''
    });

    const submit = (e) => {
        e.preventDefault();

        router.post(route('wishlist.create'), data, {
            forceFormData: true
        });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Create Wish List</h2>}
        >
            <Head title="Wish List"/>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <form onSubmit={submit} className="mt-6 space-y-6" encType="multipart/form-data">
                            <header>
                                <h2 className="text-lg font-medium text-gray-900">New wish list</h2>
                            </header>


                            <section className="max-w-xl">


                                <div>
                                    <InputLabel htmlFor="name" value="Name"/>

                                    <TextInput
                                        id="name"
                                        value={data.name}
                                        type="text"
                                        className="mt-1 block w-full"
                                        onChange={(e) => setData('name', e.target.value)}
                                        autoComplete="name"
                                    />

                                    <InputError message={errors.name} className="mt-2"/>
                                </div>

                            </section>

                            <section className="max-w-xl">
                                <div>
                                    <InputLabel htmlFor="date" value="End Date"/>

                                    <TextInput
                                        id="date"
                                        value={data.date}
                                        type="date"
                                        className="mt-1 block w-full"
                                        onChange={(e) => setData('date', e.target.value)}
                                        autoComplete="date"
                                    />

                                    <InputError message={errors.date} className="mt-2"/>
                                </div>
                            </section>

                            <section className="max-w-xl">
                                <div>
                                    {/*<InputLabel htmlFor="image" value="image"/>*/}

                                    {/*<TextInput*/}
                                    {/*    id="image"*/}
                                    {/*    value={data.image}*/}
                                    {/*    type="file"*/}
                                    {/*    className="mt-1 block w-full"*/}
                                    {/*/>*/}

                                    <InputError message={errors.image} className="mt-2"/>
                                </div>
                            </section>

                            <div className="flex items-center gap-4">
                                <PrimaryButton disabled={processing}>Save</PrimaryButton>

                                <Transition
                                    show={recentlySuccessful}
                                    enter="transition ease-in-out"
                                    enterFrom="opacity-0"
                                    leave="transition ease-in-out"
                                    leaveTo="opacity-0"
                                >
                                    <p className="text-sm text-gray-600">Saved.</p>
                                </Transition>
                            </div>
                        </form>
                    </div>

                </div>
            </div>

        </AuthenticatedLayout>
    );
}
