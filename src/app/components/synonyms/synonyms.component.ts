import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Synonym} from '../../models/synonym';
import {SynonymsService} from '../../services/synonyms.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-synonyms',
  templateUrl: './synonyms.component.html',
  styleUrls: ['./synonyms.component.css']
})
export class SynonymsComponent implements OnInit {
  currentSynonyms: Observable<Synonym[]>;
  constructor(private synonymsService: SynonymsService,
              private router: Router ) { }

  ngOnInit(): void {
    this.getSynonyms();
  }

  addNew(): void{
    this.router.navigate(['/synonyms/new']);
  }

  getSynonyms(): void{
    this.currentSynonyms = this.synonymsService.getSynonyms();
    console.log(this.currentSynonyms);
  }

  delete(id: number): void{
    this.synonymsService.delete(id).subscribe();
    this.getSynonyms();
  }
}
