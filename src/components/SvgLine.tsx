import { useActions } from 'hooks/useActions';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { useEffect } from 'react';
import { FC } from 'react';
import { roundNum } from 'utils';

const SvgLine: FC = () => {
  const { svgCoordinates, currentWeather } = useTypedSelector((state) => state.weather);
  const {setSvgCoordinates} = useActions();

  useEffect(() => {
    if (currentWeather) {
      const coordinates: number[] = [];
      currentWeather.list.slice(0, 4).map((item) => coordinates.push(roundNum(item?.main.temp)))
      setSvgCoordinates(coordinates)
    }
  }, [currentWeather, setSvgCoordinates]);
  
  return (
    <svg width="752" height="60">
      <path
        d={`M0 30 130 ${svgCoordinates[0]}, 295 ${svgCoordinates[1]}, 455 ${svgCoordinates[2]}, 610 ${svgCoordinates[3]}, 752 30`}
        stroke="#7C7F85"
        fill="transparent"
        strokeWidth="2"
      />

      <circle
        cx="130"
        cy={svgCoordinates[0]}
        r="4"
        stroke="#F5D540"
        fill="#151D2A"
        strokeWidth="1"
      />
      <circle
        cx="290"
        cy={svgCoordinates[1]}
        r="4"
        stroke="#F5D540"
        fill="#151D2A"
        strokeWidth="1"
      />
      <circle
        cx="455"
        cy={svgCoordinates[2]}
        r="4"
        stroke="#F5D540"
        fill="#151D2A"
        strokeWidth="1"
      />
      <circle
        cx="610"
        cy={svgCoordinates[3]}
        r="4"
        stroke="#F5D540"
        fill="#151D2A"
        strokeWidth="1"
      />
    </svg>
  );
};

export default SvgLine;
