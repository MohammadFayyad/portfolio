"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";

const schema = z.object({
    name: z.string().min(2, "Please enter your name."),
    email: z.string().email("Please enter a valid email."),
    message: z.string().min(10, "Please share a bit more detail."),
});

type FormValues = z.infer<typeof schema>;

export function ContactSection() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>({ resolver: zodResolver(schema) });

    const onSubmit = (values: FormValues) => {
        const mailto = `mailto:mohamed@fayad.site?subject=Portfolio%20Inquiry&body=${encodeURIComponent(`Name: ${values.name}\nEmail: ${values.email}\n\n${values.message}`)}`;
        window.location.href = mailto;
    };

    return (
        <Section
            eyebrow="Contact"
            title="Let’s build something thoughtful together."
            description="Whether you’re hiring, founding, or planning a product sprint, I’m ready to contribute."
            className="border-t border-white/10"
        >
            <div className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 md:grid-cols-[0.9fr_1.1fr]">
                <div className="space-y-4 text-zinc-300">
                    <p>
                        Reach out for freelance work, collaborations, or conversations about product engineering.
                    </p>
                    <div className="rounded-2xl border border-white/10 bg-zinc-900/70 p-4">
                        <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">Direct contact</p>
                        <p className="mt-2 text-lg text-zinc-100">mohamed@fayad.site</p>
                        <p className="mt-1 text-sm text-zinc-400">Cairo, Egypt · Available globally</p>
                    </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <label className="mb-2 block text-sm text-zinc-300" htmlFor="name">
                            Name
                        </label>
                        <input
                            id="name"
                            className="w-full rounded-2xl border border-white/10 bg-zinc-900/70 px-4 py-3 text-zinc-100 outline-none ring-0"
                            {...register("name")}
                        />
                        {errors.name ? <p className="mt-2 text-sm text-rose-400">{errors.name.message}</p> : null}
                    </div>
                    <div>
                        <label className="mb-2 block text-sm text-zinc-300" htmlFor="email">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            className="w-full rounded-2xl border border-white/10 bg-zinc-900/70 px-4 py-3 text-zinc-100 outline-none ring-0"
                            {...register("email")}
                        />
                        {errors.email ? <p className="mt-2 text-sm text-rose-400">{errors.email.message}</p> : null}
                    </div>
                    <div>
                        <label className="mb-2 block text-sm text-zinc-300" htmlFor="message">
                            Project brief
                        </label>
                        <textarea
                            id="message"
                            rows={5}
                            className="w-full rounded-2xl border border-white/10 bg-zinc-900/70 px-4 py-3 text-zinc-100 outline-none ring-0"
                            {...register("message")}
                        />
                        {errors.message ? <p className="mt-2 text-sm text-rose-400">{errors.message.message}</p> : null}
                    </div>
                    <Button type="submit">Send inquiry</Button>
                </form>
            </div>
        </Section>
    );
}
