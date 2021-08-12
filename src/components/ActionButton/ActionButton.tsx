import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styles from './ActionButton.module.scss';

interface ActionButtonProps {
  icon: IconProp;
	tooltip: string;
	action: () => void;
	disabled?: boolean;
};

export const ActionButton = ({ icon, tooltip, action, disabled }: ActionButtonProps) => {
	const circleStyle = React.useMemo(() => disabled ? `${styles.circle} ${styles.disabled}` : styles.circle, [disabled]);

	return (
		<div
			className={circleStyle}
			title={tooltip}
			onClick={action}
		>
			<FontAwesomeIcon
				icon={icon}
				size="2x"
			/>
		</div>
	);
};
