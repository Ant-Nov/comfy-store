import { useState } from "react";
import { formatPrice } from '../utils';

export const RangeInput = ({ defaultValue }) => {
  const [range, setRange] = useState(defaultValue || 100000);

  return (
     <fieldset className="fieldset">
        <legend className="fieldset-legend w-full text-sm flex items-center justify-between">
          Select Price <span className="text-base">{formatPrice(range)}</span>
        </legend>
        
        <input
          type="range"
          name="price"
          min={0}
          step={100}
          max={100000}
          value={range}
          onChange={(e) => setRange(e.target.value)}
          className="range range-secondary range-sm"
        />
        
        <div className="flex w-full justify-between mt-1">
          <span>0</span>
          <span>Max: $1,000.00</span>
        </div>
      </fieldset>
  );
};