import type { Technology } from "../../Types/TechTypes";
import { LiaStarSolid } from "react-icons/lia";
import { FcCheckmark } from "react-icons/fc";



interface TechnologyCardProps {
    tech: Technology;
    isAdded: boolean;
    onAddToStack: (tech: Technology) => void;
}


const TechnologyCard = ({ tech, isAdded, onAddToStack }: TechnologyCardProps) => {
    return (
        <div className="border border-gray-200 rounded-xl p-5 relative bg-white shadow-sm flex flex-col">
            <span className="absolute top-3 right-3 text-xs px-2 py-1 rounded-full bg-pink-500/20 text-pink-400">
                {tech.badge}
            </span>

            <img src={tech.icon} alt={tech.name} className="w-10 h-10 mb-3" />
            <h3 className="font-semibold text-lg text-gray-900 mb-1">{tech.name}</h3>
            <p className="text-sm text-gray-500 mb-4 flex-1">{tech.description}</p>


            <div className="flex items-center gap-2 text-xs mb-4">
                <span className="px-2 py-1 bg-gray-100 rounded text-gray-600 font-medium">{tech.category}</span>
                <span className="px-2 py-1 bg-gray-100 rounded text-gray-600 font-medium">{tech.difficulty}</span>

            </div>

            <p className="flex items-center gap-1 text-sm text-yellow-400 mb-3">
                <LiaStarSolid /> <span className="text-gray-300">{tech.rating}</span>
            </p>
            <button
                onClick={() => onAddToStack(tech)}
                disabled={isAdded}
                className={`w-full py-2.5 rounded-lg font-medium transition flex items-center justify-center gap-2 ${isAdded
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-black text-white hover:opacity-80"
                    }`}
            >
                {isAdded ? (
                    <>
                        <FcCheckmark /> Added
                    </>
                ) : (
                    "Add to Stack"
                )}
            </button>
        </div>
    );
};

export default TechnologyCard;