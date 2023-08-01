import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, useForm, usePage} from '@inertiajs/react';
import TextInput from "@/Components/TextInput.jsx";
import InputLabel from "@/Components/InputLabel.jsx";
import InputError from "@/Components/InputError.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import {Transition} from "@headlessui/react";
import { Popover } from '@headlessui/react'
import { router } from '@inertiajs/react';

export default function EditWishList({wish_list, url, auth}) {
    const user = usePage().props.auth.user;

    const {data, setData, post, processing, recentlySuccessful, errors, reset} = useForm({
        name: '',
        url: '',
        wish_list_id: wish_list.id
    });

    const submit = (e) => {
        e.preventDefault();

        router.post(route('wishlist.update'), data, {
             forceFormData: true
        });
    };


    const onSubmit = (e) => {
        e.preventDefault();

        // Send your ajax query via jQuery or Axios (I prefer Axios)
        axios.get('/wishlist/save', {
            params: {
                action: this.actionInput.value,
                email: this.emailInput.value,
                password: this.passwordInput.value,
            }
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Edit Wish List</h2>}
        >
            <Head title="Wish List"/>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <form onSubmit={submit} className="mt-6 space-y-6" encType="multipart/form-data">
                            <header>
                                <h2 className="text-lg font-medium text-gray-900">Add wish to wishlist "{wish_list.name}"</h2>
                            </header>

                            <section className="max-w-xl">
                                <div>
                                    <InputLabel htmlFor="name" value="Name"/>

                                    <TextInput id="wish_list_id" type="hidden" name="wish_list_id" value={`${wish_list.id}`}></TextInput>


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
                                    <InputLabel htmlFor="url" value="Url"/>

                                    <TextInput
                                        id="url"
                                        value={data.url}
                                        type="text"
                                        className="mt-1 block w-full"
                                        onChange={(e) => setData('url', e.target.value)}
                                        autoComplete="url"
                                    />
                                    <InputError message={errors.url} className="mt-2"/>
                                </div>
                            </section>

                            <div className="flex items-center gap-4">
                                <PrimaryButton disabled={processing}>Add Wish</PrimaryButton>

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
