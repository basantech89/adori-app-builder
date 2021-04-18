import { makeStyles } from '@material-ui/core'

type TemplateStyles = {
	templateWidth: number
}

const useTemplateStyles = makeStyles(() => ({
	root: (props: TemplateStyles) => ({
		width: props.templateWidth,
		backgroundColor: '#fff',
		overflow: 'auto',
		padding: 24,
		margin: '0 auto',
		border: '1px solid rgba(196, 196, 196, 0.5)'
	}),
	mediaCard: {
		margin: 16
	},
	showName: {
		fontWeight: 'bold'
	},
	showEpisodes: {
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
