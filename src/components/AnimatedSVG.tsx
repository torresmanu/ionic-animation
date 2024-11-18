import React, { useRef, useEffect } from 'react';
import { createAnimation } from '@ionic/react';

interface AnimatedSVGProps {
  percentage: number; // Fill percentage (0-100)
  fillColor?: string; // Optional fill color
  duration?: number; // Animation duration in milliseconds
  shape: 'shape1' | 'shape2'; // Differentiate between shapes
}

const AnimatedSVG: React.FC<AnimatedSVGProps> = ({
  percentage,
  fillColor = '#FF5733',
  duration = 2000,
  shape,
}) => {
  const fillRef = useRef<SVGRectElement>(null);

  const totalHeight = 642; // Total height of the SVG

  // Unique ID for the clipPath needed for the animations to be independent
  const uniqueId = `clipPath-${shape}`; 

  useEffect(() => {
    if (fillRef.current) {
      const targetHeight = (percentage / 100) * totalHeight;

      fillRef.current.setAttribute('y', totalHeight.toString());
      fillRef.current.setAttribute('height', '0');

      const animation = createAnimation()
        .addElement(fillRef.current)
        .duration(duration)
        .keyframes([
          { offset: 0, transform: 'translateY(0)', height: '0' },
          { offset: 1, transform: `translateY(-${targetHeight}px)`, height: `${targetHeight}px` },
        ]);

      animation.play();
    }
  }, [percentage, duration]);

  // Path for the two different svg logo shapes
  const shapePath =
    shape === 'shape1'
      ? 'M183.48,0h91.75v642.2h-91.74V205.13c-48.69,43.59-112.99,70.1-183.48,70.1v-91.74c101.33,0,183.48-82.15,183.48-183.48h0Z'
      : 'M91.75,0c0,101.34,82.15,183.48,183.48,183.48v91.74c-70.5,0-134.79-26.52-183.48-70.1v437.07H0V0h0S91.75,0,91.75,0h0Z';

  return (
    <svg viewBox="0 0 275.23 642.2" width="200px" height="400px">
      {/* Border outline */}
      <path
        d={shapePath}
        fill="#ffffff"
      />

      {/* Clip path for the animated fill */}
      <defs>
        <clipPath id={uniqueId}>
          <rect ref={fillRef} x="0" y="642" width="275.23" height="0" fill="#ffffff" />
        </clipPath>
      </defs>

      {/* Background path with clipPath to create the filling effect */}
      <path d={shapePath} fill={fillColor} clipPath={`url(#${uniqueId})`} />
    </svg>
  );
};

export default AnimatedSVG;