import IdeasBox from "../components/IdeasBox";

export default function Importance(){
	return (

		<section id="importance">
			<p class="quote">
				“Web development is a fundamental aspect of modern society,
				empowering individuals and businesses to communicate, learn,
				conduct business, and connect with others in the digital world.”
			</p>

			<div class="facts-container">

				<IdeasBox
				title="CONNECT PEOPLE"
				content="Websites facilitate communication and interaction across the globe."

				/>

				<IdeasBox
				title="DRIVE BUSINESS"
				content="Online platforms enable e-commerce, marketing, and customer engagement."

				/>

				<IdeasBox
				title="EDUCATION & INFORM"
				content="Websites offer diverse educational resources and knowledge sharing opportunities."
				/>

				<IdeasBox
				title="ENTERTAIN & ENGAGE"
				content="Online content, games, and social media platforms provide entertainment and social interaction."
				/>

				<IdeasBox
				title="INNOVATIVE & ADVANCE"
				content="Web development fuels technological advancements and drives digital transformation."
				/>

				<IdeasBox
				title="ACCESSIBILITY"
				content="Ensuring information and services are available to people with disabilities, promoting inclusivity."
				/>

			</div>




		</section>

		)
}