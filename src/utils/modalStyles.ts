interface Style {
  content: {
    [index: string] : string
  }
}

export const customStyles: Style = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		width: '840px',
		padding: '0px'
	}
}

export const checkoutModalStyles: Style = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		width: '840px',
		padding: '0px',
		overflowY: 'hidden'
	}
}
