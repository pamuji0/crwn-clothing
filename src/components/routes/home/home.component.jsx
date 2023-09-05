import React, { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import Directory from '../../directory/directory.component';

export default function Home() {
	return (
		<Fragment>
			<Directory />
			<Outlet />
		</Fragment>
	);
}
