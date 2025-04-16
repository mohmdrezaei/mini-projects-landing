import  { useState } from 'react';

const ColorPicker = () => {
  const [color, setColor] = useState('#d880a6');

  return (
    <div className=''>
      <h2 className='text-2xl font-[600]'>Color Picker</h2>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        className=' m-auto mt-5 border border-gray-300 p-2 h-14 w-24 block bg-white  cursor-pointer rounded-lg'
      />
      <div className='w-[200px] h-[100px] rounded-lg m-auto mt-7' style={{ backgroundColor: color }}></div>
    </div>
  );
};

export default ColorPicker;