module.exports = [
  {
    title: 'PNG favicon with type `image/vnd.microsoft.icon`',
    type: 'image/vnd.microsoft.icon',
    path: '/assets/icons/png/icon-16.png',
    permalink: '/type-mismatch/type-ico-file-png/',
  },
  {
    title: 'PNG favicon with type `image/jpeg`',
    type: 'image/jpeg',
    path: '/assets/icons/png/icon-16.png',
    permalink: '/type-mismatch/type-jpeg-file-png/',
  },
  {
    title: 'PNG favicon with type `text/plain`',
    type: 'text/plain',
    path: '/assets/icons/png/icon-16.png',
    permalink: '/type-mismatch/type-text-file-png/',
  },
  {
    title: 'JPEG favicon with type `invalid`',
    type: 'invalid',
    path: '/assets/icons/jpg/icon-16.jpg',
    permalink: '/type-mismatch/type-invalid-file-jpg/',
  },
  {
    title: 'JPEG favicon with type ``',
    type: '',
    path: '/assets/icons/jpg/icon-16.jpg',
    permalink: '/type-mismatch/type-blank-file-jpg/',
  },
];
