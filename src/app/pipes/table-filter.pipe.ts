import { Pipe, PipeTransform } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiResponseInterface } from 'src/app/models/apiResponse.interface';
import { FormControlsInterface } from 'src/app/models/formConstrols.interface';
import * as flatten from 'flat';

@Pipe({
  name: 'tableFilter',
})
export class TableFilterPipe implements PipeTransform {
  transform(
    dataSource: MatTableDataSource<ApiResponseInterface[]>,
    formControls: FormControlsInterface
  ): MatTableDataSource<ApiResponseInterface[]> {

    const filterData: MatTableDataSource<any> = new MatTableDataSource(dataSource.data);
    filterData.paginator = dataSource.paginator;
    const flattenControls = flatten(formControls);

    return this.isEmpty(flattenControls)
      ? dataSource
      : this.filter(filterData, formControls);
  }

  private filter(
    filterData: MatTableDataSource<ApiResponseInterface[]>,
    formControls: FormControlsInterface
  ): MatTableDataSource<ApiResponseInterface[]> {
    for (const control in formControls) {
      if (formControls[control]?.length > 0 || formControls[control]?.from) {
        filterData.data = filterData.data.filter(
          (res: ApiResponseInterface[]) => {
            if (control === 'outputDate') {
              const dateFromInSeconds = Date.parse(formControls[control].from);
              const dateToInSeconds = Date.parse(formControls[control].to);
              return (
                Date.parse(res[control].date) >= dateFromInSeconds &&
                Date.parse(res[control].date) <= dateToInSeconds
              );
            }
            if (control === 'outputNumber') {
              const resivedStr = formControls[control].toString().toUpperCase().trim();
              return res[control].includes(resivedStr);
            }
            return formControls[control].includes(res[control]);
          }
        );
      }
    }
    return filterData;
  }

  private isEmpty(obj: any): boolean {
    return Object.values(obj).every((i) => {
      if (Array.isArray(i) || i === null) {
        return i === null || i.length === 0 ? true : false;
      }
    });
  }
}
