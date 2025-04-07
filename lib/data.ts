export const navLinks = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Contact",
    href: "#contact ",
  },
]

export const techs = [
  {
    name: 'React',
    color: '#79155B',
  },
  {
    name: 'Next',
    color: '#C23373',
  },
  {
    name: 'PHP',
    color: '#F6635C',
  },
  {
    name: 'Laravel',
    color: '#FFBA86',
  },
]


export const projects = [
  {
    name: 'Blog App',
    techs: ['Laravel', 'Livewire'],
    github: 'https://github.com/Paing4M/blog_app',
    demo: 'https://blog-app.pform.serv00.net/',
    image: '/projects/my_blog.png',
    desc: 'A Laravel-based blog application with an admin panel. Features include post creation, commenting, user specific views, search functionality, and filters.'
  },

  {
    name: 'Ecomm',
    techs: ['React Js', 'Laravel'],
    github: 'https://github.com/Paing4M/react_laravel_ecomm',
    demo: 'https://ecomm-bice.vercel.app/',
    image: '/projects/ecomm.png',
    desc: 'This Ecommerce application uses React.js and Laravel for frontend and backend respectively, with Redux\n' +
      'for state management and Stripe for payments. React Query is also utilized for efficient data fetching.'
  },

  {
    name: 'MySocial',
    techs: ['Next Js', 'Laravel'],
    github: 'https://github.com/Paing4M/MySocial',
    demo: null,
    image: '/projects/my_social.png',
    desc: 'Developed a real-time social media application using Next.js for the frontend and Laravel for the backend.'

  },

  {
    name: 'Next Soundtrack',
    techs: ['Next Js', 'Laravel'],
    github: 'https://github.com/Paing4M/MySocial',
    demo: 'https://next-soundtrack-frontend.vercel.app/',
    image: '/projects/next_soundtrack.png',
    desc: 'Developed a music streaming app with Next.js for the UI and Laravel for the backend.'
  },

]

export const techList = [
  'Javascript',
  'TypeScript',
  'React Js',
  'Next Js',
  'PHP',
  'Laravel',
]