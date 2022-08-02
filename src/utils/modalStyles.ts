interface Style {
  content: {
    top: string
    left: string
    right: string
    bottom: string
    marginRight: string
    transform: string
    width: string
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
		width: '840px'
	}
}
