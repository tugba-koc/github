import { Component } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-table',
  styleUrls: ['table.component.css'],
  templateUrl: 'table.component.html',
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class TableComponent {
  dataSource = ELEMENT_DATA;
  displayedColumns: string[] = [
    'businessName',
    'title',
    'picture',
    'sessionDate',
    'listPrice',
    'discountedPrice',
    'katilimciSayisi',
    'duzenle',
  ];

  expandedElement!: PeriodicElement | null;
}

export interface PeriodicElement {
  businessId: string;
  businessName: string;
  title: string;
  picture: string;
  sessionDate: number;
  listPrice: number;
  discountedPrice: number;
  katilimciSayisi: number;
  description: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    businessId: 'dfae0e36-5336-40a5-aada-fbf83f2a1d8e',
    businessName: 'American English Inc.',
    title: 'American English',
    picture:
      'https://previews.123rf.com/images/corund/corund1309/corund130900177/22106111-piano-keys.jpg',
    sessionDate: 1579547709064,
    listPrice: 90,
    discountedPrice: 80,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu risus enim.',
    katilimciSayisi: 4,
  },
  {
    businessId: '31469d7e-d6a8-4786-8d63-667f3f8c9de4',
    businessName: 'British English Inc.',
    title: 'British English',
    picture:
      'https://previews.123rf.com/images/corund/corund1309/corund130900177/22106111-piano-keys.jpg',
    sessionDate: 1579547709064,
    listPrice: 85,
    discountedPrice: 75,
    description: '',
    katilimciSayisi: 2,
  },
  {
    businessId: 'ab8d82d2-c3a8-4de0-93ed-d98c8f06ed24',
    businessName: 'Turkish Inc.',
    title: 'Turkish',
    picture:
      'https://previews.123rf.com/images/corund/corund1309/corund130900177/22106111-piano-keys.jpg',
    sessionDate: 1579547709064,
    listPrice: 80,
    discountedPrice: 70,
    description:
      'Sed eget varius augue, sit amet molestie quam. Nam egestas sollicitudin nibh, id consequat ante eleifend non.',
    katilimciSayisi: 0,
  },
  {
    businessId: '5854a3c3-d551-4407-9086-ab3f41b6aac1',
    businessName: 'Deustch Inc.',
    title: 'German',
    picture:
      'https://previews.123rf.com/images/corund/corund1309/corund130900177/22106111-piano-keys.jpg',
    sessionDate: 1579547709064,
    listPrice: 75,
    discountedPrice: 65,
    description: '',
    katilimciSayisi: 0,
  },
  {
    businessId: '968845d9-ebcb-4e9c-a4ff-d201c6f006db',
    businessName: 'Canadian Inc.',
    title: 'History 101',
    picture:
      'https://previews.123rf.com/images/corund/corund1309/corund130900177/22106111-piano-keys.jpg',
    sessionDate: 1579547709064,
    listPrice: 70,
    discountedPrice: 60,
    description: '',
    katilimciSayisi: 4,
  },
  {
    businessId: 'dcdb181c-00fb-4a79-b630-59dc7c689497',
    businessName: 'French Inc.',
    title: 'French',
    picture:
      'https://previews.123rf.com/images/corund/corund1309/corund130900177/22106111-piano-keys.jpg',
    sessionDate: 1579547709064,
    listPrice: 65,
    discountedPrice: 55,
    description: '',
    katilimciSayisi: 10,
  },
  {
    businessId: '1281fbe0-aabe-4a17-8097-203fe03deb0a',
    businessName: 'Italian Inc.',
    title: 'Italian',
    picture:
      'https://previews.123rf.com/images/corund/corund1309/corund130900177/22106111-piano-keys.jpg',
    sessionDate: 1579547709064,
    listPrice: 60,
    discountedPrice: 50,
    description: 'This is a short description.',
    katilimciSayisi: 0,
  },
  {
    businessId: 'e3f63583-e4ce-405f-94f6-bdf5924d742c',
    businessName: 'Korean Inc.',
    title: 'Korean',
    picture:
      'https://previews.123rf.com/images/corund/corund1309/corund130900177/22106111-piano-keys.jpg',
    sessionDate: 1579547709064,
    listPrice: 55,
    discountedPrice: 30,
    description: '',
    katilimciSayisi: 2,
  },
  {
    businessId: '51388fb8-85dc-4d91-b43d-fd3168df6131',
    businessName: 'Japanese Inc.',
    title: 'Japanese',
    picture:
      'https://previews.123rf.com/images/corund/corund1309/corund130900177/22106111-piano-keys.jpg',
    sessionDate: 1579547709064,
    listPrice: 50,
    discountedPrice: 40,
    description: '',
    katilimciSayisi: 0,
  },
  {
    businessId: '0120361f-0e22-486c-9d93-8eec19a276ba',
    businessName: 'Chinese Inc.',
    title: 'Chinese',
    picture:
      'https://previews.123rf.com/images/corund/corund1309/corund130900177/22106111-piano-keys.jpg',
    sessionDate: 1579547709064,
    listPrice: 45,
    discountedPrice: 35,
    description: '',
    katilimciSayisi: 15,
  },
];
