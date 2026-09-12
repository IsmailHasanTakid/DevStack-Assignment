import type { Technology } from "../../Types/TechTypes";
import { toast } from "react-toastify";

import StackItem from "./StackItem";

interface YourStackProps {
    stack: Technology[],
    onRemove: (id: string) => void;
    onRemoveAll: () => void;
}

const YourStack = ({ stack, onRemove, onRemoveAll }: YourStackProps) => {
    return (
        <aside className=" w-full lg:w-80 border border-gray-200 rounded-xl p-5 bg-white h-fit">
            <h3 className="font-semibold text-lg text-gray-900 mb-1">Your Stack</h3>
            <p className="text-sm text-gray-500 mb-4">{stack.length} Technology Selected</p>
            {stack.length === 0 ? (
                <p className="text-sm text-gray-400 text-center py-6">Your stack is empty.Start adding technologies!</p>

            ) : (
                <>
                    <div className="flex flex-col gap-3 mb-4">
                        {stack.map((tech) => (
                            <StackItem
                                key={tech.id}
                                tech={tech}
                                onRemove={onRemove} />
                        ))}
                    </div>
                    <button onClick={onRemoveAll} className="w-full rounded-lg border border-red-300 text-red-500 hover:text-black transition py-1">
                        Remove All
                    </button>
                </>
            )}


        </aside>

    );
};

export default YourStack;