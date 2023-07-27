import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, useForm} from '@inertiajs/react';
import TextInput from "@/Components/TextInput.jsx";
import InputLabel from "@/Components/InputLabel.jsx";
import InputError from "@/Components/InputError.jsx";

const submit = (e) => {
    e.preventDefault();

    post(route('password.store'));
};

export default function Dashboard({auth, token}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        token: token,
        password: '',
        password_confirmation: '',
    });

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard"/>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">You're logged in!!!!!!!</div>

                        <form onSubmit={submit}>
                            <div>
                                <InputLabel htmlFor="name" value="name"/>

                                <TextInput
                                    id="name"
                                    type="name"
                                    name="name"
                                    value=""
                                    className="mt-1 block w-full"
                                    autoComplete="username"
                                    onChange={(e) => setData('name', e.target.value)}
                                />

                                <InputError message={errors.email} className="mt-2" />

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
