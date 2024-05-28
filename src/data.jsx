// import slider images
import Avatar1 from '../src/assets/Testimonial/avatar1.png';
import Avatar2 from '../src/assets/Testimonial/avatar2.png';
import Avatar3 from '../src/assets/Testimonial/avatar3.png';
import Client1 from '../src/assets/Client/Logo.png';
import Client2 from '../src/assets/Client/Logo-1.png';
import Client3 from '../src/assets/Client/Logo-2.png';
import Client4 from '../src/assets/Client/Logo-3.png';
import Client5 from '../src/assets/Client/Logo-4.png';
import Client6 from '../src/assets/Client/Logo-5.png';
import Client7 from '../src/assets/Client/Logo-6.png';


export const navigationData = [
    {
        name: "Home",
        href: "/"
    },
    {
        name: "Shop",
        href: "/shop"
    },
    {
        name: "About",
        href: "/about"
    },
    {
        name: "Contact",
        href: "/contact"
    }
]
export const categoryData = [
    {
        name: "Chair",
        img: '/category/featureprod5.png',
        href: "/",
        isLarge: false
    },
    {
        name: "Sofa",
        img: '/category/trending1.jpg',
        href: "/",
        isLarge: false
    },
    {
        name: "Dinning",
        img: '/category/trending2.jpg',
        href: "/",
        isLarge: false
    },
    {
        name: "Living",
        img: '/category/trending3.jpg',
        href: "/",
        isLarge: false
    },
    {
        name: "Kitchen",
        img: '/category/large.jpg',
        href: "/",
        isLarge: true
    },
]
export const sidebarData = [
    {
        name: "BedRoom",
        href: "/"
    },
    {
        name: "DinningRoom",
        href: "/"
    },
    {
        name: "MeetingRoom",
        href: "/"
    },
    {
        name: "WorkSpace",
        href: "/"
    },
    {
        name: "LivingRoom",
        href: "/"
    },
    {
        name: "CommonRoom",
        href: "/"
    },
    {
        name: "StudyRoom",
        href: "/"
    },
    {
        name: "Kid'sRoom",
        href: "/"
    },
    {
        name: "Kitchen",
        href: "/"
    },
    {
        name: "LivingSpace",
        href: "/"
    },
]
export const testimonialsData = [
  {
    image: Avatar1,
    name: 'John Fang',
    web: 'wordfaang.com',
    message:
      'Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.',
    delay: '300',
  },
  {
    image: Avatar2,
    name: 'Jane Doe',
    web: 'janedoee.com',
    message:
      'Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.',
    delay: '600',
  },
  {
    image: Avatar3,
    name: 'Jim Ferry',
    web: 'jimjimf.com',
    message:
      'Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.',
    delay: '900',
  },
  {
    image: Avatar1,
    name: 'Jim Ferry',
    web: 'jimjimf.com',
    message:
      'Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.',
    delay: '900',
  },
];
// export const bannerData = [
//   {
//     title:
//       'I know in real-time where the money is spent,and I don’t have to lend out the company’s credit card anymore. What a relief!',
//     image: Avatar1,
//   },
//   {
//     title:
//       'I know in real-time where the money is spent,and I don’t have to lend out the company’s credit card anymore. What a relief!',
//     image: Avatar2,
//   },
//   {
//     title:
//       'I know in real-time where the money is spent,and I don’t have to lend out the company’s credit card anymore. What a relief!',
//     image: Avatar3,
//   },


// //   {
// //     message:
// //       'I know in real-time where the money is spent,and I don’t have to lend out the company’s credit card anymore. What a relief!',
// //     image: Avatar1,
// //     name: 'Laurie Howell',
// //     email: 'la.howell@gmail.com',
// //   },

// ];

