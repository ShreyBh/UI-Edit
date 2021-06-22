import { Auth } from 'aws-amplify';

async function signUp(username, email, password) {
    try {
        const { user } = await Auth.signUp({
            username,
            password,
            attributes: {
                email       // optional
             // optional - E.164 number convention
                // other custom attributes 
            }
        });
        console.log(user);
    } catch (error) {
        console.log('error signing up:', error);
    }
}
export default signUp;