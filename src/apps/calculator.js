import { useState } from "react"

export function Calculator(props) {
    const [text, setText] = useState('');

    console.log(props);

    return <>

        <p>{text}</p>
        <input type='text' placeholder="Text" onChange={(event)=> {
          
        //    text = event.target.value;

        setText(event.target.value);

        }}/>;
    </>;
}
// есть объект юзер есть имя фам возраст кот и зп нужно создать компонент юзер, который будет выводить эти данные 

//props хуки..рирендеринг(rendering визуализация).. компонент.. состояние.. зарекурсить., npm start npm i (для создания node modules) 