let helpers =  {
  formatPrice :  function(cents) {
    return '£' + ( (cents / 100).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") );
  },
  rando : function(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  },
  slugify : function(text) {
    return text.toString().toLowerCase()
      .replace(/\s+/g, '-')           // Replace spaces with -
      .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
      .replace(/\-\-+/g, '-')         // Replace multiple - with single -
      .replace(/^-+/, '')             // Trim - from start of text
      .replace(/-+$/, '');            // Trim - from end of text
  },
  getFunName : function() {
    var adjectives = ['adorable', 'beautiful', 'clean', 'drab', 'elegant', 'fancy', 'glamorous', 'handsome', 'long', 'magnificent', 'old-fashioned', 'plain', 'quaint', 'sparkling', 'ugliest', 'unsightly', 'angry', 'bewildered', 'clumsy', 'defeated', 'embarrassed', 'fierce', 'grumpy', 'helpless', 'itchy', 'jealous', 'lazy', 'mysterious', 'nervous', 'obnoxious', 'panicky', 'repulsive', 'scary', 'thoughtless', 'uptight', 'worried'];
    
    var nouns = ['women', 'men', 'children', 'teeth', 'feet', 'people', 'leaves', 'mice', 'geese', 'halves', 'knives', 'wives', 'lives', 'elves', 'loaves', 'potatoes', 'tomatoes', 'cacti', 'foci', 'fungi', 'nuclei', 'syllabuses', 'analyses', 'diagnoses', 'oases', 'theses', 'crises', 'phenomena', 'criteria', 'data'];
    
    return `${this.rando(adjectives)}-${this.rando(adjectives)}-${this.rando(nouns)}`;
  },

  /*buyOneGetOne*/
  buyOneGetOne : function(count, price) {
     if(count<2) {
            return (count * parseInt(price));
          }
          if(count>=2) {
            var numberOfDiscountedProduct = count/2;
            var numberOfNonDiscountedProduct = count%2;
            return (numberOfDiscountedProduct * parseInt(price) + numberOfNonDiscountedProduct * parseInt(price));
          } 
  },

  /*discount*/
  discount : function(count, minimum, price, discountPrice) {
     if(count >= minimum) {
              var price = discountPrice;
          } else {
              var price = price;
          };
          return (count * parseInt(price));
  }
}

export default helpers;
