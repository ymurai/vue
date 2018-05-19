
new Vue({
  el: '#user-1',
  data: {
    username: 'admin'
  }
})


var navs = new Vue({
  el: '#nav-1',
  data: {
    navs: [
      { menu: 'menu1' },
      { menu: 'menu2' },
      { menu: 'menu3' },
      { menu: 'menu4' }
    ]
  }
})

var sections = new Vue({
  el: '#section-1',
  data: {
    sections: [
      { title: 'title1', src: 'images/dummy01.jpg', alt: 'thumbnail1', text: 'sample text 1.' },
      { title: 'title2', src: 'images/dummy01.jpg', alt: 'thumbnail2', text: 'sample text 2.' },
      { title: 'title3', src: 'images/dummy01.jpg', alt: 'thumbnail3', text: 'sample text 3.' }
    ]
  }
})

