import Hero from './components/Hero/Hero';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import type { Technology } from './Types/TechTypes';
import Technologies from "./components/Technologies/Technologies";
import YourStack from "./components/YourStack/YourStack";
import { ToastContainer, toast } from "react-toastify";

function App() {

  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, SetLoading] = useState<boolean>(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("/data.json");
        const data: Technology[] = await res.json();
        setTechnologies(data);
      } catch (error) {
        console.log("Data Fetch Error", error);

      }

      finally {
        SetLoading(false);
      }
    };

    getData();
  }, []);

  const handleAddToStack = (tech: Technology) => {
    const alreadyExists = stack.some((item) => item.id === tech.id);
    if (alreadyExists) {
      toast.warning("Already Stack")
      return;
    }
    setStack((prev) => [...prev, tech]);
    toast.success(`${tech.name} Added to the stack`)
  };
  const handleRemoveFromStack = (id: string) => {
    setStack((prev) => prev.filter((item) => item.id !== id));

  };

  const handleRemoveAll = () => {
    setStack([]);
  };


  return (
    <>
      <Navbar />
      <Hero />


      {loading ? (
        <div className='text-center py-10'> Loading...</div>
      ) : (
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10'>
          <h2 className='text-3xl font-bold mb-2 text-gray-900'>Explore the <span className='text-pink-500'>Technologies</span></h2>
          <p className='text-gray-500 mb-6'>Pick one technology per category to build your ideal stack</p>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'></div>

          <div className='flex flex-col lg:flex-row gap-6 items-start' >
            <Technologies
              technologies={technologies}
              stack={stack}
              onAddToStack={handleAddToStack} />

            <YourStack
              stack={stack}
              onRemove={handleRemoveFromStack}
              onRemoveAll={handleRemoveAll}

            />

          </div>
        </div>
      )}

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick pauseOnHover
        theme="dark"
      />



    </>

  );


}

export default App;
