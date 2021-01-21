import { Component, OnInit, AfterViewInit } from '@angular/core';
import { JugadoresApiService } from '../../servicio/jugadores-api.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table'
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})


export class GridComponent implements AfterViewInit {

  dataSource = new MatTableDataSource();
  displayedColumns = ['color', 'id', 'first_name', 'last_name', 'height_feet', 'height_inches', 'weight_pounds', 'position'];
  expandedElement: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  team:any;


  constructor(
    private _jugadoresApi: JugadoresApiService

  ) { }

  ngOnInit(): void {
    this.playersApi();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  playersApi() {

    this._jugadoresApi.servicioPlayersApi().subscribe(resp => {
      this.dataSource.data = resp;
    });
    
  }

  filtroListado(event: Event) {
    
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }

  }


  getASpecificTeam(id: string) {

    this.team = {};
    this._jugadoresApi.servicioGetASpecificTeam(id).subscribe(resp => {
      this.team = resp;
    });

  }
}
