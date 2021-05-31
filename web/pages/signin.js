import Head from 'next/head'
import { Box } from '@material-ui/core';
import SignInSide from '../components/modules/SignInSide'
import useUser from '../utils/UserHook'
import cookies from 'next-cookies'

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


export async function getServerSideProps(context) {
    if(cookies(context).jwt){ //Reload?
        const { res } = context;
        res.setHeader("location", "/");
        res.statusCode = 302;
        res.end();
    }
    return {
      props: {},
    }
  }