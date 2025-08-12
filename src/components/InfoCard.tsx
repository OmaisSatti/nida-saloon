
interface infoTypes {
    title: string;
    description: string;
}

export default function InfoCard({ title, description }: infoTypes) {

    return (
        <div className="bg-black/50 p-6 rounded-xl max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">
                {title}
            </h1>
            <p className="text-lg md:text-xl text-white">
                {description}
            </p>
        </div>
    )
}

