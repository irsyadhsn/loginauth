import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { ApiService } from '../api.service';
import { Http } from '@capacitor-community/http';

@Component({
  selector: 'app-mahasiswa-edit',
  templateUrl: './mahasiswa-edit.page.html',
  styleUrls: ['./mahasiswa-edit.page.scss'],
})
export class KamusEditPage implements OnInit {
  id: any;
  kata: any;
  arti: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public _apiService: ApiService,
    private alertController: AlertController,
    public LoadingController: LoadingController
  ) {
    this.route.params.subscribe((param: any) => {
      this.id = param.id;
      console.log(this.id);
      this.getWordData(this.id);
    });
  }

  ngOnInit() {}

  getWordData(id) {
    this._apiService.editWord(id).subscribe(
      (res: any) => {
        console.log('sukses', res);
        let words = res;
        //console.log(mahasiswa);
        this.kata = words.kata;
        this.arti = words.arti;
      },
      (error: any) => {
        console.log('error', error);
        alert('gagal ambil data');
      }
    );
  }

  editWord() {
    let url = this._apiService.apiURL() + '/edit.php';
    Http.request({
      method: 'POST',
      url: url,
      headers: { 'Content-Type': 'application/json' },
      data: {
        id: this.id,
        kata: this.kata,
        arti: this.arti,
      },
    }).then(
      (data) => {
        this.alertController
          .create({
            header: 'Notifikasi',
            message: 'Berhasil Edit Data Mahasiswa',
            buttons: ['OK'],
          })
          .then((res) => {
            res.present();
          });
        this.router.navigateByUrl('/mahasiswa');
      },
      (err) => {
        this.alertController
          .create({
            header: 'Notifikasi',
            message: 'Gagal Edit Data Mahasiswa',
            buttons: ['OK'],
          })
          .then((res) => {
            res.present();
          });
      }
    );
  }
}
