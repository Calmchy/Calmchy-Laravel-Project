import { Head } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { academe } from '@/routes';

export default function Academe() {
    return (
        <>
            <Head title="Academe" />
            <p>The Academe page area....</p>
            <h1>Pull</h1>
        </>
    );
}

Academe.layout = {
    breadcrumbs: [
        {
            title: 'Academe',
            href: academe(),
        },
    ],
};
