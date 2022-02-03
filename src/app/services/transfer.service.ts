import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

// import { Repository } from '../interfaces/repo';
import { Transfer } from '../interfaces/transfer';
import { Transfers } from '../mocks/transfers';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class TransferService {
  constructor(private http: HttpClient) {}

  configUrl = 'https://jsonplaceholder.typicode.com';

  getTransfers(): Observable<Transfer[]> {
    // return this.http.get<Collaborator[]>(`${collaborators_url}`);
    return of(Transfers);
  }
}
