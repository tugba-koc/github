import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  constructor() {}

  title = 'Kategoriler';

  categories: Category[] = [
    { id: 1, name: 'Elektronik' },
    { id: 1, name: 'Bilgisayar' },
    { id: 1, name: 'İletişim' },
    { id: 1, name: 'İçecek' },
    { id: 1, name: 'Müzik' },
  ];

  ngOnInit(): void {}
}
