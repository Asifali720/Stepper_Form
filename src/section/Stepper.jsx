import React, { useEffect, useRef, useState } from 'react';
import { clsx } from 'clsx';

const Stepper = ({ step, currentStep }) => {
  const [newStep, setNewStep] = useState([]); 
  const stepRef = useRef();

  const updateStep = (StepNumber, steps) => {
    const newSteps = [...steps];
    let count = 0;
    while (count < newStep.length) {
      if (count === StepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: true,
          selected: true,
          completed: true,
        };
        count++;
      } else if (count < StepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: true,
          completed: true,
        };
        count++;
      } else {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: false,
          completed: false,
        };
        count++;
      }
    }
    return newSteps;
  };

  useEffect(() => {
    const stepStats = step.map((step, index) => ({
      description: step,
      completed: false,
      highlighted: index === 0 ? true : false,
      selectedObject: index === 0 ? true : false,
    }));

    stepRef.current = stepStats;
    const current = updateStep(currentStep - 1, stepRef.current);
    setNewStep(current);
  }, [step, currentStep]);
  return (
    <div className='flex justify-between items-center mx-4 p-4'>
      {newStep?.map((step, index) => (
        <div className={clsx(index === newStep.length -1 ? 'flex items-center' : 'w-full flex items-center')} key={index}>
          <div className={clsx('w-10 h-10 border border-gray-400 flex items-center justify-center rounded-full relative', step.selected ? 'bg-green-600 text-white border border-green-600 font-bold' : '')}>
            {step.completed ? <span className='text-white font-bold text-xl'>&#10003;</span> : index + 1}
          </div>
          <div className={clsx('flex-grow border-t-[1px]  duration-500 transition ease-in-out', step.completed ?'border-t-green-600': 'border-t-gray-500')}></div>
        </div>
      ))} 
    </div>
  );
};

export default Stepper;
