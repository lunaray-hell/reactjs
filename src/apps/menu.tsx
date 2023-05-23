import React from 'react';

class Menu extends React.Component {
    render() {
        return <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Переключатель навигации">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="#">Панель навигации</a>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Главная</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Ссылка</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Отключенная</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <button className="btn btn-outline-success" type="submit">Поиск</button>
            </form>
          </div>
        </div>
      </nav>;
    }
}

export default Menu;