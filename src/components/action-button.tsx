import React from 'react';
import { Action } from '../state/actions';

interface ActionButtonProps {
	action: () => Action;
	icon: 'fa-arrow-up' | 'fa-arrow-down' | 'fa-times';
}

export const ActionButton: React.FC<ActionButtonProps> = ({ action, icon }) => {
	return (
		<button className='button is-primary is-small' onClick={action}>
			<span className='icon'>
				<i className={`fas ${icon}`}></i>
			</span>
		</button>
	);
};
