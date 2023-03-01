import { Pipe, PipeTransform } from '@angular/core';
import { StudentService } from '../services/student.service';

@Pipe({
  name: 'studentName'
})
export class StudentNamePipe implements PipeTransform {

transform(element: any): any {
  let nameEdit: string;
  nameEdit = element.name + ' ' + element.lastName;
  //console.log(nameEdit);
  return nameEdit;
}

}
