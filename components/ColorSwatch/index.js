import React from 'react';
import SwatchButton from '@/ui/SwatchButton';
import swatchStyles from './swatch.style';

const ColorSwatch = ({ swatches }) => {
  return (
    <ul className="swatch-list">
      {swatches.map((item) => (
        <li>
          <SwatchButton bgColor={item} />
        </li>
      ))}
      <style jsx>{swatchStyles}</style>
    </ul>
  );
};

export default ColorSwatch;
