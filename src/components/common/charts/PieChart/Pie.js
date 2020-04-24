import React, {useRef, useEffect} from 'react';
import {Animated, Easing} from 'react-native';
import Svg, {G, Circle} from 'react-native-svg';

import Slice from './Slice';

const AnimatedSlice = Animated.createAnimatedComponent(Slice);

export default function Pie({
  data,
  size,
  style,
  innerRadius = 80,
  innerColor = 'white',
  blankColor = 'white',
  animDuration = 500,
}) {
  const anim = useRef(new Animated.Value(0.0));

  useEffect(() => {
    Animated.timing(anim.current, {
      toValue: 2,
      duration: animDuration,
      easing: Easing.inOut(Easing.quad),
      useNativeDriver: false,
    }).start();
  }, [data, animDuration]);

  return (
    <Svg width={size} height={size} style={style} viewBox={'-100 -100 200 200'}>
      <Circle cx={0} cy={0} r={100} fill={blankColor} />
      <G>
        {data.map((item, index) => {
          return (
            <AnimatedSlice
              key={`pie_shape_${index}`}
              index={index}
              endAngle={Animated.multiply(anim.current, Math.PI)}
              data={data}
            />
          );
        })}
      </G>
      <Circle cx={0} cy={0} r={innerRadius} fill={innerColor} />
    </Svg>
  );
}
