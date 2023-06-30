/**
 * Класс Sidebar отвечает за работу боковой колонки:
 * кнопки скрытия/показа колонки в мобильной версии сайта
 * и за кнопки меню
 * */
class Sidebar {
  /**
   * Запускает initAuthLinks и initToggleButton
   * */
  static init() {
    this.initAuthLinks();
    this.initToggleButton();
  }

  /**
   * Отвечает за скрытие/показа боковой колонки:
   * переключает два класса для body: sidebar-open и sidebar-collapse
   * при нажатии на кнопку .sidebar-toggle
   * */
  static initToggleButton() {
    const sideBar = document.querySelector('.sidebar-mini');
    const sideBarButton = document.querySelector('.sidebar-toggle');

    function changeBody() {
      sideBar.classList.toggle('sidebar-open');
      sideBar.classList.toggle('sidebar-collapse');
    }

    sideBarButton.addEventListener('click', changeBody);
  }

  /**
   * При нажатии на кнопку входа, показывает окно входа
   * (через найденное в App.getModal)
   * При нажатии на кнопку регастрации показывает окно регистрации
   * При нажатии на кнопку выхода вызывает User.logout и по успешному
   * выходу устанавливает App.setState( 'init' )
   * */

  static initAuthLinks() {
    const menuLogin = document.querySelector('.menu-item_login');
    const menuRegister = document.querySelector('.menu-item_register');
    const menuLogout = document.querySelector('.menu-item_logout');

    menuLogin.addEventListener('click', () => App.getModal('login').open());

    menuRegister.addEventListener('click', () => App.getModal('register').open());

    menuLogout.addEventListener('click', () => User.logout(() => { App.setState('init'); }));
  }
}
