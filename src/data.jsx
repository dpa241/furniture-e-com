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
        href: "/"
    },
    {
        name: "About",
        href: "/"
    },
    {
        name: "Contact",
        href: "/"
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
    }
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
    id: 1,
    category: 'featured',
    prodCat: "sofa",
    name: "Chair",
    catImg: '/category/featureprod5.png',
    href: "/",
    isLarge: false,
    category_id: 1001,
    img: '/products/featureprod1.png',
    imgAlt:'/products/featureprod5.png',
    title: "Library Stool Chair ",
    isNew: true,
    isOnSale: false,
    oldPrice: 35,
    newPrice: 22,
  },
  {
    id: 2,
    category: 'featured',
    prodCat: "Sofa",
    name: "sofa",
    catImg: '/category/trending1.jpg',
    href: "/",
    isLarge: false,
    category_id: 1001,
    img: '/products/featureprod2.png',
    // imgAlt:'/products/featureprod5.png',
    title: "Library Stool Chair ",
    isNew: false,
    isOnSale: true,
    oldPrice: 35,
    newPrice: 22,
  },
  {
    id: 3,
    category: 'featured',
    prodCat: "Dinning",
    name: "Dinning",
    catImg: '/category/trending2.jpg',
    href: "/",
    isLarge: false,
    category_id: 1001,
    img: '/products/featureprod3.png',
    title: "Library Stool Chair ",
    isNew: false,
    isOnSale: false,
    oldPrice: 35,
    newPrice: 22,
  },
  {
    id: 4,
    category: 'featured',
    prodCat: "Living",
    name: "Living",
    catImg: '/category/trending3.jpg',
    href: "/",
    isLarge: false,
    category_id: 1001,
    img: '/products/featureprod4.png',
    title: "Library Stool Chair ",
    isNew: false,
    isOnSale: false,
    oldPrice: 35,
    newPrice: 22,
  },
  {
    id: 5,
    category: 'trending',
    prodCat: "Kitchen",
    name: "Kitchen",
    catImg: '/category/large.jpg',
    href: "/",
    isLarge: true,
    category_id: 1002,
    img: '/products/trending1.jpg',
    title: "Library Stool Chair ",
    isNew: false,
    isOnSale: true,
    oldPrice: 35,
    newPrice: 22,
  },
  {
    id: 6,
    category: 'new',
    category_id: 1003,
    img: '/products/featureprod4.png',
    title: "Library Stool Chair ",
    isNew: true,
    isOnSale: false,
    oldPrice: 35,
    newPrice: 22,
  },
  {
    id: 7,
    category: 'new',
    category_id: 1003,
    img: '/products/new3.jpg',
    title: "Library Stool Chair ",
    isNew: true,
    isOnSale: false,
    oldPrice: 35,
    newPrice: 22,
  },
  {
    id: 8,
    category: 'trending',
    category_id: 1002,
    img: '/products/trending2.jpg',
    title: "Library Stool Chair ",
    isNew: false,
    isOnSale: true,
    oldPrice: 35,
    newPrice: 22,
  },
  {
    id: 9,
    category: 'new',
    category_id: 1003,
    img: '/products/new2.jpg',
    title: "Library Stool Chair ",
    isNew: true,
    isOnSale: false,
    oldPrice: 35,
    newPrice: 22,
  },
  {
    id: 10,
    category: 'trending',
    category_id: 1002,
    img: '/products/trending3.jpg',
    title: "Library Stool Chair ",
    isNew: false,
    isOnSale: false,
    oldPrice: 35,
    newPrice: 22,
  },
  {
    id: 11,
    category: 'trending',
    category_id: 1002,
    img: '/products/featureprod4.png',
    title: "Library Stool Chair ",
    isNew: false,
    isOnSale: false,
    oldPrice: 35,
    newPrice: 22,
  },
  {
    id: 12,
    category: 'new',
    category_id: 1003,
    img: '/products/new1.jpg',
    title: "Library Stool Chair ",
    isNew: true,
    isOnSale: false,
    oldPrice: 35,
    newPrice: 22,
  },
  {
    id: 13,
    category: 'featured',
    category_id: 1001,
    img: '/products/featureprod4.png',
    title: "Library Stool Chair ",
    isNew: false,
    isOnSale: false,
    oldPrice: 35,
    newPrice: 22,
  },
  {
    id: 14,
    category: 'featured',
    category_id: 1001,
    img: '/products/featureprod1.png',
    title: "Library Stool Chair ",
    isNew: false,
    isOnSale: false,
    oldPrice: 35,
    newPrice: 22,
  },
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

