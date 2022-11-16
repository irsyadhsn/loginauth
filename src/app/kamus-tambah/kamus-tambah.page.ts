import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { ApiService } from '../api.service';
import { Http } from '@capacitor-community/http';

@Component({
  selector: 'app-kamus-tambah',
  templateUrl: './kamus-tambah.page.html',
  styleUrls: ['./kamus-tambah.page.scss'],
})
export class KamusTambahPage implements OnInit {
  kata: any;
  arti: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public _apiService: ApiService,
    private alertController: AlertController,
    public loadingController: LoadingController
  ) {}

  ngOnInit() {}

  addWord() {
    let url = this._apiService.apiURL() + '/tambah.php';
    Http.request({
      method: 'POST',
      url: url,
      headers: { 'Content-Type': 'application/json' },
      data: {
        kata: this.kata,
        arti: this.arti,
      },
    }).then(
      (data) => {
        this.kata = '';
        this.arti = '';
        this.alertController
          .create({
            header: 'Notifikasi',
            message: 'Berhasil Input data kata',
            buttons: ['OK'],
          })
          .then((res) => {
            res.present();
          });
        this.router.navigateByUrl('/kamus-user');
      },
      (error) => {
        this.alertController
          .create({
            header: 'Notifikasi',
            message: 'Gagal Input data kata',
            buttons: ['OK'],
          })
          .then((res) => {
            res.present();
          });
      }
    );
  }

  // addWord() {
  //   let url = this._apiService.apiURL() + '/tambah.php';
  //   Http.request({
  //     method: 'POST',
  //     url: url,
  //     headers: { 'Content-Type': 'application/json' },
  //     data: {
  //       kata: this.kata,
  //       arti: this.arti,
  //     },
  //   }).then(
  //     (data) => {
  //       this.kata = '';
  //       this.arti = '';
  //       this.alertController
  //         .create({
  //           header: 'Notifikasi',
  //           message: 'Berhasil menambahkan kata',
  //           buttons: ['OK'],
  //         })
  //         .then((res) => {
  //           res.present();
  //         });
  //       this.router.navigateByUrl('/kamus-user');
  //     },
  //     (error) => {
  //       this.alertController
  //         .create({
  //           header: 'Notifikasi',
  //           message: 'Gagal input data kata',
  //           buttons: ['OK'],
  //         })
  //         .then((res) => {
  //           res.present();
  //         });
  //     }
  //   );
  // }
}
