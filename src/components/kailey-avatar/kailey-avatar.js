import React from 'react';
import { StaticQuery, navigate, graphql } from 'gatsby';
import Img from 'gatsby-image/withIEPolyfill';

const Avatar = ({ data }) => {
	return (
		<div
			role="button"
			tabIndex={0}
			onKeyDown={() => navigate(`/contact`)}
			onClick={() => navigate(`/contact`)}
			style={{ cursor: 'pointer' }}>
			<Img
				fluid={data.avatar.childImageSharp.fluid}
				objectFit="cover"
				alt="kailey-avatar"
			/>
		</div>
	);
};

const KaileyAvatar = () => {
	return (
		<StaticQuery
			query={graphql`
				query {
					avatar: file(relativePath: { eq: "kailey-avatar-high-res.png" }) {
						childImageSharp {
							fluid(quality: 100, maxWidth: 400) {
								...GatsbyImageSharpFluid
							}
						}
					}
				}
			`}
			render={(data) => <Avatar data={data} />}
		/>
	);
};

export default KaileyAvatar;
