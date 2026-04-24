const imgName = 'forest hill lake autumn rhodo winter pines'.split(' ');

export const galleryData = {
  imgDir: '/gallery',
  items: imgName.map(name => ({ img: `${name}.jpg`, name })),
};
