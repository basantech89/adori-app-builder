import {
	Box,
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Fab,
	makeStyles,
	Typography
} from '@material-ui/core'
import { PlayArrow } from '@material-ui/icons'
import clsx from 'clsx'
import React from 'react'

import useTraceUpdate from '../../utils/hooks/useTraceUpdate'

export const useCardStyles = makeStyles((theme) => ({
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

declare interface MediaCardProps {
	imgSrc: string
	footerTitle: string
	maxWidth: number
	className?: string
	footerBtn: React.ReactNode
}

const MediaCard: React.FC<MediaCardProps> = React.memo((props) => {
	const classes = useCardStyles({ maxWidth: props.maxWidth })
	useTraceUpdate(props, 'MediaCard')

	return (
		<Card className={clsx(classes.card, props.className)}>
			<CardActionArea>
				<CardMedia
					image={props.imgSrc}
					component='img'
					alt='album cover'
					title='Album Cover'
				/>
				<CardContent className={classes.content}>
					<Box
						display='flex'
						alignItems='center'
						justifyContent='space-between'
					>
						<Box display='flex' alignItems='center'>
							<Fab
								color='primary'
								aria-label='play episode'
								className={classes.playIcon}
								size='small'
							>
								<PlayArrow />
							</Fab>
							<Typography className={classes.footerTitle} variant='subtitle1'>
								{props.footerTitle}
							</Typography>
						</Box>
						{props.footerBtn}
					</Box>
				</CardContent>
			</CardActionArea>
		</Card>
	)
})

export default MediaCard
