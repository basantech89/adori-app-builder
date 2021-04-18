import { Box, Button, Divider, Fab, Typography } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core/styles'
import { ShareRounded } from '@material-ui/icons'
import React from 'react'

import MediaCard from '../../components/MediaCard'
import useGlobalStates from '../../GlobalStates'
import template from '../../INPUTJSON'
import { startWithUpperCase } from '../../utils/common'
import useAdoriTemplateTheme from './AdoriTemplateThemeProvider'
import useTemplateStyles from './styles'

const Home: React.FC = () => {
	const { templateWidth } = useGlobalStates()
	const { show, episodes } = template

	const { templateTheme } = useAdoriTemplateTheme()

	const classes = useTemplateStyles({
		templateWidth
	})

	return (
		<ThemeProvider theme={templateTheme}>
			<div className={classes.root}>
				<Box display='flex' alignItems='center' flexWrap='wrap' m={-2}>
					<MediaCard
						imgSrc={show.image.originalUrl}
						footerTitle='Play latest'
						maxWidth={444}
						className={classes.mediaCard}
						footerButton={
							<Button size='large' variant='contained' color='primary'>
								Subscribe
							</Button>
						}
					/>
					<Box m={2}>
						<Typography className={classes.showName} variant='h5'>
							{show.name}
						</Typography>
						<div className={classes.showEpisodes}>
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
							maxWidth={327}
							footerButton={
								<Fab
									color='primary'
									aria-label='share album'
									size='small'
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
		</ThemeProvider>
	)
}

export default Home
