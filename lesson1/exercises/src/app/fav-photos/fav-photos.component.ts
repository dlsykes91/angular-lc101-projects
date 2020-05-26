import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Favorite Images';
  image1 = 'https://www.launchcode.org/assets/icons/trophy-95e8cbe9bfda44123422302951deb1c92a237d39052669b8fbfafec00cb4f608.png';
  image2 = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.deviantart.com%2Fartimaii%2Fart%2FChibi-Kurama-703234464&psig=AOvVaw3irwyURQCzhwCzuiW2AV9b&ust=1590540329655000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiQ9--m0OkCFQAAAAAdAAAAABAD';
  image3 = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.com%2FDans-Decals-Akatsukis-Sticker-Uzamaki%2Fdp%2FB07D5JXSJQ&psig=AOvVaw3YJIV73ERE33VuWgIMO40Y&ust=1590586784234000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLCHgvfT0ekCFQAAAAAdAAAAABAI';

  constructor() { }

  ngOnInit() {
  }

}