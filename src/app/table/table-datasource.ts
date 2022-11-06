import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// need a 3rd row here . aa nahi rha hai ?
export interface TableItem {
  name: string;
  id: number;
}

// apprently no changes happen here ! 
const EXAMPLE_DATA: TableItem[] = [
  {id: 1, name: '	Ph.D. in Arts (Economics) from Center for Advanced Studies in Economics, Department of economics (Know as Mumbai School of Economics & Public Finance), University of Mumbai in year 2011. '},
  {id: 2, name: '	Masters in Economics (M.A. – Economics) from Center of Advanced Studies in Economics, Department of Economics, University of Mumbai, October 1994. '},
  {id: 3, name: '	Masters in Political Science (M.A. – Politics) from Department of Civics & Politics, University of Mumbai, November 1996.'},
  {id: 4, name: '	Bachelors in Economics (B.A. – Economics) from Vidyawardhini College (Affiliated to University of Poona), May 1992.'},
  {id: 5, name: '	Bachelor of Education (B.Ed) Gangamai College of Education, North Maharashtra University, May 1999.'},
  {id: 6, name: '	National Eligibility Test (NET – in Economics) by University Grant Commission (UGC – New Delhi) passed in year 2000. '},
  
];


export class TableDataSource extends DataSource<TableItem> {
  data: TableItem[] = EXAMPLE_DATA;
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor() {
    super();
  }
// if understood correctly i guess this can automatically innput the data from excels of whatever ?? find out more !
  connect(): Observable<TableItem[]> {
    if (this.paginator && this.sort) {
      
      return merge(observableOf(this.data), this.paginator.page, this.sort.sortChange)
        .pipe(map(() => {
          return this.getPagedData(this.getSortedData([...this.data ]));
        }));
    } else {
      throw Error('excel data');
    }
  }

  
  disconnect(): void {}

  
  private getPagedData(data: TableItem[]): TableItem[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  private getSortedData(data: TableItem[]): TableItem[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
