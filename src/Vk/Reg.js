import React from 'react'
import Button from 'react-bootstrap/Button';
import $ from 'jquery';

export default function Reg(){

    async function RegistClick() {

        window.location.href ="https://oauth.vk.com/authorize?client_id=7786194&display=page&redirect_uri=https://oauth.vk.com/blank.html&scope=groups&response_type=token&v=5.130&state=123456"


    }

    return(
        <div>
            <Button onClick={RegistClick}>Регистрация</Button>
        </div>  
    )
}