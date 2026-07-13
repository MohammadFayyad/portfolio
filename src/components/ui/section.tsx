import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    eyebrow?: string;
    title: string;
    description?: string;
    children: React.ReactNode;
}

export function Section({
    eyebrow,
    title,
    description,
    children,
    className,
    ...props
}: SectionProps) {
    return (
        <section className={cn("mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-20 md:px-8 lg:px-10", className)} {...props}>
            <div className="flex flex-col gap-3 max-w-2xl">
                {eyebrow ? <p className="text-sm uppercase tracking-[0.3em] text-zinc-400">{eyebrow}</p> : null}
                <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
                {description ? <p className="text-lg leading-8 text-zinc-400">{description}</p> : null}
            </div>
            {children}
        </section>
    );
}
