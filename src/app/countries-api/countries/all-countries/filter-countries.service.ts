import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
@Injectable()
export class FilterCountriesService {

  private $inputChange: Subject<string> = new Subject<string>();
  public inputChange$: Observable<string> = this.$inputChange.asObservable();

  private $selectChange: Subject<string> = new Subject<string>();
  public selectChange$: Observable<string> = this.$selectChange.asObservable();

  emitInputChange(filteredText: string) {
    this.$inputChange.next(filteredText.toLowerCase());
  }

  emitSelectChange(filteredSelect: string) {
    this.$selectChange.next(filteredSelect);
  }
}
