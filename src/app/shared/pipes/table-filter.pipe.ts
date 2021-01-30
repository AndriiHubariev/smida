import { Pipe, PipeTransform } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiResponseInterface } from 'src/app/models/apiResponse.interface';
import { FormControlsInterface } from 'src/app/models/formConstrols.interface';

const flatten = require('flat');

@Pipe({
  name: 'tableFilter',
})
export class TableFilterPipe implements PipeTransform {
  transform(
    dataSource: MatTableDataSource<ApiResponseInterface[]>,
    formControls: FormControlsInterface
  ): MatTableDataSource<ApiResponseInterface[]> {
    const filteredData: MatTableDataSource<any> = new MatTableDataSource(dataSource.data);
    const flattenControls = flatten(formControls);

    return this.isEmptyCheck(flattenControls)
      ? dataSource
      : this.filter(filteredData, formControls);
  }

  filter(
    filteredData,
    formControls
  ): MatTableDataSource<ApiResponseInterface[]> {
    for (const control in formControls) {
      if (formControls[control]?.length > 0 || formControls[control]?.from) {
        filteredData.data = filteredData.data.filter(
          (res: ApiResponseInterface) => {
            if (control === 'outputDate') {
              const dateFromSeconds = Date.parse(formControls[control].from);
              const dateToSeconds = Date.parse(formControls[control].to);
              return (
                Date.parse(res[control].date) >= dateFromSeconds &&
                Date.parse(res[control].date) <= dateToSeconds
              );
            }
            if (control === 'outputNumber') {
              const resivedStr = formControls[control]
                .toString()
                .toUpperCase()
                .trim();
              return res[control].includes(resivedStr);
            }
            return formControls[control].includes(res[control]);
          }
        );
      }
    }
    return filteredData;
  }

  isEmptyCheck(obj: any): boolean {
    return Object.values(obj).every((i) => {
      if (Array.isArray(i) || i === null) {
        return i === null || i.length === 0 ? true : false;
      }
    });
  }
}
