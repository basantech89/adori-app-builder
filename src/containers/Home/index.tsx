import { Box, Button, Divider, Fab, Typography } from '@material-ui/core'
import { ShareRounded } from '@material-ui/icons'
import React from 'react'

import MediaCard from '../../components/MediaCard'
import useGlobalStates from '../../GlobalStates'
import template from '../../INPUTJSON'
import { useAppSelector } from '../../store'
import { selectBackground } from '../../store/state/background'
import { startWithUpperCase } from '../../utils/common'
import useTemplateStyles from './styles'

const Home: React.FC = () => {
	const { templateWidth } = useGlobalStates()
	const { colors } = useAppSelector(selectBackground)
	const { show, episodes } = template

	const classes = useTemplateStyles({
		templateWidth,
		bgColor: colors[0]
	})

	return (
		<div className={classes.root}>
			<Box display='flex' alignItems='center' flexWrap='wrap'>
				<MediaCard
					imgSrc={show.image.originalUrl}
					footerTitle='Play latest'
					maxWidth={444}
					footerButton={
						<Button size='large' variant='contained' color='primary'>
							Subscribe
						</Button>
					}
				/>
				<Box mt={4} ml={4}>
					<Typography className={classes.showName} variant='h5'>
						{show.name}
					</Typography>
					<div className={classes.showDescription}>
						{episodes.length} Episodes
					</div>
				</Box>
			</Box>
			<Divider className={classes.divier} />
			<Typography variant='h6'> Description </Typography>
			<div
				className={classes.description}
				dangerouslySetInnerHTML={{ __html: show.description }}
			/>
			<Typography variant='h6'> Episodes </Typography>
			<Box display='flex' flexDirection='row' flexWrap='wrap' m='0 -10px'>
				{episodes.map((episode: any) => (
					<MediaCard
						key={episode.uid}
						imgSrc={episode.image.originalUrl}
						maxWidth={300}
						footerButton={
							<Fab
								color='primary'
								aria-label='share album'
								size='medium'
								className={classes.shareIcon}
							>
								<ShareRounded />
							</Fab>
						}
						footerTitle={startWithUpperCase(episode.name)}
					/>
				))}
			</Box>
		</div>
	)
}

export default Home
