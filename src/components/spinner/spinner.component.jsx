import { SpinnerContainer, SpinnerOverlay } from './spinner.style';

import React from 'react';

export default function Spinner() {
	return (
		<SpinnerOverlay>
			<SpinnerContainer />
		</SpinnerOverlay>
	);
}
