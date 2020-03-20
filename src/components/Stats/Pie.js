import React, {useRef, useEffect} from 'react';
import {Animated, Easing} from 'react-native';
import Svg, {G, Circle} from 'react-native-svg';

import Slice from './Slice';

const AnimatedSlice = Animated.createAnimatedComponent(Slice);

export default function Pie({
  data,
  width,
  height,
  style,
  innerRadius = 80,
  innerColor = 'white',
  animDuration = 500,
}) {
  const anim = useRef(new Animated.Value(0.0));

  useEffect(() => {
    Animated.timing(anim.current, {
      toValue: 2,
      duration: animDuration,
      easing: Easing.inOut(Easing.quad),
    }).start();
  }, [data, animDuration]);

  let endAngle = Animated.multiply(anim.current, Math.PI);

  return (
    <Svg
      width={width}
      height={height}
      style={style}
      viewBox={'-100 -100 200 200'}>
      <G>
        {data.map((item, index) => {
          return (
            <AnimatedSlice
              key={'pie_shape_' + index}
              index={index}
              endAngle={endAngle}
              color={item.color}
              data={data}
            />
          );
        })}
      </G>
      <Circle cx={0} cy={0} r={innerRadius} fill={innerColor} />
    </Svg>
  );
}
