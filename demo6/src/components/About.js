import User from './User'
import UserClass from './UserClass'
const About = () => {
    return (
        <div className="about">
            <h1>About Us</h1>
            <p>
                Welcome to our website! We are dedicated to providing the best
                service possible. Our team is passionate about what we do and
                always strives for excellence.
            </p>
            <p>
                If you have any questions, feel free to reach out to us. We are
                here to help!
            </p>
            <User name="Avinash (Functional)" />
            <UserClass
                name="Avinash (Class)"
                location="Bangalore (Class based)"
            />
        </div>
    )
}
export default About
