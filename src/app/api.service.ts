import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(public http: HttpClient) {}

  // link api
  apiURL() {
    return 'http://localhost:8012/api';
  }

  getWords() {
    return this.http.get(this.apiURL() + '/tampil.php');
  }

  deleteWord(id) {
    return this.http.delete(this.apiURL() + '/hapus.php?id=' + id);
  }

  editWord(id) {
    return this.http.get(this.apiURL() + '/lihat.php?nim=' + id);
  }
}
