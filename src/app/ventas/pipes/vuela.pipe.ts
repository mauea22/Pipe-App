import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'vuela'
})
export class VuelaPipe implements PipeTransform{

  transform(valor:boolean): string {

    if(valor){
      return 'puede volar';
    } else{
      return 'no puede volar';
    }
  }
}
