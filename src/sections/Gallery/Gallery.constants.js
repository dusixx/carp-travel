const imgName = 'forest hill lake autumn rhodo winter pines'.split(' ');

export const GalleryData = {
  imgDir: '/gallery',
  items: imgName.map(name => ({ img: `${name}.jpg`, name })),
};
