import Spline from "@splinetool/react-spline"
import Styled from "styled-components"

import IconLaptop from './images/icon-laptop.svg'
import IconYouTube from './images/icon-youtube.svg'
import IconTwitter from './images/icon-twitter.svg'
import Logo from './images/logo.svg'

const Wrapper = Styled.div`
	font-size: 1rem;
	color: #FFF;
	margin: 0 auto;
	min-height: 100%;
	display: flex;
	flex-direction: column-reverse;
	
	@media (min-width: 1024px) {
		position: relative;
	}

	.spline {
		transform: scale(0.8);
		margin: 5rem auto;
		
		@media (min-width: 1024px) {
			position: absolute;
			transform: scale(1);
		}
	}
`

const Content = Styled.div`
	position: relative;
	top: 30px;
	display: flex;
	flex-direction: column;
	gap: 2rem;
	
	@media (min-width: 1024px) {
		position: absolute;
	}

	h1 {
		font-family: 'Spline Sans Mono', 'sans-serif';
		font-weight: 600;
		font-size: 4rem;
		max-width: 500px: 
	}

	p {
		font-weight: 400;
		line-height: 180%;
		max-width: 380px;
	}

	h1, p, button {
		margin: 0 30px 0 100px;
	}

	button {
		background: rgba(0, 0, 0, 0.2);
		border: 0px;
		font-size: 16px;
		padding: 12px 38px;
		border-radius : 14px;
		border: 1px solid rgba(255, 255, 255, 8.1);
		color: white;
		max-width: 280px;
		display: flex;
		gap: 1rem;
		justify-content: center;
		align-items: center;
		transition: all ease 1s;
		
		:hover {
			border: 1px solid rgba(255, 255, 255, 0.8);
			transform: translateY(-3px);
		}
	}
`

const Menu = Styled.ul`
	display: flex; 
	gap: 30px;
	align-items: center;
	margin: 0 30px 0 100px;

	li {
		list-style: none;
		
		a {
			text-decoration: none;
			color: #FFF;
			padding: 8px 20px;
			border: 1px solid rgba(255, 255, 255, 0);
			border-radius: 14px;
			
			:hover {
				border: 1px solid rgba(255, 255, 255, 0.2);
			}
		}
	}
`

const Social = Styled.div`
	position: absolute;
	top: 150px;
	left: 30px;
	display: flex;
	flex-direction: column;
	gap: 30px;
	align-items: center;

	span {
		width: 1px;
		height: 500px;
		background: linear-gradient(
			180deg,
			#08b6f9 0%,
			#6c56ef 33.57%,
			#1306dd 66.86%,
			#aa0eb2 100%
		);
	}
	
`

const App = () => {
	return (
		<>
			<Wrapper>
				<Spline
					className="spline"
					scene="https://prod.spline.design/I73gDDGyti8hMHis/scene.splinecode"
				/>
				<Content>
					<Menu>
						<li>
							<img src={Logo} alt="Logo" />
						</li>
						<li><a href="#">Home</a></li>
						<li><a href="#">Download</a></li>
						<li><a href="#">App</a></li>
						<li><a href="#">Get Started</a></li>
					</Menu>
					<h1>Collaborate with people</h1>
					<p>
						Bring your team together and build your community by
						using our cross-platform app that lets you collaborate
						via chat, voice and by sharing and storing unlimited
						media files. A world of topics is waiting for you. Join
						the private beta.
					</p>
					<button>
						<img src={IconLaptop} alt="Download" />
						Download for Mac
					</button>
				</Content>
				<Social>
					<span />
					<img src={IconTwitter} alt="Twitter" />
					<img src={IconYouTube} alt="YouTube" />
				</Social>
			</Wrapper>
		</>
	)
}

export default App
