import { Component, OnInit } from '@angular/core';
import { APIrouteService } from 'src/app/services/apiroute.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  img: File;
  id: string = "3";

  constructor(private api: APIrouteService, private http: HttpClient) { }

  ngOnInit(): void {
  }

  selectionImage(form)
  {
    this.img = form.files[0];   
  }

  onUpload()
  {
    const upload = new FormData();
    upload.append('img', this.img, this.img.name);
    upload.append('id', this.id);

    this.api.Envoie(upload).subscribe(
      (event) =>
      {
        console.log(event);
      });
  }

}
