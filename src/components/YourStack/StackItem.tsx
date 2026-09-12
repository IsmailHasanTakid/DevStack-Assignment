import type { Technology } from "../../Types/TechTypes";
import { FaXmark } from "react-icons/fa6"


interface StackItemProps {
    tech:Technology;
    onRemove:(id:string) => void;

}
const StackItem = ({tech,onRemove}:StackItemProps) => {
    return (
        <div className="flex items-center justify-between border border-gray-200 rounded-lg p-3">
            <div className="flex items-center gap-3">
                <img src={tech.icon} alt={tech.name} className="w-8 h-8"/>
                <div>
                    <p className="font-medium text-sm text-gray-900">{tech.name}</p>
                    <p className="text-xs text-gray-500">{tech.category}</p>


                </div>
            </div>

            <button
            onClick={() =>onRemove(tech.id)}
            className="text-gray-400 hover:text-red-500 transition text-lg" aria-label="Remove"

            >
                <FaXmark />


            </button>
            
        </div>
    );
};

export default StackItem;