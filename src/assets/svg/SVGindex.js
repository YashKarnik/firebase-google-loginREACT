// import React from 'react';
import { SvgIcon } from '@material-ui/core';
import { ReactComponent as GoogleComp } from './search.svg';
import { ReactComponent as SendComp } from './send.svg';
import { ReactComponent as SunComp } from './sun.svg';
import { ReactComponent as MoonComp } from './moon.svg';
export const Google = props => {
	return <SvgIcon component={GoogleComp} viewBox='0 0 600 476.6' {...props} />;
};
export const Send = props => {
	return <SvgIcon component={SendComp} viewBox='0 0 600 476.6' {...props} />;
};
export const Sun = props => {
	return <SvgIcon component={SunComp} viewBox='0 0 600 476.6' {...props} />;
};
export const Moon = props => {
	return <SvgIcon component={MoonComp} viewBox='0 0 600 476.6' {...props} />;
};
