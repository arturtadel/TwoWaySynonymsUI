import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Synonym } from '../models/synonym';

@Injectable({
  providedIn: 'root'
})
export class SynonymsService {
  synonymsUrl = '/api/Synonym';
  constructor(private httpClient: HttpClient) { }


  getSynonyms(): Observable<Synonym[]>{
    return this.httpClient.get<Synonym[]>(this.synonymsUrl);
  }

  async createNew(synonym: Synonym): Promise<Synonym>{
    return await this.httpClient.post<Synonym>(this.synonymsUrl, synonym).toPromise();
  }

  delete(id: number): Observable<{}> {
    console.log(id);
    const url = `${this.synonymsUrl}/${id}`;
    return this.httpClient.delete<Observable<{}>>(url);
  }
}

