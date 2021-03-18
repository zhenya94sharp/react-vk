import React from 'react'
import Button from 'react-bootstrap/Button';
import $, { data } from 'jquery';

export default function Search(){

    async function SearchClick() {
        $.ajax({
            url: 'https://api.vk.com/method/groups.search?q=&count=1&access_token=&v=5.130',
            
            type: 'GET',
            dataType: 'jsonp',
            crossDomain: true,
            success: function(data){
            console.log(data);}
            })
    }
    return(
        <div>
        <input type="text" placeholder="введите название"></input>
        <p></p>
            <Button onClick={SearchClick}>Поиск сообщества</Button>
        </div>  
    )
}