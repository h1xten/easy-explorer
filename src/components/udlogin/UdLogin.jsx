import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import UAuth from '@uauth/js'
import { clearUD, setCurrentUD, setUserUD } from '../../store/udSlice'
import { Button } from 'antd'

const UdLogin = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const userUD = useSelector(state => state.UD.currentUD)

    const uauth = new UAuth({
        clientID: process.env.REACT_APP_CLIENT_ID,
        redirectUri: process.env.REACT_APP_REDIRECT_URI,
        scope: "openid wallet"
    })
    
    const unstoppableLogin = async () => {
        try {
            const user = await uauth.loginWithPopup()
            if (user) {
                dispatch(setUserUD(user))
                dispatch(setCurrentUD(user.idToken.wallet_address))
                navigate(`explore/${user.idToken.wallet_address}/1`)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const userLogOut = async () => {
        try {
            await uauth.logout()
            dispatch(clearUD())
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }


  return (
    <div className='ud_login'>
        {userUD ? 
            <>
                <Button type='primary' onClick={userLogOut}>
                    Logout
                </Button>
            </>
            :
            <>
                <Button type='primary' onClick={unstoppableLogin}>
                    Login with Unstoppable
                </Button>
            </>
        }
    </div>
  )
}

export default UdLogin