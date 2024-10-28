 
import MindElixirReact from './MindElixirReact';
// import MindElixirReact from 'mind-elixir-react'
import MindElixir, { MindElixirInstance } from 'mind-elixir';
import { Ref, useRef } from 'react';
import { historyofPeruData, themeMindMap } from './constants';

export default function App() {
    const options = {
    direction: MindElixir.SIDE,
    theme: themeMindMap,
    editable: false,
  }

  const ME = useRef<Ref<{instance: MindElixirInstance}>>(null);
  console.log('App render', ME);
    

  return (
    <div className="showcase w-full h-full">
      <h2 className='text-black text-3xl p-4 font-bold'>Mind Map with library mind-elixir</h2>
      <div className="block m-auto">
        <MindElixirReact
          ref={ME}
          data={historyofPeruData}
          options={options}
          className='w-full h-[calc(100dvh-200px)] mx-auto'
        />
      </div>
    </div>
  );
}
