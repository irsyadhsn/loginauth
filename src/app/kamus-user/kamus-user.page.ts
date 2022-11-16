import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-kamus-user',
  templateUrl: './kamus-user.page.html',
  styleUrls: ['./kamus-user.page.scss'],
})
export class KamusUserPage {
  kata: any;
  arti: any;
  words: any[];
  constructor(
    public _apiService: ApiService,
    private alertController: AlertController,
    public loadingController: LoadingController
  ) {
    this.getWords();
  }

  ngOnInit() {
    console.log('Cek fungsi halaman event init jalan');
  }

  ionViewDidEnter() {
    console.log('jika selesai loading');
    this.getWords();
  }

  getWords() {
    this._apiService.getWords().subscribe(
      (res: any) => {
        console.log('sukses');
        this.words = res;
      },
      (error: any) => {
        console.log('gagal', error);
        this.alertController
          .create({
            header: 'Notifikasi',
            message: 'Gagal memuat kata',
            buttons: ['OK'],
          })
          .then((res) => {
            res.present();
          });
      }
    );
  }

  deleteWord(id) {
    this.alertController
      .create({
        header: 'perhatian',
        subHeader: 'Yakin menghapus data ini?',
        buttons: [
          {
            text: 'Batal',
            handler: (data: any) => {
              console.log('dibatalkan', data);
            },
          },
          {
            text: 'Yakin',
            handler: (data: any) => {
              //jika tekan yakin
              this._apiService.deleteWord(id).subscribe(
                (res: any) => {
                  console.log('sukses', res);
                  this.getWords();
                },
                (error: any) => {
                  console.log('error', error);
                  this.alertController
                    .create({
                      header: 'Notifikasi',
                      message: 'gagal memuat kata',
                      buttons: ['OK'],
                    })
                    .then((res) => {
                      res.present();
                    });
                }
              );
            },
          },
        ],
      })
      .then((res) => {
        res.present();
      });
  }
}
