import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctors-commercial',
  templateUrl: './doctors-commercial.component.html',
  styleUrls: ['./doctors-commercial.component.scss']
})
export class DoctorsCommercialComponent implements OnInit {

  arrayTest = new Array(8);

  personal = [
      {
        "nombre": "Direccion",
        "personal": [
          {
            "nombre": "Pascual Sanchez Martín",
            "puesto": "Ginecolo",
            "ciudad": "Responsable del Área Médica de Ginemed",
            "cod": "123456798Q",
            "img": "https://www.ginemed.es/wp-content/uploads/2020/08/pascual-sanchez-ginecologo-445x332.jpg"
          },
          {
            "nombre": "Fernando Sanchez Martin",
            "puesto": "Ginécologo",
            "ciudad": "Responsable del Area de Reproduccion Asisitida de Ginemed",
            "cod": "123456798Q",
            "img": "https://www.ginemed.es/wp-content/uploads/2021/01/3_Fernando%20S%C3%A1nchez-445x319.png"
          }
        ]
      },
      {
        "nombre": "Sistemas Informaticos",
        "personal": [
          {
            "nombre": "Daniel Ojeda",
            "puesto": "Analista - Programador",
            "ciudad": "Sevilla",
            "cod": "123456798Q",
            "img": "https://www.ginemed.es/wp-content/uploads/2020/11/daniel-ojeda-analista-programador-445x332.jpg"
          },
          {
            "nombre": "Daniel Ojeda",
            "puesto": "Analista - Programador",
            "ciudad": "Sevilla",
            "cod": "123456798Q",
            "img": "https://www.ginemed.es/wp-content/uploads/2020/11/daniel-ojeda-analista-programador-445x332.jpg"
          },
          {
            "nombre": "Daniel Ojeda",
            "puesto": "Analista - Programador",
            "ciudad": "Sevilla",
            "cod": "123456798Q",
            "img": "https://www.ginemed.es/wp-content/uploads/2020/11/daniel-ojeda-analista-programador-445x332.jpg"
          },
          {
            "nombre": "Daniel Ojeda",
            "puesto": "Analista - Programador",
            "ciudad": "Sevilla",
            "cod": "123456798Q",
            "img": "https://www.ginemed.es/wp-content/uploads/2020/11/daniel-ojeda-analista-programador-445x332.jpg"
          },
          {
            "nombre": "Daniel Ojeda",
            "puesto": "Analista - Programador",
            "ciudad": "Sevilla",
            "cod": "123456798Q",
            "img": "https://www.ginemed.es/wp-content/uploads/2020/11/daniel-ojeda-analista-programador-445x332.jpg"
          },
          {
            "nombre": "Daniel Ojeda",
            "puesto": "Analista - Programador",
            "ciudad": "Sevilla",
            "cod": "123456798Q",
            "img": "https://www.ginemed.es/wp-content/uploads/2020/11/daniel-ojeda-analista-programador-445x332.jpg"
          },
        ]
      },
      {
        "nombre": "Sistemas Informaticos",
        "personal": [
          {
            "nombre": "Daniel Ojeda",
            "puesto": "Analista - Programador",
            "ciudad": "Sevilla",
            "cod": "123456798Q",
            "img": "https://www.ginemed.es/wp-content/uploads/2021/02/Gabriel-Lopez-tecnico-sistemas-445x332.jpg"
          },
          {
            "nombre": "Daniel Ojeda",
            "puesto": "Analista - Programador",
            "ciudad": "Sevilla",
            "cod": "123456798Q",
            "img": "https://www.ginemed.es/wp-content/uploads/2021/02/Gabriel-Lopez-tecnico-sistemas-445x332.jpg"
          },
          {
            "nombre": "Daniel Ojeda",
            "puesto": "Analista - Programador",
            "ciudad": "Sevilla",
            "cod": "123456798Q",
            "img": "https://www.ginemed.es/wp-content/uploads/2021/02/Gabriel-Lopez-tecnico-sistemas-445x332.jpg"
          },
          {
            "nombre": "Daniel Ojeda",
            "puesto": "Analista - Programador",
            "ciudad": "Sevilla",
            "cod": "123456798Q",
            "img": "https://www.ginemed.es/wp-content/uploads/2021/02/Gabriel-Lopez-tecnico-sistemas-445x332.jpg"
          },
          {
            "nombre": "Daniel Ojeda",
            "puesto": "Analista - Programador",
            "ciudad": "Sevilla",
            "cod": "123456798Q",
            "img": "https://www.ginemed.es/wp-content/uploads/2021/02/Gabriel-Lopez-tecnico-sistemas-445x332.jpg"
          },
        ]
      }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
