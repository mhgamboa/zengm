import { Fragment, memo } from "react";
import { AD_DIVS, GAME_ACRONYM, SUBREDDIT_NAME } from "../../common";

const footerLinks = [
	{
		url: "https://zengm.com/",
		title: "About",
	},
	{
		url: "https://zengm.com/blog/",
		title: "Blog",
	},
	{
		url: "https://zengm.com/contact/",
		title: "Contact",
	},
	{
		url: "https://zengm.com/privacy/",
		title: "Privacy",
	},
	{
		url: "https://github.com/zengm-games/zengm",
		title: "GitHub",
	},
	{
		url: `https://www.reddit.com/r/${SUBREDDIT_NAME}/`,
		title: "Reddit",
	},
	{
		url: "https://discord.gg/caPFuM9",
		title: "Discord",
	},
];

const Footer = memo(() => {
	// banner-ad class is so ad blockers remove it cleanly. I'm so nice!
	return (
		<footer className="footer-wrapper mt-auto" id="main-footer">
			<p className="clearfix" />

			<div
				className="banner-ad"
				style={{
					position: "relative",
				}}
			>
				<div
					id={`${AD_DIVS.rectangle1}_disabled`}
					style={{
						display: "none",
						textAlign: "center",
						height: "250px",
						position: "absolute",
						top: "5px",
						left: 0,
					}}
					data-refresh-time="-1"
				/>
				<div
					id="bbgm-ads-logo"
					style={{
						display: "none",
						height: "250px",
						margin: "5px 320px 0 320px",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<img
						alt=""
						src={`https://zengm.com/files/logo-${process.env.SPORT}.png`}
						style={{
							maxHeight: "100%",
							maxWidth: "100%",
						}}
					/>
				</div>
				<div
					id={`${AD_DIVS.rectangle2}_disabled`}
					style={{
						display: "none",
						textAlign: "center",
						height: "250px",
						position: "absolute",
						top: "5px",
						right: 0,
					}}
					data-refresh-time="-1"
				/>
			</div>

			<div className="clearfix" />
			<hr />

			<p className="float-sm-start">
				{footerLinks.map(({ url, title }, i) => {
					return (
						<Fragment key={url}>
							{i > 0 ? " · " : null}
							<a href={url} rel="noopener noreferrer" target="_blank">
								{title}
							</a>
						</Fragment>
					);
				})}
				<br />
			</p>
			<p className="float-sm-end text-muted">
				{GAME_ACRONYM} v{window.bbgmVersion}
			</p>
		</footer>
	);
});

export default Footer;
