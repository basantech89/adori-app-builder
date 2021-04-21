import { makeStyles } from '@material-ui/core'

type TemplateStyles = {
	templateWidth: number
	maxWidth: number
}

const useTemplateStyles = makeStyles((theme) => ({
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
	},
	card: ({ maxWidth }: { maxWidth: number }) => ({
		boxSizing: 'content-box',
		margin: '10px 10px',
		maxWidth: maxWidth
	}),
	content: {
		backgroundColor: theme.palette.secondary.main,
		color: theme.palette.secondary.contrastText,
		minHeight: 78,
		boxSizing: 'border-box'
	},
	playIcon: {
		marginRight: 12
	},
	footerTitle: {
		maxWidth: 166,
		lineHeight: 1.45,
		lineClamp: 2,
		overflow: 'hidden',
		textOverflow: 'ellipsis',
		display: '-webkit-box',
		boxOrient: 'vertical'
	}
}))

export default useTemplateStyles
