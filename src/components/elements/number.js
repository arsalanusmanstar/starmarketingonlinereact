import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

const DEFAULT_OPTIONS = {
	decimals: 0,
};

export const useNumberSpinner = (currentValue, options) => {
	const config = { ...DEFAULT_OPTIONS, ...options };
	console.log(config);
	const { decimals } = config;
	const props = useSpring({ num: currentValue });

	return <animated.span>{props.num.interpolate((x) => x)}</animated.span>;
};
