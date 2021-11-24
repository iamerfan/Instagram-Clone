import { createContext } from 'react';
export const DataContext = createContext();
export const userData = [
   {
      id: 0,
      name: 'Leanne Graham',
      username: 'Bret_Hopkings',
      email: 'Sincere@april.biz',
      phone: '1-770-736-8031 x56442',
      website: 'hildegard.org',
      profileImg: '/assets/Profile/1.jpg',
      post: [
         {
            id: 0,
            Discription: 'Nice Day',
            Img: '/assets/Post/0.jpg',
            Likes: Math.floor(Math.random() * 100) + 1,
            Comments: [
               {
                  id: 0,
                  text: '',
                  Sender: '',
               },
            ],
            CommentsCount: Math.floor(Math.random() * 10) + 1,
            Time: Math.floor(Math.random() * 10) + 1 + ' Hours Ago',
         },
      ],
      stories: [{ id: 0, StoryImg: '' }],
   },
   {
      id: 1,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      phone: '010-692-6593 x09125',
      website: 'anastasia.net',
      profileImg: '/assets/Profile/2.jpg',
      post: [
         {
            id: 0,
            Discription: '',
            Img: '/assets/Post/1.jpg',
            Likes: Math.floor(Math.random() * 100) + 1,
            CommentsCount: Math.floor(Math.random() * 10) + 1,
            Comments: [
               {
                  id: 0,
                  text: '',
                  sender: '',
               },
            ],
            Time: Math.floor(Math.random() * 10) + 1 + ' Hours Ago',
         },
      ],
      stories: [{ id: 0, StoryImg: '' }],
   },
   {
      id: 2,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      phone: '1-463-123-4447',
      website: 'ramiro.info',
      profileImg: '/assets/Profile/3.jpg',
      post: [
         {
            id: 0,
            Discription: '',
            Img: '/assets/Post/2.jpg',
            Likes: Math.floor(Math.random() * 100) + 1,
            Comments: [
               {
                  id: 0,
                  text: '',
                  Sender: '',
               },
            ],
            CommentsCount: Math.floor(Math.random() * 10) + 1,
            Time: Math.floor(Math.random() * 10) + 1 + ' Hours Ago',
         },
      ],
      stories: [{ id: 0, StoryImg: '' }],
   },
   {
      id: 3,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      phone: '493-170-9623 x156',
      website: 'kale.biz',
      profileImg: '/assets/Profile/4.jpg',
      post: [
         {
            id: 0,
            Discription: '',
            Img: '/assets/Post/3.jpg',

            Likes: Math.floor(Math.random() * 100) + 1,
            Comments: [
               {
                  id: 0,
                  text: '',
                  Sender: '',
               },
            ],
            CommentsCount: Math.floor(Math.random() * 10) + 1,
            Time: Math.floor(Math.random() * 10) + 1 + ' Hours Ago',
         },
      ],
      stories: [{ id: 0, StoryImg: '' }],
   },
   {
      id: 4,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      phone: '(254)954-1289',
      website: 'demarco.info',
      profileImg: '/assets/Profile/5.jpg',
      post: [
         {
            id: 0,
            Discription: '',
            Img: '/assets/Post/4.jpg',
            Likes: Math.floor(Math.random() * 100) + 1,
            Comments: [
               {
                  id: 0,
                  text: '',
                  Sender: '',
               },
            ],
            CommentsCount: Math.floor(Math.random() * 10) + 1,
            Time: Math.floor(Math.random() * 10) + 1 + ' Hours Ago',
         },
      ],
      stories: [{ id: 0, StoryImg: '' }],
   },
   {
      id: 5,
      name: 'Mrs. Dennis Schulist',
      username: 'Leo_Cork',
      email: 'Karley_Dach@jasper.info',
      phone: '1-477-935-8478 x6430',
      website: 'ola.org',
      profileImg: '/assets/Profile/6.jpg',
      post: [
         {
            id: 0,
            Discription: '',
            Img: '/assets/Post/5.jpg',
            Likes: Math.floor(Math.random() * 100) + 1,
            Comments: [
               {
                  id: 0,
                  text: '',
                  Sender: '',
               },
            ],
            CommentsCount: Math.floor(Math.random() * 10) + 1,
            Time: Math.floor(Math.random() * 10) + 1 + ' Hours Ago',
         },
      ],
      stories: [{ id: 0, StoryImg: '' }],
   },
   {
      id: 6,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      phone: '210.067.6132',
      website: 'elvis.io',
      profileImg: '/assets/Profile/7.jpg',
      post: [
         {
            id: 0,
            Discription: '',
            Img: '/assets/Post/6.jpg',
            Likes: Math.floor(Math.random() * 100) + 1,
            Comments: [
               {
                  id: 0,
                  text: '',
                  Sender: '',
               },
            ],
            CommentsCount: Math.floor(Math.random() * 10) + 1,
            Time: Math.floor(Math.random() * 10) + 1 + ' Hours Ago',
         },
      ],
      stories: [{ id: 0, StoryImg: '' }],
   },
   {
      id: 7,
      name: 'Nicholas Runolfsdottir V',
      username: 'Max_Nienow',
      email: 'Sherwood@rosamond.me',
      phone: '586.493.6943 x140',
      website: 'jacynthe.com',
      profileImg: '/assets/Profile/8.jpeg',
      post: [
         {
            id: 0,
            Discription: '',
            Img: '/assets/Post/7.jpg',
            Likes: Math.floor(Math.random() * 100) + 1,
            Comments: [
               {
                  id: 0,
                  text: '',
                  Sender: '',
               },
            ],
            CommentsCount: Math.floor(Math.random() * 10) + 1,
            Time: Math.floor(Math.random() * 10) + 1 + ' Hours Ago',
         },
      ],
      stories: [{ id: 0, StoryImg: '' }],
   },
   {
      id: 8,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      phone: '(775)976-6794 x41206',
      website: 'conrad.com',
      profileImg: '/assets/Profile/9.jpg',
      post: [
         {
            id: 0,
            Discription: '',
            Img: '/assets/Post/8.jpg',
            Likes: Math.floor(Math.random() * 100) + 1,
            Comments: [
               {
                  id: 0,
                  text: '',
                  Sender: '',
               },
            ],
            CommentsCount: Math.floor(Math.random() * 10) + 1,
            Time: Math.floor(Math.random() * 10) + 1 + ' Hours Ago',
         },
      ],
      stories: [{ id: 0, StoryImg: '' }],
   },
   {
      id: 9,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      phone: '024-648-3804',
      website: 'ambrose.net',
      profileImg: '/assets/Profile/10.jpg',
      post: [
         {
            id: 0,
            Discription: '',
            Img: '/assets/Post/9.jpg',
            Likes: Math.floor(Math.random() * 100) + 1,
            Comments: [
               {
                  id: 0,
                  text: '',
                  Sender: '',
               },
            ],
            CommentsCount: Math.floor(Math.random() * 10) + 1,
            Time: Math.floor(Math.random() * 10) + 1 + ' Hours Ago',
         },
      ],
      stories: [
         {
            id: 0,
            StoryImg: '',
            Time: Math.floor(Math.random() * 10) + 1 + ' Hours Ago',
         },
      ],
   },
];
