import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { of } from 'rxjs';
import * as moment from 'moment';

import { TransferService } from './../../services/transfer.service';

import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { Transfer } from '../../interfaces/transfer';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss'],
})
export class TransferComponent implements OnInit, AfterViewInit {
  transfers: Transfer[] = [];
  isLoading = of(false);
  dataSource = new MatTableDataSource<Transfer>();
  // dataSource = new MatTableDataSource();
  displayedColumns: string[] = [
    'accountHolder',
    'iban',
    'date',
    'amount',
    'note',
  ];
  @ViewChild(MatSort) sort!: MatSort;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private router: Router,
    private transferService: TransferService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.getTransfers();
  }

  getTransfers() {
    this.isLoading = of(true);
    this.transferService.getTransfers().subscribe(
      (res: Transfer[]) => {
        this.isLoading = of(false);
        if (!res.length) {
          return;
        }
        this.dataSource.data = res;
      },
      (error: HttpErrorResponse) => {
        this.isLoading = of(false);
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
          // client-side error
          errorMessage = `Error: ${error.error.message}`;
        } else {
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        this.showNotification(errorMessage);
      }
    );
  }

  //get date in comparision to current time
  convertDateToNow(date: string): string {
    return moment(date).fromNow();
  }

  showNotification(message: string) {
    this._snackBar.open(message, 'Ok', {
      duration: 2000,
      verticalPosition: 'top',
      horizontalPosition: 'right',
    });
  }

  onSelect(repository: any): void {
    const { id } = repository;
    this.router.navigateByUrl(`/repositories/${id}`);
  }

  applyFilter(e: any) {
    console.log(e);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  onMatSortChange() {
    this.dataSource.sort = this.sort;
  }
}