export const productData = [
  {
    id: 1001,
    highlited: "featured",
    category: 'swivel-chair',
    name: "Swivel",
    title: "Swivel Stool Chair ",
    description: "Description-1",
    Review: "Review",
    images: {
      mainImg : '/product/swivel.png',
      // mainImgAlt:'/products/feat5rvg.png',
      categoryImg: '/product/swivelchair-4.jpg',
      catIcon: '/icon/swivel.png',
      subImg1: '/products/feat4rvg.png',
      subImg2: '/products/feat3rvg.png',
      subImg3: '/products/feat2rvg.png'
    },
    isLarge: false,
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
      mainImg : '/product/rocking.png',
      // mainImgAlt:'/products/feat5rvg.png',
      categoryImg: '/product/rocking-.jpg',
      catIcon:'/icon/rocking.png',
      subImg1: '/products/feat4rvg.png',
      subImg2: '/products/feat3rvg.png',
      subImg3: '/products/feat2rvg.png'
    },
    isLarge: false,
    isNew: false,
    isOnSale: true,
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
      mainImg : '/product/club1.jpg',
      // mainImgAlt:'/products/feat5rvg.png',
      categoryImg: '/product/gaming-1.jpeg',
      catIcon: '/icon/gaming.png',
      subImg1: '/products/feat4rvg.png',
      subImg2: '/products/feat3rvg.png',
      subImg3: '/products/feat2rvg.png'
    },
    isLarge: false,
    isNew: true,
    isOnSale: false,
    oldPrice: 35,
    newPrice: 22,
  },
    {
    id: 1004,
    highlited: "trending",
    category: 'barrel-chair',
    name: "Barrel",
    title: "Barrel Stool Chair ",
    description: "Description-1",
    Review: "Review",
    images: {
      mainImg : '/product/barrel-1 (2).jpg',
      // mainImgAlt:'/products/feat5rvg.png',
      categoryImg: '/product/barrel.jpg',
      catIcon:'/icon/barrel.png',
      subImg1: '/products/feat4rvg.png',
      subImg2: '/products/feat3rvg.png',
      subImg3: '/products/feat2rvg.png'
    },
    isLarge: false,
    isNew: true,
    isOnSale: false,
    oldPrice: 35,
    newPrice: 22,
  },
    {
    id: 1005,
    highlited: "/sofa", //========================Not Categorized//
    category: 'sofa',
    name: "Sofa",
    title: "Sofa Stool Chair ",
    description: "Description-1",
    Review: "Review",
    images: {
      mainImg : '/product/sofashort.jpeg',
      // mainImgAlt:'/products/feat5rvg.png',
      categoryImg: '/product/sofashort.jpeg',
      catIcon:'/icon/sofa.png',
      subImg1: '/products/feat4rvg.png',
      subImg2: '/products/feat3rvg.png',
      subImg3: '/products/feat2rvg.png'
    },
    isLarge: true,
    isNew: false,
    isOnSale: false,
    oldPrice: 35,
    newPrice: 22,
  },
    {
    id: 1006,
    highlited: "featured",
    category: 'club-chair',
    name: "Club",
    title: "Club Stool Chair ",
    description: "Description-1",
    Review: "Review",
    images: {
      mainImg : '/product/club3.jpg',
      // mainImgAlt:'/products/feat5rvg.png',
      categoryImg: '/product/clubchair-1.png',
      catIcon: '/icon/club.png',
      subImg1: '/products/feat4rvg.png',
      subImg2: '/products/feat3rvg.png',
      subImg3: '/products/feat2rvg.png'
    },
    isLarge: true,
    isNew: false,
    isOnSale: false,
    oldPrice: 35,
    newPrice: 22,
  },
    {
    id: 1006,
    highlited: "new",
    category: 'swivel-chair',
    name: "Swivel",
    title: "Swivel Stool Chair ",
    description: "Description-1",
    Review: "Review",
    images: {
      mainImg : '/product/swivel-7.jpg',
      // mainImgAlt:'/products/feat5rvg.png',
      categoryImg: '/product/swivelchair-2.png',
      catIcon: '/icon/swivel.png',
      subImg1: '/products/feat4rvg.png',
      subImg2: '/products/feat3rvg.png',
      subImg3: '/products/feat2rvg.png'
    },
    isLarge: false,
    isNew: false,
    isOnSale: true,
    oldPrice: 35,
    newPrice: 22,
  },
    {
    id: 1007,
    highlited: "featured",
    category: 'barrel-chair',
    name: "Barrel",
    title: "Barrel Stool Chair ",
    description: "Description-1",
    Review: "Review",
    images: {
      mainImg : '/product/barrel-2 (2).jpg  ',
      // mainImgAlt:'/products/feat5rvg.png',
      categoryImg: '/product/barrelchair-2.png',
      catIcon:'/icon/barrel.png',
      subImg1: '/products/feat4rvg.png',
      subImg2: '/products/feat3rvg.png',
      subImg3: '/products/feat2rvg.png'
    },
    isLarge: false,
    isNew: false,
    isOnSale: false,
    oldPrice: 35,
    newPrice: 22,
  },
    {
    id: 1008,
    highlited: "featured",
    category: 'rocking-chair',
    name: "Rocking",
    title: "Rocking Stool Chair ",
    description: "Description-1",
    Review: "Review",
    images: {
      mainImg : '/product/rockingchair-2.jpg',
      // mainImgAlt:'/products/feat5rvg.png',
      categoryImg: '/product/rockingchair-2.png',
      catIcon:'/icon/rocking.png',
      subImg1: '/products/feat4rvg.png',
      subImg2: '/products/feat3rvg.png',
      subImg3: '/products/feat2rvg.png'
    },
    isLarge: false,
    isNew: false,
    isOnSale: false,
    oldPrice: 35,
    newPrice: 22,
  },
    {
    id: 1009,
    highlited: "featured",
    category: 'gaming-chair',
    name: "Gaming",
    title: "Gaming Stool Chair ",
    description: "Description-1",
    Review: "Review",
    images: {
      mainImg : '/product/gamingchair-3.png',
      // mainImgAlt:'/products/feat5rvg.png',
      categoryImg: '/product/gamingchair-4.png',
      catIcon:'/icon/gaming.png',
      subImg1: '/products/feat4rvg.png',
      subImg2: '/products/feat3rvg.png',
      subImg3: '/products/feat2rvg.png'
    },
    isLarge: false,
    isNew: false,
    isOnSale: true,
    oldPrice: 35,
    newPrice: 22,
  },
    {
    id: 1010,
    highlited: "new",
    category: 'barrel-chair',
    name: "Barrel",
    title: "Barrel Stool Chair ",
    description: "Description-1",
    Review: "Review",
    images: {
      mainImg : '/product/barrel-7.jpg',
      // mainImgAlt:'/products/feat5rvg.png',
      categoryImg: '/product/barrelchair-5.png',
      catIcon:'/icon/barrel.png',
      subImg1: '/products/feat4rvg.png',
      subImg2: '/products/feat3rvg.png',
      subImg3: '/products/feat2rvg.png'
    },
    isLarge: false,
    isNew: true,
    isOnSale: false,
    oldPrice: 35,
    newPrice: 22,
  },
    {
    id: 1011,
    highlited: "trending",
    category: 'gaming-chair',
    name: "Gaming",
    title: "Gaming Stool Chair ",
    description: "Description-1",
    Review: "Review",
    images: {
      mainImg : '/product/gaming1.jpg',
      // mainImgAlt:'/products/feat5rvg.png',
      categoryImg: '/product/gamingchair-4.png',
      catIcon:'/icon/gaming.png',
      subImg1: '/products/feat4rvg.png',
      subImg2: '/products/feat3rvg.png',
      subImg3: '/products/feat2rvg.png'
    },
    isLarge: false,
    isNew: false,
    isOnSale: false,
    oldPrice: 35,
    newPrice: 22,
  },
    {
    id: 1012,
    highlited: "new",
    category: 'tulip-chair',
    name: "Tulip",
    title: "Tulip Stool Chair ",
    description: "Description-1",
    Review: "Review",
    images: {
      mainImg : '/product/tulipchair-1.png',
      // mainImgAlt:'/products/feat5rvg.png',
      categoryImg: '/product/tulipchair-1.png',
      catIcon:'/icon/tulip.png',
      subImg1: '/products/feat4rvg.png',
      subImg2: '/products/feat3rvg.png',
      subImg3: '/products/feat2rvg.png'
    },
    isLarge: true,
    isNew: true,
    isOnSale: false,
    oldPrice: 35,
    newPrice: 22,
  },
    {
    id: 1013,
    highlited: "new",
    category: 'club-chair',
    name: "Club",
    title: "Club Stool Chair ",
    description: "Description-1",
    Review: "Review",
    images: {
      mainImg : '/product/clubchair-1.png',
      // mainImgAlt:'/products/feat5rvg.png',
      categoryImg: '/product/clubchair-1.png',
      catIcon:'/icon/club.png',
      subImg1: '/products/feat4rvg.png',
      subImg2: '/products/feat3rvg.png',
      subImg3: '/products/feat2rvg.png'
    },
    isLarge: true,
    isNew: true,
    isOnSale: false,
    oldPrice: 35,
    newPrice: 22,
  },
    {
    id: 1014,
    highlited: "new",
    category: 'barrel-chair',
    name: "Barrel",
    title: "Barrel Stool Chair ",
    description: "Description-1",
    Review: "Review",
    images: {
      mainImg : '/product/barrelchair-5.png',
      // mainImgAlt:'/products/feat5rvg.png',
      categoryImg: '/product/barrelchair-5.png',
      catIcon: '/icon/barrel.png',
      subImg1: '/products/feat4rvg.png',
      subImg2: '/products/feat3rvg.png',
      subImg3: '/products/feat2rvg.png'
    },
    isLarge: true,
    isNew: true,
    isOnSale: false,
    oldPrice: 35,
    newPrice: 22,
  },
    {
    id: 1015,
    highlited: "trending",
    category: 'arm-chair',
    name: "Arm",
    title: "Arm Stool Chair ",
    description: "Description-1",
    Review: "Review",
    images: {
      mainImg : '/product/arm2.jpg',
      // mainImgAlt:'/products/feat5rvg.png',
      categoryImg: '/product/arm1.jpg',
      catIcon: '/icon/arm.png',
      subImg1: '/products/feat4rvg.png',
      subImg2: '/products/feat3rvg.png',
      subImg3: '/products/feat2rvg.png'
    },
    isLarge: true,
    isNew: true,
    isOnSale: false,
    oldPrice: 35,
    newPrice: 22,
  },
    {
    id: 1016,
    highlited: "trending",
    category: 'adirondack-chair',
    name: "Adirondack",
    title: "Swivel Stool Chair ",
    description: "Description-1",
    Review: "Review",
    images: {
      mainImg : '/product/adirondack.jpg',
      // mainImgAlt:'/products/feat5rvg.png',
      categoryImg: '/product/adirondack.jpg',
      catIcon: '/icon/adiron.png',
      subImg1: '/products/feat4rvg.png',
      subImg2: '/products/feat3rvg.png',
      subImg3: '/products/feat2rvg.png'
    },
    isLarge: true,
    isNew: true,
    isOnSale: false,
    oldPrice: 35,
    newPrice: 22,
  },
    {
    id: 1017,
    highlited: "trending",
    category: 'bench-chair',
    name: "Bench",
    title: "Bench Stool Chair ",
    description: "Description-1",
    Review: "Review",
    images: {
      mainImg : '/product/bench.jpg',
      // mainImgAlt:'/products/feat5rvg.png',
      categoryImg: '/product/bench.jpg',
      catIcon: '/icon/bench.png',
      subImg1: '/products/feat4rvg.png',
      subImg2: '/products/feat3rvg.png',
      subImg3: '/products/feat2rvg.png'
    },
    isLarge: true,
    isNew: true,
    isOnSale: false,
    oldPrice: 35,
    newPrice: 22,
  },
    {
    id: 1018,
    highlited: "trending",
    category: 'wishbone-chair',
    name: "Wishbone",
    title: "Wishbone Stool Chair ",
    description: "Description-1",
    Review: "Review",
    images: {
      mainImg : '/product/wishbone-2.jpg',
      // mainImgAlt:'/products/feat5rvg.png',
      categoryImg: '/product/wishbone-2.png',
      catIcon: '/icon/wishbone.png',
      subImg1: '/products/feat4rvg.png',
      subImg2: '/products/feat3rvg.png',
      subImg3: '/products/feat2rvg.png'
    },
    isLarge: true,
    isNew: true,
    isOnSale: false,
    oldPrice: 35,
    newPrice: 22,
  },
    {
    id: 1019,
    highlited: "trending",
    category: 'cantilever-chair',
    name: "Cantilever",
    title: "Cantilever Stool Chair ",
    description: "Description-1",
    Review: "Review",
    images: {
      mainImg : '/product/cantilever.jpg',
      // mainImgAlt:'/products/feat5rvg.png',
      categoryImg: '/product/cantilever.png',
      catIcon: '/icon/cantilever.png',
      subImg1: '/products/feat4rvg.png',
      subImg2: '/products/feat3rvg.png',
      subImg3: '/products/feat2rvg.png'
    },
    isLarge: true,
    isNew: true,
    isOnSale: false,
    oldPrice: 35,
    newPrice: 22,
  },
    {
    id: 1020,
    highlited: "trending",
    category: 'deck-chair',
    name: "Deck",
    title: "Deck Stool Chair ",
    description: "Description-1",
    Review: "Review",
    images: {
      mainImg : '/product/deck.jpg',
      // mainImgAlt:'/products/feat5rvg.png',
      categoryImg: '/product/deck.png',
      catIcon: '/icon/deck.png',
      subImg1: '/products/feat4rvg.png',
      subImg2: '/products/feat3rvg.png',
      subImg3: '/products/feat2rvg.png'
    },
    isLarge: true,
    isNew: true,
    isOnSale: false,
    oldPrice: 35,
    newPrice: 22,
  },
    {
    id: 1021,
    highlited: "trending",
    category: 'monoblock-chair',
    name: "Monoblock",
    title: "Monoblock Stool Chair ",
    description: "Description-1",
    Review: "Review",
    images: {
      mainImg : '/product/mono.jpg',
      // mainImgAlt:'/products/feat5rvg.png',
      categoryImg: '/product/mono.png',
      catIcon: '/icon/mono.png',
      subImg1: '/products/feat4rvg.png',
      subImg2: '/products/feat3rvg.png',
      subImg3: '/products/feat2rvg.png'
    },
    isLarge: true,
    isNew: true,
    isOnSale: false,
    oldPrice: 35,
    newPrice: 22,
  },
  //   {
  //   id: 1014,
  //   highlited: "trending",
  //   category: 'swivel-chair',
  //   name: "Swivel",
  //   title: "Swivel Stool Chair ",
  //   description: "Description-1",
  //   Review: "Review",
  //   images: {
  //     mainImg : '/product/swivel1.jpg',
  //     // mainImgAlt:'/products/feat5rvg.png',
  //     categoryImg: '/product/swivelchair-4.png',
  //     catIcon: '/icon/swivel.png',
  //     subImg1: '/products/feat4rvg.png',
  //     subImg2: '/products/feat3rvg.png',
  //     subImg3: '/products/feat2rvg.png'
  //   },
  //   isLarge: true,
  //   isNew: true,
  //   isOnSale: false,
  //   oldPrice: 35,
  //   newPrice: 22,
  // },
  // {
  //   id: 1015,
  //   category: 'arm-chair',
  // },
  // {
  //   id: 1016,
  //   category: 'adirondack-chair',
  // },
  // {
  //   id: 1017,
  //   category: 'bench-chair',
  // },
  // {
  //   id: 1018,
  //   category: 'wishbone-chair',
  // },
  // {
  //   id: 1019,
  //   category: 'Cantilever-chair',
  // },
  // {
  //   id: 1020,
  //   category: 'deck-chair',
  // },
  // {
  //   id: 1021,
  //   category: 'monoblock-chair',
  // }

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
  // {
  //   id: 2,
  //   category: 'featured',
  //   prodCat: "Sofa",
  //   name: "sofa",
  //   catImg: '/category/trending1.jpg',
  //   href: "/",
  //   isLarge: false,
  //   category_id: 1001,
  //   img: '/products/feat2rvg.png',
  //   // imgAlt:'/products/featureprod5.png',
  //   title: "Library Stool Chair ",
  //   isNew: false,
  //   isOnSale: true,
  //   oldPrice: 35,
  //   newPrice: 22,
  // },
  // {
  //   id: 3,
  //   category: 'featured',
  //   prodCat: "Dinning",
  //   name: "Dinning",
  //   catImg: '/category/trending2.jpg',
  //   href: "/",
  //   isLarge: false,
  //   category_id: 1001,
  //   img: '/products/feat3rvg.png',
  //   title: "Library Stool Chair ",
  //   isNew: false,
  //   isOnSale: false,
  //   oldPrice: 35,
  //   newPrice: 22,
  // },
  // {
  //   id: 4,
  //   category: 'featured',
  //   prodCat: "living",
  //   name: "Living",
  //   catImg: '/category/trending3.jpg',
  //   href: "/",
  //   isLarge: false,
  //   category_id: 1001,
  //   img: '/products/feat4rvg.png',
  //   title: "Library Stool Chair ",
  //   isNew: false,
  //   isOnSale: false,
  //   oldPrice: 37,
  //   newPrice: 25,
  // },
  // {
  //   id: 5,
  //   category: 'trending',
  //   prodCat: "Kitchen",
  //   name: "Kitchen",
  //   catImg: '/category/large.jpg',
  //   href: "/",
  //   isLarge: true,
  //   category_id: 1002,
  //   img: '/products/trending1.jpg',
  //   title: "Library Stool Chair ",
  //   isNew: false,
  //   isOnSale: true,
  //   oldPrice: 335,
  //   newPrice: 222,
  // },
  // {
  //   id: 6,
  //   category: 'new',
  //   prodCat: "Kitchen",
  //   name: "Kitchen",
  //   category_id: 1003,
  //   img: '/products/featureprod4.png',
  //   title: "Library Stool Chair ",
  //   isNew: true,
  //   isOnSale: false,
  //   oldPrice: 35,
  //   newPrice: 22,
  // },
  // {
  //   id: 7,
  //   category: 'new',
  //   prodCat: "Kitchen",
  //   name: "Kitchen",
  //   category_id: 1003,
  //   img: '/products/new3.jpg',
  //   title: "Library Stool Chair ",
  //   isNew: true,
  //   isOnSale: false,
  //   oldPrice: 35,
  //   newPrice: 22,
  // },
  // {
  //   id: 8,
  //   category: 'trending',
  //   category_id: 1002,
  //   img: '/products/trending2.jpg',
  //   title: "Library Stool Chair ",
  //   isNew: false,
  //   isOnSale: true,
  //   oldPrice: 35,
  //   newPrice: 22,
  // },
  // {
  //   id: 9,
  //   category: 'new',
  //   category_id: 1003,
  //   img: '/products/new2.jpg',
  //   title: "Library Stool Chair ",
  //   isNew: true,
  //   isOnSale: false,
  //   oldPrice: 35,
  //   newPrice: 22,
  // },
  // {
  //   id: 10,
  //   category: 'trending',
  //   category_id: 1002,
  //   img: '/products/trending3.jpg',
  //   title: "Library Stool Chair ",
  //   isNew: false,
  //   isOnSale: false,
  //   oldPrice: 35,
  //   newPrice: 22,
  // },
  // {
  //   id: 11,
  //   category: 'trending',
  //   category_id: 1002,
  //   img: '/products/featureprod4.png',
  //   title: "Library Stool Chair ",
  //   isNew: false,
  //   isOnSale: false,
  //   oldPrice: 35,
  //   newPrice: 22,
  // },
  // {
  //   id: 12,
  //   category: 'new',
  //   category_id: 1003,
  //   img: '/products/new1.jpg',
  //   title: "Library Stool Chair ",
  //   isNew: true,
  //   isOnSale: false,
  //   oldPrice: 35,
  //   newPrice: 22,
  // },
  // {
  //   id: 13,
  //   category: 'featured',
  //   category_id: 1001,
  //   img: '/products/featureprod4.png',
  //   title: "Library Stool Chair ",
  //   isNew: false,
  //   isOnSale: false,
  //   oldPrice: 35,
  //   newPrice: 22,
  // },
  // {
  //   id: 14,
  //   category: 'featured',
  //   category_id: 1001,
  //   img: '/products/featureprod1.png',
  //   title: "Library Stool Chair ",
  //   isNew: false,
  //   isOnSale: false,
  //   oldPrice: 35,
  //   newPrice: 22,
  // },
  // {
  //   id: 14,
  //   category: 'new',
  //   img: '/products/featureprod4.png',
  //   title: "Library Stool Chair ",
  //   isNew: false,
  //   isOnSale: false,
  //   oldPrice: 35,
  //   newPrice: 22,
  // },
  // {
  //   id: 15,
  //   category: 'trending',
  //   img: '/products/featureprod4.png',
  //   title: "Library Stool Chair ",
  //   isNew: false,
  //   isOnSale: false,
  //   oldPrice: 35,
  //   newPrice: 22,
  // },

]
export const ClientImg = [
  {
    image : Client1 
  },
  {
    image : Client2 
  },
  {
    image : Client3 
  },
  {
    image : Client4 
  },
  {
    image : Client5
  },
  {
    image : Client6
  },
  {
    image : Client7 
  },
]
export const FooterData = [
  {
    logoIcon: '../src/assets/logo-icon.png',
    headline: 'Comforty',
    info : 'Vivamus tristique odio sit amet velit semper, eu posuere tur Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum',
    icon : ''
  }
]
