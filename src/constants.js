//this edits particle effects in background
export const particlesOptions = {
	particles: {
		number: {
			value: 30,
			density: {
				enable: true,
				value_area: 400
			}
		},
		shape: {
			type: 'circle',
			stroke: {
				width: 0,
				color: '#000000'
			},
			polygon: {
				nb_sides: 5
			}
		},
		color: {
			value: '#ffffff'
		},
		opacity: {
			value: 1,
			random: false,
			anim: {
				enable: false,
				speed: 1,
				opacity_min: 1,
				sync: true
			}
		}
	},
	interactivity: {
		detect_on: 'window',
		events: {
			onhover: {
				enable: true,
				mode: 'grab'
			},
			resize: true
		},
		modes: {
			grab: {
				distance: 400,
				duration: 0.4
			}
		}
	}
};

export const initialAppState = {
	imgLinkInput: '',
	imageUrl: '',
	box: '',
	route: 'signin',
	isSignedIn: false
};

export const initialUserState = {
	id: '',
	name: '',
	email: '',
	password: '',
	entries: 0,
	joined: ''
};
