import LoginForm from "../components/auth/LoginForm";
import ResgisterForm from "../components/auth/ResgisterForm";

const Auth = ({ authRoute }) => {

    let body

    body = (
        <>
            { authRoute === 'login' && <LoginForm /> }
            { authRoute === 'resgister' && <ResgisterForm /> }
        </>
    )

    return (
        <div className='landing'>
			<div className='dark-overlay'>
				<div className='landing-inner'>
					<h1>LearnIt</h1>
					<h4>Keep track of what you are learning</h4>
					{body}
				</div>
			</div>
		</div>
    )
}

export default Auth
