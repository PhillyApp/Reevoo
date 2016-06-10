// This is just some sample data so you don't have to think of your own!
module.exports = {  
  product1 : {
    name : 'Fruit tea',
    image : './build/assets/images/seo-prefix-fruit-tea.jpg',
    desc : 'Everyones favorite white fish. We will cut it to the size you need and ship it.',
    price : 311,
    discount : true,
    rule:'buyOneGetOne'
  },
  
  product2 : {
    name : 'Strawberries',
    image : './build/assets/images/seo-prefix-strawberry.jpg',
    desc : 'These tender, mouth-watering beauties are a fantastic hit at any dinner party.',
    price : 500,
    rule:'dicount',
    discount : true,
    minimumProduct:3,
    discountPrice: 450
  },
  
  product3 : {
    name : 'Coffee',
    image : './build/assets/images/seo-prefix-coffee.jpg',
    desc : 'Big, sweet and tender. True dry-pack scallops from the icey waters of Alaska. About 8-10 per pound',
    price : 1123,
    discount : false
  }
};
