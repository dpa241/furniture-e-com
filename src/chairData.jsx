// product images
import swivelCatImg from '/product/swivelchair-1.png'
import rockingCatImg from '/product/rockingchair-1.png'
import barrelCatImg from '/product/barrelchair-1.png'
import tulipCatImg from '/product/tulipchair-1.png'
import sofaCatImg from '/product/sofa.png'

// import swivelChair1 from '/product/swivelchair-1.png'
// import swivelChair2 from '/product/swivelchair-2.png'
// import swivelChair3 from '/product/swivelchair-3.png'
// import swivelChair4 from '/product/swivelchair-4.png'
// import swivelChair5 from '/product/swivelchair-5.png'

// import rockingChair1 from '/product/rockingchair-1.png '
// import rockingChair2 from '/product/rockingchair-2.png '
// import rockingChair3 from '/product/rockingchair-3.png '
// import rockingChair4 from '/product/rockingchair-4.png '
// import rockingChair5 from '/product/rockingchair-5.png '

// import gamingChair1 from '/product/gamingchair-1.png'
// import gamingChair2 from '/product/gamingchair-2.png'
// import gamingChair3 from '/product/gamingchair-3.png'
// import gamingChair4 from '/product/gamingchair-4.png'

// import clubChair1 from '/product/clubchair-1.png'
// import tulipChair1 from '/product/tulipchair-1.png'
// import barrelChair1 from '/product/barrelchair-1.png'


export const chairCategory = [
  {
    category: "swivel",
    name: "Swivel",
    img: swivelCatImg,
    isLarge: false,
  },
  {
    category: "rocking",
    name: "Rocking",
    img: rockingCatImg,
    isLarge: false,
  },
  {
    category: "barrel",
    name: "Barrel",
    img: barrelCatImg,
    isLarge: false,
  },
  {
    category: "tulip",
    name: "Tulip",
    img: tulipCatImg,
    isLarge: false,
  },
  {
    category: "sofa",
    name: "Sofa",
    img: sofaCatImg,
    isLarge: true,
  },
]

