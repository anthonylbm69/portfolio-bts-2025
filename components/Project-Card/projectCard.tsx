import { Card } from "@/components/ui/card";

export default function ProjectCard({ title, description, imageUrl }) {
    return (
        <Card className="shadow-lg mt-5 hover:shadow-xl transition duration-300 ease-in-out">
            <div className="relative">
                <img src={imageUrl} alt={title} className="w-full object-cover rounded-t-lg" />
            </div>
            <div className="p-4">
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="text-gray-500 mt-2">{description}</p>
            </div>
        </Card>
    );
}
