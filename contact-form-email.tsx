interface ContactFormEmailProps {
	name: string;
	email: string;
	phone: string;
	message: string;
}

const ContactFormEmail: React.FC<Readonly<ContactFormEmailProps>> = ({
	name,
	email,
	phone,
	message
}) => (
	<div>
		<h3>Someone has applied!</h3>
		<p>
			From <strong>{name}</strong> at {email}
		</p>
		<h3>Phone Number:</h3>
		<p>{phone}</p>
		<h3>Message:</h3>
		<p>{message}</p>
	</div>
);

export default ContactFormEmail;