export const chairData = [
  {
    id: 1001,
    highlited: "featured",
    category: 'swivel-chair',
    name: "Swivel",
    title: "Swivel Stool Chair ",
    description: "Description-1",
    Review: "Review",
    images: {
      mainImg : '/product/swivelchair-1.png',
      // mainImgAlt:'/products/feat5rvg.png',
      categoryImg: '/category/featureprod5.png',
      subImg1: '/products/feat4rvg.png',
      subImg2: '/products/feat3rvg.png',
      subImg3: '/products/feat2rvg.png'
    },
    isNew: true,
    isOnSale: false,
    oldPrice: 35,
    newPrice: 22,
  },
    {
    id: 1002,
    highlited: "trending",
    category: 'rocking-chair',
    name: "Rocking",
    title: "Rocking Stool Chair ",
    description: "Description-1",
    Review: "Review",
    images: {
      mainImg : '/product/rockingchair-1.png',
      // mainImgAlt:'/products/feat5rvg.png',
      categoryImg: '/product/rockingchair-3.png',
      subImg1: '/products/feat4rvg.png',
      subImg2: '/products/feat3rvg.png',
      subImg3: '/products/feat2rvg.png'
    },
    isNew: true,
    isOnSale: false,
    oldPrice: 35,
    newPrice: 22,
  },
    {
    id: 1003,
    highlited: "new",
    category: 'gaming-chair',
    name: "Gaming",
    title: "Gaming Stool Chair ",
    description: "Description-1",
    Review: "Review",
    images: {
      mainImg : '/product/gamingchair-1.png',
      // mainImgAlt:'/products/feat5rvg.png',
      categoryImg: '/product/gamingchair-3.png',
      subImg1: '/products/feat4rvg.png',
      subImg2: '/products/feat3rvg.png',
      subImg3: '/products/feat2rvg.png'
    },
    isNew: true,
    isOnSale: false,
    oldPrice: 35,
    newPrice: 22,
  },
    {
    id: 1004,
    highlited: "trending",
    category: 'gaming-chair',
    name: "Gaming",
    title: "Gaming Stool Chair ",
    description: "Description-1",
    Review: "Review",
    images: {
      mainImg : '/product/tulipchair-1.png',
      // mainImgAlt:'/products/feat5rvg.png',
      categoryImg: '/product/tulipchair-1.png',
      subImg1: '/products/feat4rvg.png',
      subImg2: '/products/feat3rvg.png',
      subImg3: '/products/feat2rvg.png'
    },
    isNew: true,
    isOnSale: false,
    oldPrice: 35,
    newPrice: 22,
  },
    {
    id: 1005,
    category: 'swivel-chair',
    name: "Swivel",
    title: "Library Stool Chair ",
    description: "Description-1",
    trending: false,
    featured: false,
    new: false,
    Review: "Review",
    img: {
      mainImg : '/product/swivelchair-2.png',
      // mainImgAlt:'/products/feat5rvg.png',
      subImg1: '/products/feat4rvg.png',
      subImg2: '/products/feat3rvg.png',
      subImg3: '/products/feat2rvg.png'
    },
    isNew: true,
    isOnSale: false,
    oldPrice: 35,
    newPrice: 22,
  },



  // {
  //   id: 1,
  //   category: 'featured',
  //   prodCat: "chair",
  //   name: "Chair",
  //   catImg: '/category/featureprod5.png',
  //   href: "/",
  //   isLarge: false,
  //   category_id: 1001,
  //   img: '/products/feat1rvg.png',
  //   imgAlt:'/products/feat5rvg.png',
  //   title: "Library Stool Chair ",
  //   isNew: true,
  //   isOnSale: false,
  //   oldPrice: 35,
  //   newPrice: 22,
  // },

  //   {
  //   id: 3,
  //   category: 'rocking-chair',
  //   name: "Rocking",
  //   title: "Library Stool Chair ",
  //   description: "Description-1",
  //   trending: false,
  //   featured: true,
  //   new: false,
  //   Review: "Review",
  //   img: {
  //     mainImg : '/product/rockingchair-1.png',
  //     // mainImgAlt:'/products/feat5rvg.png',
  //     subImg1: '/products/feat4rvg.png',
  //     subImg2: '/products/feat3rvg.png',
  //     subImg3: '/products/feat2rvg.png'
  //   },
  //   isNew: false,
  //   isOnSale: false,
  //   oldPrice: 35,
  //   newPrice: 22,
  // },
  //   {
  //   id: 4,
  //   category: 'rocking-chair',
  //   name: "Rocking",
  //   title: "Library Stool Chair ",
  //   description: "Description-1",
  //   trending: false,
  //   featured: false,
  //   new: true,
  //   Review: "Review",
  //   img: {
  //     mainImg : '/product/rockingchair-2.png',
  //     // mainImgAlt:'/products/feat5rvg.png',
  //     subImg1: '/products/feat4rvg.png',
  //     subImg2: '/products/feat3rvg.png',
  //     subImg3: '/products/feat2rvg.png'
  //   },
  //   isNew: false,
  //   isOnSale: false,
  //   oldPrice: 35,
  //   newPrice: 22,
  // },
  //   {
  //   id: 5,
  //   category: 'gaming-chair',
  //   name: "Gaming",
  //   title: "Library Stool Chair ",
  //   description: "Description-1",
  //   trending: true,
  //   featured: false,
  //   new: false,
  //   Review: "Review",
  //   img: {
  //     mainImg : '/product/gamingchair-1.png',
  //     // mainImgAlt:'/products/feat5rvg.png',
  //     subImg1: '/products/feat4rvg.png',
  //     subImg2: '/products/feat3rvg.png',
  //     subImg3: '/products/feat2rvg.png'
  //   },
  //   isNew: true,
  //   isOnSale: false,
  //   oldPrice: 35,
  //   newPrice: 22,
  // },
  //   {
  //   id: 6,
  //   category: 'swivel-chair',
  //   name: "Swivel",
  //   title: "Library Stool Chair ",
  //   description: "Description-1",
  //   trending: true,
  //   featured: false,
  //   new: false,
  //   Review: "Review",
  //   img: {
  //     mainImg : '/product/swivelchair-3.png',
  //     mainImgAlt:'/products/feat5rvg.png',
  //     subImg1: '/products/feat4rvg.png',
  //     subImg2: '/products/feat3rvg.png',
  //     subImg3: '/products/feat2rvg.png'
  //   },
  //   isNew: true,
  //   isOnSale: false,
  //   oldPrice: 35,
  //   newPrice: 22,
  // },
  //   {
  //   id: 7,
  //   category: 'gaming-chair',
  //   name: "gaming",
  //   title: "Library Stool Chair ",
  //   description: "Description-1",
  //   trending: false,
  //   featured: false,
  //   new: true,
  //   Review: "Review",
  //   img: {
  //     mainImg : '/product/gamingchair-2.png',
  //     // mainImgAlt:'/products/feat5rvg.png',
  //     subImg1: '/products/feat4rvg.png',
  //     subImg2: '/products/feat3rvg.png',
  //     subImg3: '/products/feat2rvg.png'
  //   },
  //   isNew: true,
  //   isOnSale: false,
  //   oldPrice: 35,
  //   newPrice: 22,
  // },
  //   {
  //   id: 7,
  //   category: 'gaming-chair',
  //   name: "Gaming",
  //   title: "Library Stool Chair ",
  //   description: "Description-1",
  //   trending: true,
  //   featured: true,
  //   new: true,
  //   Review: "Review",
  //   img: {
  //     mainImg : '/product/gamingchair-3.png',
  //     // mainImgAlt:'/products/feat5rvg.png',
  //     subImg1: '/products/feat4rvg.png',
  //     subImg2: '/products/feat3rvg.png',
  //     subImg3: '/products/feat2rvg.png'
  //   },
  //   isNew: true,
  //   isOnSale: false,
  //   oldPrice: 35,
  //   newPrice: 22,
  // },
  //   {
  //   id: 8,
  //   category: 'rocking-chair',
  //   name: "Rocking",
  //   title: "Library Stool Chair ",
  //   description: "Description-1",
  //   trending: true,
  //   featured: false,
  //   new: false,
  //   Review: "Review",
  //   img: {
  //     mainImg : '/product/rockingchair-3.png ',
  //     // mainImgAlt:'/products/feat5rvg.png',
  //     subImg1: '/products/feat4rvg.png',
  //     subImg2: '/products/feat3rvg.png',
  //     subImg3: '/products/feat2rvg.png'
  //   },
  //   isNew: true,
  //   isOnSale: false,
  //   oldPrice: 35,
  //   newPrice: 22,
  // },
  //   {
  //   id: 9,
  //   category: 'gaming-chair',
  //   name: "gaming",
  //   title: "Library Stool Chair ",
  //   description: "Description-1",
  //   trending: false,
  //   featured: false,
  //   new: true,
  //   Review: "Review",
  //   img: {
  //     mainImg : '/product/gamingchair-4.png',
  //     // mainImgAlt:'/products/feat5rvg.png',
  //     subImg1: '/products/feat4rvg.png',
  //     subImg2: '/products/feat3rvg.png',
  //     subImg3: '/products/feat2rvg.png'
  //   },
  //   isNew: true,
  //   isOnSale: false,
  //   oldPrice: 35,
  //   newPrice: 22,
  // },
  //   {
  //   id: 10,
  //   category: 'swivel-chair',
  //   name: "Swivel",
  //   title: "Library Stool Chair ",
  //   description: "Description-1",
  //   trending: false,
  //   featured: false,
  //   new: false,
  //   Review: "Review",
  //   img: {
  //     mainImg : '/product/swivelchair-4.png',
  //     // mainImgAlt:'/products/feat5rvg.png',
  //     subImg1: '/products/feat4rvg.png',
  //     subImg2: '/products/feat3rvg.png',
  //     subImg3: '/products/feat2rvg.png'
  //   },
  //   isNew: true,
  //   isOnSale: false,
  //   oldPrice: 35,
  //   newPrice: 22,
  // },
  //   {
  //   id: 11,
  //   category: 'rocking-chair',
  //   name: "Rocking",
  //   title: "Library Stool Chair ",
  //   description: "Description-1",
  //   trending: false,
  //   featured: false,
  //   new: false,
  //   Review: "Review",
  //   img: {
  //     mainImg : '/product/rockingchair-4.png ',
  //     // mainImgAlt:'/products/feat5rvg.png',
  //     subImg1: '/products/feat4rvg.png',
  //     subImg2: '/products/feat3rvg.png',
  //     subImg3: '/products/feat2rvg.png'
  //   },
  //   isNew: true,
  //   isOnSale: false,
  //   oldPrice: 35,
  //   newPrice: 22,
  // },
  //   {
  //   id: 12,
  //   category: 'rocking-chair',
  //   name: "Rocking",
  //   title: "Library Stool Chair ",
  //   description: "Description-1",
  //   trending: false,
  //   featured: true,
  //   new: true,
  //   Review: "Review",
  //   img: {
  //     mainImg : '/product/rockingchair-5.png ',
  //     // mainImgAlt:'/products/feat5rvg.png',
  //     subImg1: '/products/feat4rvg.png',
  //     subImg2: '/products/feat3rvg.png',
  //     subImg3: '/products/feat2rvg.png'
  //   },
  //   isNew: true,
  //   isOnSale: false,
  //   oldPrice: 35,
  //   newPrice: 22,
  // },
  //   {
  //   id: 13,
  //   category: 'swivel-chair',
  //   name: "Swivel",
  //   title: "Library Stool Chair ",
  //   description: "Description-1",
  //   trending: false,
  //   featured: false,
  //   new: false,
  //   Review: "Review",
  //   img: {
  //     mainImg : '/product/swivelchair-5.png',
  //     mainImgAlt:'/products/feat5rvg.png',
  //     subImg1: '/products/feat4rvg.png',
  //     subImg2: '/products/feat3rvg.png',
  //     subImg3: '/products/feat2rvg.png'
  //   },
  //   isNew: true,
  //   isOnSale: false,
  //   oldPrice: 35,
  //   newPrice: 22,
  // },
  //   {
  //   id: 14,
  //   category: 'barrel-chair',
  //   name: "Barrel",
  //   title: "Library Stool Chair ",
  //   description: "Description-1",
  //   trending: false,
  //   featured: true,
  //   new: true,
  //   Review: "Review",
  //   img: {
  //     mainImg : '/product/barrelchair-1.png',
  //     // mainImgAlt:'/products/feat5rvg.png',
  //     subImg1: '/products/feat4rvg.png',
  //     subImg2: '/products/feat3rvg.png',
  //     subImg3: '/products/feat2rvg.png'
  //   },
  //   isNew: true,
  //   isOnSale: false,
  //   oldPrice: 35,
  //   newPrice: 22,
  // },
  //   {
  //   id: 15,
  //   category: 'tulip-chair',
  //   name: "Tulip",
  //   title: "Library Stool Chair ",
  //   description: "Description-1",
  //   trending: false,
  //   featured: true,
  //   new: true,
  //   Review: "Review",
  //   img: {
  //     mainImg : '/product/tulipchair-1.png',
  //     // mainImgAlt:'/products/feat5rvg.png',
  //     subImg1: '/products/feat4rvg.png',
  //     subImg2: '/products/feat3rvg.png',
  //     subImg3: '/products/feat2rvg.png'
  //   },
  //   isNew: true,
  //   isOnSale: false,
  //   oldPrice: 35,
  //   newPrice: 22,
  // },
  //   {
  //   id: 14,
  //   category: 'club-chair',
  //   name: "Club",
  //   title: "Library Stool Chair ",
  //   description: "Description-1",
  //   trending: false,
  //   featured: true,
  //   new: true,
  //   Review: "Review",
  //   img: {
  //     mainImg : '/product/clubchair-1.png',
  //     // mainImgAlt:'/products/feat5rvg.png',
  //     subImg1: '/products/feat4rvg.png',
  //     subImg2: '/products/feat3rvg.png',
  //     subImg3: '/products/feat2rvg.png'
  //   },
  //   isNew: true,
  //   isOnSale: false,
  //   oldPrice: 35,
  //   newPrice: 22,
  // },
]