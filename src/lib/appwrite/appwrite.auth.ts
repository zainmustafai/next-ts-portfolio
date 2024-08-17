// https://appwrite.io/docs/products/auth/email-password
import { Client, Account, ID } from "appwrite";

const projectID = process.env.APPWRITE_PROJECT_ID || '';
const endpoint = process.env.APPWRITE_ENDPOINT || '';

const client = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("66b7a76a002616351501");// Your project ID

const account = new Account(client);

export const SignupUser = async (email: string, password: string, name: string,) => {
    const id = ID.unique();
    if (!id) {
        throw new Error("Invalid ID");
    };
    const promise = account.create(id, email, password, name);
    promise.then((response) => {
        console.log(response); // Success
    }, (error) => {
        console.log(error); // Failure
    });
};

export const LoginUser = async (email: string, password: string) => {
    const promise = account.createEmailPasswordSession(email, password);
    promise.then((response) => {
        console.log(response); // Success
    }, (error) => {
        console.log(error); // Failure
    });
};