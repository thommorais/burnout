import SS from './social.module.css'

import FacebookIcon from 'icons/Facebook'
import InstagramIcon from 'icons/Instagram'
import YoutubeIcon from 'icons/Youtube'

function SocialMedia() {
	return (
		<div className={SS.followUs}>
			siga nos
			<ul className={SS.socialMediaList}>
				<li className={SS.socialMediaIcon}>
					<a>
						<FacebookIcon />
					</a>
				</li>
				<li className={SS.socialMediaIcon}>
					<a>
						<YoutubeIcon />
					</a>
				</li>
				<li className={SS.socialMediaIcon}>
					<a>
						<InstagramIcon />
					</a>
				</li>
			</ul>
		</div>
	)
}

export default SocialMedia
