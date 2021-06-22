import { Auth } from 'aws-amplify';

export default async function signIn(username, password) {
    console.log(username,password);
    try {
        const user = await Auth.signIn(username, password);
        console.log("Logged in")
    } catch (error) {
        console.log('error signing in', error);
    }
}
