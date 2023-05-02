import React from "react";

interface WelcomeProps {
    user: {
        name: string,
        age: number,
    },
    label: string
}

class Welcome extends React.Component<WelcomeProps> {
    name = '';
    age = 0;

    render() {
        // console.log(this.props);
        const {user, label} = this.props;

        return <p style={{'color': label}}> Hello,  {user.name}</p>;
    }

}

export default Welcome;
/*table  переделать в единный компонент создать новый файл селери тсх там будет компонент выводит велком дальше в селерис передаем список зарплат из этого списка нужно превратить в таблицу таблирца с селери */ 