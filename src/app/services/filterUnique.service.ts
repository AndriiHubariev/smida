import { Injectable } from '@angular/core';
import { ApiResponseInterface } from '../models/apiResponse.interface';
import { UniqueFilterOptionsInterface } from '../models/uniqueFilterOptions.interface';

@Injectable({
  providedIn: 'root',
})
export class FilterUniqueService {
  constructor() {}

  getUniqueOptions(
    data: ApiResponseInterface[]
  ): UniqueFilterOptionsInterface {
    const uniqueValues: UniqueFilterOptionsInterface = {
      publicationType: [],
      termType: [],
      reportFormat: [],
      reportGroup: [],
      reportState: [],
    };
    data.forEach((item) => {
      for (const key in item) {
        if (key in uniqueValues) {
          uniqueValues[key].push(item[key]);
        }
      }
    });
    for (const i in uniqueValues) {
      uniqueValues[i] = [...new Set(uniqueValues[i])];
    }
    return uniqueValues;
  }
}
