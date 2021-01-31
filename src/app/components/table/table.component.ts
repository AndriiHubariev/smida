import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ApiResponseInterface } from 'src/app/models/apiResponse.interface';
import { DataSourceService } from 'src/app/services/data-source.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UniqueFilterOptionsInterface } from 'src/app/models/uniqueFilterOptions.interface';
import { FilterUniqueService } from 'src/app/services/filterUnique.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit, AfterViewInit, OnDestroy {
  private subs$ = new SubSink();
  public displayedColumns: string[] = [
    'publicationType',
    'termType',
    'reportGroup',
    'reportState',
    'reportFormat',
    'outputDate',
    'outputNumber',
    'actions',
  ];
  public uniqueFilterOptions: UniqueFilterOptionsInterface;
  public dataSource: MatTableDataSource<ApiResponseInterface> = new MatTableDataSource();

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  public form: FormGroup;
  public formValueChanges = [];

  constructor(
    private dataSourceService: DataSourceService,
    private fb: FormBuilder,
    private filterUniqueService: FilterUniqueService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.subs$.sink = this.dataSourceService
      .getTableData()
      .subscribe((res: ApiResponseInterface[]) => {
        this.dataSource.data = res;
        this.uniqueFilterOptions = this.filterUniqueService.getUniqueOptions(res);
      });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.subs$.sink = this.form.valueChanges.subscribe((res) => {
      this.formValueChanges = res;
    });
  }

  ngOnDestroy(): void {
    this.subs$.unsubscribe();
  }

  private initializeForm(): void {
    this.form = this.fb.group({
      publicationType: [],
      termType: [],
      reportFormat: [],
      reportGroup: [],
      reportState: [],
      outputDate: new FormGroup({
        from: new FormControl(),
        to: new FormControl(),
      }),
      outputNumber: [],
    });
  }

  public resetForm(): void {
    this.form.reset();
  }

  public deleteItem(id: number): void {
    this.subs$.sink = this.dataSourceService.delete(id).subscribe(() => {
     this.dataSource.data = this.dataSource.data.filter((i) => i.idReport !== id);
    });
  }
}
