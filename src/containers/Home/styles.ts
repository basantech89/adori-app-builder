import { makeStyles } from '@material-ui/core'

import theme from '../../themes/light'

type TemplateStyles = {
	templateWidth: number
	bgColor: string
}

const useTemplateStyles = makeStyles(() => ({
	root: (props: TemplateStyles) => ({
		width: props.templateWidth,
		backgroundColor: props.bgColor,
		overflow: 'auto',
		padding: 24,
		margin: '0 auto'
	}),
	showName: {
		fontWeight: 'bold'
	},
	showDescription: {
		opacity: 0.5
	},
	shareIcon: {
		boxShadow: 'none'
	},
	divier: {
		height: 10,
		marginTop: 48,
		marginBottom: 48,
		backgroundColor: 'rgb(196, 196, 196)',
		borderRadius: 9,
		opacity: 0.3
	},
	description: {
		opacity: 0.65
	}
}))

export default useTemplateStyles
