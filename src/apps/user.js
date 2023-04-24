import { useState } from "react";

export function User(user) {
    
    return <>

        <div>User: {user.user.name} {user.user.last_name}</div>
        <div>Age: {user.user.age}</div>
        <div>Pet: {user.user.cat.name}</div>
        <div>Pet age: {user.user.cat.age}</div>
        
    </>;
    };

// есть объект юзер есть имя фам возраст кот и зп нужно создать компонент юзер, который будет выводить эти данные 

//props хуки..рирендеринг(rendering визуализация).. компонент.. состояние.. зарекурсить., npm start npm i (для создания node modules) 