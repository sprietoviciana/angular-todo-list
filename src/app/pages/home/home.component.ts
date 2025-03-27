import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  tasks = signal<Task[]>([
    {
      id: Date.now(),
      title: 'Crear proyecto',
      completed: true,
    },
    {
      id: Date.now(),
      title: 'Crear componentes',
      completed: true,
    },
  ]);

  changeHandler(event: Event) {
    const input = event.target as HTMLInputElement;
    const newTask = input.value;
    this.addTask(newTask);
  }

  addTask(title: string) {
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    };
    this.tasks.update((tasks) => [...tasks, newTask]); //update te permite añadir o modificar un nuevo valor pero no borrarlo o modificarlo desde cero;
  }

  deleteTask(index: number) {
    this.tasks.update(
      (tasks) => tasks.filter((tasks, position) => position !== index) //esto filtra y elimina la tarea correspondiente
    );
  }

updateTask(){
   
}

}
