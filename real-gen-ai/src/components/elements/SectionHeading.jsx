
export default function SectionHeading({title}){
    return (
        <section className="flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 xl:px-28 text-center gap-5 pb-20">
            <h1 className="text-[#000000] font-bold text-2xl md:text-5xl">{title}</h1>
        </section>
    )
}