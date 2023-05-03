import {useRouter} from 'next/router';
import {useEffect} from 'react';
import axiosWithAuth from "../axios-config";


export default function Home(styles) {
  const router = useRouter()

  function checkTokenResponseStatus(){
      const response = axiosWithAuth.get(process.env.NEXT_PUBLIC_API_URL + "sec/always-no-auth", {
        headers: { 
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods':'GET, POST,DELETE,PATCH,OPTIONS',
          },
        responseType: "json",  
    })
    .then (response => {
        console.log(response)
    })
    .catch (error => {
        console.log(error)
    })
  }

  useEffect(() => {
    // console.log(AuthService.checkTokenResponseStatus('token'))
  },[])

  const sendQuery = () => {
    const message = process.env.NEXT_PUBLIC_CREATE_ACCOUN_SUCCESSFULLY
    router.push({
      pathname: 'user/login',
      query: {
        data: message,
        message: "success"
      }
    }, 'user/login')
  }

  const AccordionContent = 'vv';

  return (
    <>
        {/* <header className="container">
          <h1 className="title is-1">Hello World!</h1>
        </header>
    <button onClick={() => UserServices.logout()}>Logout</button><br /><br />
    <button onClick={() => sendQuery()}>Login with query</button><br /><br />
    <button onClick={() => RefreshTokenService()}>refresh token</button><br /><br />

    <Link href='/user/register'>Register</Link><br />
    <Link href='/user/login'>Login</Link><br />
    <Link href='/user/profile'>Profile</Link><br /> */}


    </>
  );
}
