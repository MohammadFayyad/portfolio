import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center px-6 py-20 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">404</p>
            <h1 className="mt-4 text-4xl font-semibold text-zinc-100">This page does not exist.</h1>
            <p className="mt-3 max-w-md text-lg text-zinc-400">
                The route you requested could not be found, but the rest of the portfolio is ready.
            </p>
            <div className="mt-8">
                <Button asChild>
                    <Link href="/">Back home</Link>
                </Button>
            </div>
        </main>
    );
}
