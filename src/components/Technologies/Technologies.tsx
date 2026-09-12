import type { Technology } from '../../Types/TechTypes';
import TechnologyCard from './TechnologyCard';

interface TechnologiesProps {
    technologies:Technology[];
    stack:Technology[];
    onAddToStack:(tech: Technology) => void;
}

const Technologies =({technologies, stack, onAddToStack}:TechnologiesProps) => {

    return (
        <section className='flex-1'>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {technologies.map((tech)=>{
                    const isAdded = stack.some((item)=>item.id === tech.id);
                    return (
                        <TechnologyCard
                        key ={tech.id}
                        tech ={tech}
                        isAdded = {isAdded}
                        onAddToStack={onAddToStack}/>
                    );
                })}

            </div>


        </section>
       
    );
};

export default Technologies;