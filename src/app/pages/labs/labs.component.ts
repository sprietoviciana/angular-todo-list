import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-labs',
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.scss',
})
export class LabsComponent {
  //estas clases son publicas, si le ponemos private delante, solo podremos utilizarlas en la clase
  welcome = 'Hola!';
  tasks = signal([
    'Instalar el Angular CLI',
    'Crear proyecto',
    'Crear componentes',
  ]);

  person = signal({
    name: 'Silvia',
    img: 'https://w3schools.com/howto/img_avatar.png',
    age: 36,
  });
  name = signal('Zelda');

  clickHandler() {
    alert('HOLA');
  }

  changeHandler(event: Event) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.name.set(newValue);
  }

  //La siguiente función maneja el evento de keydown,logrando capturar detalles como qué tecla fue presionada y sobre qué elemento se efectuó la acción
  keydownHandler(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    console.log(input.value);
  }

  changeAge(event: Event) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.person.update((prevState) => {
      return {
        ...prevState,
        age: parseInt(newValue, 10),
      };
    });
  }

  changeName(event: Event) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.person.update((prevState) => {
      return {
        ...prevState,
        name: newValue,
      };
    });
  }
}
