import React from 'react';
import { useActions } from '../hooks/use-actions';
import { ActionButton } from './action-button';
import './action-bar.css';

interface ActionBarProps {
	id: string;
}

export const ActionBar: React.FC<ActionBarProps> = ({ id }) => {
	const { moveCell, deleteCell } = useActions();

	return (
		<div className='action-bar'>
			<ActionButton action={() => moveCell(id, 'up')} icon='fa-arrow-up' />
			<ActionButton action={() => moveCell(id, 'down')} icon='fa-arrow-down' />
			<ActionButton action={() => deleteCell(id)} icon='fa-times' />
		</div>
	);
};
