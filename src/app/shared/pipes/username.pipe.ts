import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'username'
})
export class UserNamePipe implements PipeTransform {
  transform(value: {firstName: string, lastName: string}, locale: 'en' | 'fr' = 'fr'): string {
   return locale === 'fr' ?
    `${value.lastName.toUpperCase()} ${value.firstName[0].toUpperCase() + value.firstName.slice(1)}` :
    `${value.firstName} ${value.lastName}`;
  }
}
