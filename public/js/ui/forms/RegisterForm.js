/**
 * Класс RegisterForm управляет формой
 * регистрации
 * */
class RegisterForm extends AsyncForm {
  /**
   * Производит регистрацию с помощью User.register
   * После успешной регистрации устанавливает
   * состояние App.setState( 'user-logged' )
   * и закрывает окно, в котором находится форма
   * */
  onSubmit(data) {
    User.register(data, (err, response) => {
      if (response && response.success) {
        this.element.reset();
        App.getModal('register').close();
        App.setState('user-logged');
      } else {
        console.log(err);
        console.log('Неверный Логин или Пароль');
      }
    });
  }
}
