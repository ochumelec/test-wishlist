import AuthenticatedLayout from '@/Layouts/GuestLayout';
import PrimaryButton from '@/Components/PrimaryButton';
import {Head, Link, useForm} from '@inertiajs/react';
import SecondaryButton from "@/Components/SecondaryButton.jsx";
import ApplicationLogo from "@/Components/ApplicationLogo.jsx";
import NavLink from "@/Components/NavLink.jsx";
import Dropdown from "@/Components/Dropdown.jsx";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink.jsx";
import { useState } from 'react';
import Countdown from "@/Components/Countdown.jsx";

export default function WishListView({wish_list, url, gifts, user}) {
    const {data, setData, post, processing, errors, reset} = useForm({
        email: '',
    });

    return (
        <AuthenticatedLayout
            user={user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Edit Wish List</h2>}>
            <Head title={`Wish list: ${wish_list.name}`}/>

            <Countdown date_exp={wish_list.date_end_at}></Countdown>
            {url && <div className="mb-4 font-medium text-sm text-green-600">Wish list: {wish_list.name}</div>}

            <div>
                User: {user.name}
            </div>

            <div>
                End date: {wish_list.date_end_at}
            </div>

            <div>
                <h2>Wishes:</h2>
            </div>

                {gifts.map((item) => (
                    <div key={item.id} className="block mt-4">
                    <div className="p-6 sm:p-8 bg-white shadow sm:rounded-lg">
                        <div className="grid grid-flow-col flex justify-between">
                            <div className="flex justify-start">
                                {item.reserve_user_id ? (
                                    <strike>{item.title}</strike>
                                ) : (
                                     <div>{item.title}</div>
                                )}

                            </div>
                            <div className="flew grid grid-flow-col">
                                <div>
                                    <a target='_blank' href={item.url}>
                                        <SecondaryButton>
                                            Url
                                        </SecondaryButton>
                                    </a>
                                </div>
                                {item.reserve_user_id ? (
                                        <SecondaryButton>
                                            Reserved
                                        </SecondaryButton>
                                ) : (
                                    <div>
                                        <Link href={`/wishlist/wish/reserve/${item.id}`}>
                                            <SecondaryButton>
                                                Reserve
                                            </SecondaryButton>
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    </div>

                ))}

            <div className="flex items-center justify-end mt-4">

                {/*<PrimaryButton className="ml-4" disabled={processing}>*/}
                {/*    Log in*/}
                {/*</PrimaryButton>*/}
            </div>
        </AuthenticatedLayout>
    );
}
