import Head from 'next/head'
import { Box } from '@material-ui/core';
import SignInSide from '../components/modules/SignInSide'


export default function SignIn(){
    return(
        <>
            <Head>
                <title>
                    Trobify: Sign In
                </title>
            </Head>
            <Box minHeight="64px"></Box>
            <SignInSide></SignInSide>
        </>
    );
}