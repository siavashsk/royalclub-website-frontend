import {
  AiOutlinePlusCircle,
  AiOutlineUnlock,
  AiOutlineShopping,
  AiOutlineTransaction,
  AiOutlineCreditCard,
  AiFillSetting,
} from "react-icons/ai";
import { TfiCup } from "react-icons/tfi";
import { GiTwoCoins, GiReceiveMoney } from "react-icons/gi";
import { FiMonitor } from "react-icons/fi";
import { FaUsers } from "react-icons/fa";
import { RiMedal2Line } from "react-icons/ri";
import { SiOpslevel } from "react-icons/si";
import { chartsConfig } from "../config/ChartsConfig";
import { MdNotifications } from "react-icons/md"
import moment from "moment";
import { BsBell, BsBox } from "react-icons/bs";

export const leaguesData = [
  {
    id: 1,
    game: 'billiard',
    from: 'alirad',
    cost: '8000',
    capacity: '16',
    typeOfCost: 'coin',
    members: [{ id: 1, user_id: 'hero10', phone: '090107079355' }, { id: 2, user_id: 'david', phone: '090145479355' }, { id: 3, user_id: 'kali10', phone: '091007079355' }],
    round: '3',
    status: 'Playing',
  }, {
    id: 2,
    game: 'soccer',
    from: 'hosserinwolf',
    cost: '5900',
    capacity: '8',
    typeOfCost: 'coin',
    members: [{ id: 1, user_id: 'hero10', phone: '090107079355' }, { id: 2, user_id: 'david', phone: '090145479355' }, { id: 3, user_id: 'kali10', phone: '091007079355' }],
    round: '3',
    status: 'Playing',
  }, {
    id: 3,
    game: 'billiard',
    from: 'omidZZ',
    cost: '1000',
    capacity: '8',
    typeOfCost: 'gem',
    members: [{ id: 1, user_id: 'hero10', phone: '090107079355' }, { id: 2, user_id: 'david', phone: '090145479355' }, { id: 3, user_id: 'kali10', phone: '091007079355' }],
    round: '5',
    status: 'Playing',
  }, {
    id: 4,
    game: 'soccer',
    from: 'hesam200',
    cost: '5000',
    capacity: '16',
    typeOfCost: 'coin',
    members: [{ id: 1, user_id: 'hero10', phone: '090107079355' }, { id: 2, user_id: 'david', phone: '090145479355' }, { id: 3, user_id: 'kali10', phone: '091007079355' }],
    round: '3',
    status: 'Finished',
  },  {
    id: 5,
    game: 'soccer',
    from: 'asghar',
    cost: '4000',
    capacity: '16',
    typeOfCost: 'coin',
    members: [{ id: 1, user_id: 'hero10', phone: '090107079355' }, { id: 2, user_id: 'david', phone: '090145479355' }, { id: 3, user_id: 'kali10', phone: '091007079355' }],
    round: '3',
    status: 'Finished',
  },
  {
    id: 6,
    game: 'billiard',
    from: 'kazem',
    cost: '8000',
    capacity: '16',
    typeOfCost: 'coin',
    members: [{ id: 1, user_id: 'hero10', phone: '090107079355' }, { id: 2, user_id: 'david', phone: '090145479355' }, { id: 3, user_id: 'kali10', phone: '091007079355' }],
    round: '3',
    status: 'Playing',
  }
]

export const sidebarData = [
  {
    id: 1,
    name: "Dashboard",
    icon: <FiMonitor size={20} />,
    path: "panel/dashboard",
  },
  { id: 2, name: "Users", icon: <FaUsers size={20} />, path: "panel/users" },
  {
    id: 3,
    name: "Tournaments",
    icon: <TfiCup size={20} />,
    path: "panel/tournaments",
  },
  {
    id: 4,
    name: "Leagues",
    icon: <RiMedal2Line size={20} />,
    path: "panel/leagues",
  },
  {
    id: 5,
    name: "Products",
    icon: <BsBox size={20} />,
    path: "panel/products",
  },
  {
    id: 6,
    name: "Transactions",
    icon: <AiOutlineTransaction size={20} />,
    path: "panel/transactions",
  },
  {
    id: 7,
    name: "Withdrawal",
    icon: <GiReceiveMoney size={20} />,
    path: "panel/withdrawal",
  },
  {
    id: 8,
    name: "Notifications",
    icon: <MdNotifications size={20} />,
    path: "panel/notifications",
  },
  {
    id: 9,
    name: "Settings",
    icon: <AiFillSetting size={20} />,
    path: "panel/settings",
  },
];

export const navMenuData = [
  { id: 1, name: "About Us", path: "/about-us" },
  { id: 2, name: "Contact Us", path: "/contact-us" },
  { id: 3, name: "Services", path: "/services" },
  { id: 4, name: "Shop", path: "/shop" },
  { id: 5, name: "Login", path: "/auth/login" },
];

export const platformSettingsData = [
  {
    id: 1,
    title: "account",
    options: [
      {
        checked: true,
        label: "Email me when someone follows me",
      },
      {
        checked: false,
        label: "Email me when someone answers on my post",
      },
      {
        checked: true,
        label: "Email me when someone mentions me",
      },
    ],
  },
  {
    id: 2,
    title: "application",
    options: [
      {
        checked: false,
        label: "New launches and projects",
      },
      {
        checked: true,
        label: "Monthly product updates",
      },
      {
        checked: false,
        label: "Subscribe to newsletter",
      },
    ],
  },
];

export const conversationsData = [
  {
    id: 1,
    img: "/images/avatars/9.png",
    name: "David",
    message: "Hi! I need more information...",
  },
  {
    id: 2,
    img: "/images/avatars/10.png",
    name: "Alexander",
    message: "Awesome work, can you...",
  },
  {
    id: 3,
    img: "/images/avatars/11.png",
    name: "Ivanna",
    message: "About files I can...",
  },
  {
    id: 4,
    img: "/images/avatars/12.png",
    name: "Peterson",
    message: "Have a great afternoon...",
  },
  {
    id: 5,
    img: "/images/avatars/13.png",
    name: "Bruce Mars",
    message: "Hi! I need more information...",
  },
];

export const tournamentsData = [
  {
    id: 1,
    game: 'soccer',
    cost: '5000',
    capacity: '8',
    status: 'playing',
    typeOfCost: 'coin',
    createdAt: "2022/12/03",
  },
  {
    id: 2,
    game: 'soccer',
    cost: '5000',
    capacity: '8',
    status: 'playing',
    typeOfCost: 'coin',
    createdAt: "2022/12/03",
  },
  {
    id: 3,
    game: 'soccer',
    cost: '3000',
    capacity: '8',
    status: 'finished',
    typeOfCost: 'coin',
    createdAt: "2022/12/03",
  },
  {
    id: 4,
    game: 'soccer',
    cost: '1000',
    capacity: '8',
    status: 'playing',
    typeOfCost: 'coin',
    createdAt: "2022/12/03",
  },
  {
    id: 5,
    game: 'billiard',
    cost: '50',
    capacity: '8',
    status: 'finished',
    typeOfCost: 'gem',
    createdAt: "2022/12/03",
  },
  {
    id: 6,
    game: 'billiard',
    cost: '10',
    capacity: '8',
    status: 'finished',
    typeOfCost: 'coin',
    createdAt: "2022/12/03",
  },
  {
    id: 7,
    game: 'billiard',
    cost: '10',
    capacity: '8',
    status: 'finished',
    typeOfCost: 'coin',
    createdAt: "2022/12/03",
  },

  {
    id: 8,
    game: 'billiard',
    cost: '10',
    capacity: '8',
    status: 'finished',
    typeOfCost: 'coin',
    createdAt: "2022/12/03",
  },


]

export const projectsData = [
  {
    id: 1,
    img: "/images/home-decor-1.jpeg",
    title: "Modern",
    tag: "Project #1",
    description:
      "As Uber works through a huge amount of internal management turmoil.",
    route: "/dashboard/profile",
    members: [
      { img: "/images/team-1.jpeg", name: "Romina Hadid" },
      { img: "/images/team-2.jpeg", name: "Ryan Tompson" },
      { img: "/images/team-3.jpeg", name: "Jessica Doe" },
      { img: "/images/team-4.jpeg", name: "Alexander Smith" },
    ],
  },
  {
    id: 2,
    img: "/images/home-decor-2.jpeg",
    title: "Scandinavian",
    tag: "Project #2",
    description:
      "Music is something that every person has his or her own specific opinion about.",
    route: "/dashboard/profile",
    members: [
      { img: "/images/team-4.jpeg", name: "Alexander Smith" },
      { img: "/images/team-3.jpeg", name: "Jessica Doe" },
      { img: "/images/team-2.jpeg", name: "Ryan Tompson" },
      { img: "/images/team-1.jpeg", name: "Romina Hadid" },
    ],
  },
  {
    id: 3,
    img: "/images/home-decor-3.jpeg",
    title: "Minimalist",
    tag: "Project #3",
    description:
      "Different people have different taste, and various types of music.",
    route: "/dashboard/profile",
    members: [
      { img: "/images/team-1.jpeg", name: "Romina Hadid" },
      { img: "/images/team-2.jpeg", name: "Ryan Tompson" },
      { img: "/images/team-3.jpeg", name: "Jessica Doe" },
      { img: "/images/team-4.jpeg", name: "Alexander Smith" },
    ],
  },
  {
    id: 4,
    img: "/images/home-decor-4.jpeg",
    title: "Gothic",
    tag: "Project #4",
    description:
      "Why would anyone pick blue over pink? Pink is obviously a better color.",
    route: "/dashboard/profile",
    members: [
      { img: "/images/team-4.jpeg", name: "Alexander Smith" },
      { img: "/images/team-3.jpeg", name: "Jessica Doe" },
      { img: "/images/team-2.jpeg", name: "Ryan Tompson" },
      { img: "/images/team-1.jpeg", name: "Romina Hadid" },
    ],
  },
];

export const statisticsCardsData = [
  {
    id: 1,
    color: "teal",
    icon: <SiOpslevel size={30} />,
    title: "Number Of Games",
    value: "2",
  },
  {
    id: 2,
    color: "indigo",
    icon: <GiTwoCoins size={30} />,
    title: "Transaction APIs",
    value: "36",
  },
  {
    id: 3,
    color: "amber",
    icon: <TfiCup size={30} color="white" />,
    title: "Tournaments",
    value: "6",
  },
];

export const websiteViewsChart = {
  type: "line",
  height: 220,
  series: [
    {
      name: "Sales",
      data: [
        7, 39, 14, 9, 45, 31, 41, 21,
      ],
    },
  ],
  options: {
    ...chartsConfig,
    colors: ["#fff"],
    stroke: {
      lineCap: "round",
    },
    markers: {
      size: 5,
    },
    xaxis: {
      ...chartsConfig.xaxis,
      categories: [
        "2021-05-25",
        "2021-06-25",
        "2021-07-25",
        "2021-08-25",
        "2021-09-25",
        "2021-10-25",
        "2021-11-25",
        "2021-12-25",
      ],
    },
  },
};

export const statisticsChartsData = [
  {
    title: "Website View",
    chart: websiteViewsChart,
  },
];

export const alerts = [
  { id: 1, color: "indigo", message: "first alert" },
  { id: 2, color: "indigo", message: "second alert" },
  { id: 3, color: "indigo", message: "third alert" },
];

export const authorsTableData = [
  {
    id: "63905733183b920dae47bfdc",
    avatar: "5",
    online: false,
    username: "fakedata",
    phone: "09354326413",
    cup: 295,
    coin: 1577,
    gem: 0,
    last_online: "2022-12-13T11:54:57.746Z",
    last_disconnect: "2022-12-13 3:25:44",
  },
  {
    id: "639452762896fe047b15c946",
    avatar: "1",
    online: false,
    username: "fakedata",
    phone: "09382741846",
    cup: 195,
    coin: 1056,
    gem: 0,
    last_online: "2022-12-12T13:44:14.508Z",
    last_disconnect: "2022-12-12 5:25:14",
  },
  {
    id: "639428607512886a8f26ba27",
    avatar: "4",
    online: false,
    username: "fakedata",
    phone: "09382741806",
    cup: 240,
    coin: 945,
    gem: 0,
    last_online: "2022-12-12T10:33:31.002Z",
    last_disconnect: "2022-12-12 2:4:14",
  },
  {
    id: "638d92a447f86b6d476090f6",
    avatar: "3",
    online: false,
    username: "kai",
    phone: "09382741802",
    cup: 315,
    coin: 905,
    gem: 0,
    last_online: "2022-12-12T10:33:31.949Z",
    last_disconnect: "2022-12-12 2:4:12",
  },
  {
    id: "638d93ca47f86b6d4760a876",
    avatar: "2",
    online: false,
    username: "Guest47182",
    phone: "09382741840",
    cup: 265,
    coin: 658,
    gem: 0,
    last_online: "2022-12-10T06:26:17.616Z",
    last_disconnect: "2022-12-10 9:56:33",
  },
];

export const projectsTableData = [
  {
    id: 1,
    img: "/images/billiard.png",
    name: "Billiard Bal",
    budget: "1,450.000 تومان",
    completion: 60,
  },
  {
    id: 2,
    img: "/images/succer.png",
    name: "Succer Bal",
    budget: "350,000 تومان",
    completion: 10,
  },
];

export const ordersOverviewData = [
  {
    id: 1,
    icon: <BsBell />,
    color: "text-green-500",
    title: "17,000 تومان, Buy Item in Billiard",
    description: "2 Jan 7:20 PM",
  },
  {
    id: 2,
    icon: <AiOutlinePlusCircle />,
    color: "text-red-500",
    title: "New order Code: 18324122548791879",
    description: "4 Jan 11 PM",
  },
  {
    id: 3,
    icon: <AiOutlineShopping />,
    color: "text-blue-500",
    title: "55,000 تومان, Buy Item in Succer",
    description: "4 Jan 9:34 PM",
  },
  {
    id: 4,
    icon: <AiOutlineCreditCard />,
    color: "text-orange-500",
    title:
      "Added New card for Resive Transactions game Succer Code :458796184395133",
    description: "6 Jan 2:20 AM",
  },
  {
    id: 5,
    icon: <AiOutlineUnlock />,
    color: "text-pink-500",
    title: "Unlock packages APIs Number 2 for development Game",
    description: "8 Jan 4:54 AM",
  },
];

export const transactionsData = [
  {
    id: 1,
    user_id: "Alexander",
    phone: '09017778789',
    type: "coin",
    desc: 'this is a description',
    amount: 99,
    status: "approved",
    createdAt: "2022/12/03",
  },
  {
    id: 2,
    user_id: "Emma",
    phone: '09017778789',
    type: "coin",
    desc: 'this is a description',
    amount: 122,
    status: "pending",
    createdAt: "2022/12/03",
  },
  {
    id: 3,
    user_id: "Tonny",
    phone: '09017778789',
    type: "gem",
    desc: 'this is a description',
    amount: 122,
    status: "ok",
    createdAt: "2022/12/05",
  },
  {
    id: 4,
    user_id: "Alexander",
    phone: '09017778789',
    type: "gem",
    desc: 'this is a description',
    amount: 500,
    status: "declined",
    createdAt: "2022/12/03",
  },
  {
    id: 5,
    user_id: "Kyle",
    amount: 12.3, 
    phone: '09017778789',
    type: "gem",
    desc: 'this is a description',
    status: "declined",
    createdAt: "2022/12/01",
  },
  {
    id: 6,
    user_id: "Teddy",
    amount: 12.3, 
    phone: '09017888789',
    type: "coin",
    desc: 'this is a description',
    status: "ok",
    createdAt: "2022/12/01",
  },
];


export const withdrawalData = [
  {
    id: 1,
    user_id: "Alexander",
    phone: '09017778789',
    amount: 500,
    status: "approved",
    createdAt: "2022/12/03",
  },
  {
    id: 2,
    user_id: "Robert",
    phone: '09017778789',
    amount: 120,
    status: "approved",
    createdAt: "2022/12/03",
  },
  {
    id: 3,
    user_id: "Siavash",
    phone: '09017778789',
    amount: 122,
    status: "declined",
    createdAt: "2022/12/05",
  },
  {
    id: 4,
    user_id: "Alex",
    phone: '09017778789',
    amount: 500,
    status: "approved",
    createdAt: "2022/12/03",
  },
  {
    id: 5,
    user_id: "Stephen",
    amount: 600, 
    phone: '09017778789',
    status: "declined",
    createdAt: "2022/12/01",
  },
  {
    id: 6,
    user_id: "suzan",
    amount: 700, 
    phone: '09051178783',
    status: "declined",
    createdAt: "2022/10/02",
  },
  {
    id: 7,
    user_id: "Johnny",
    amount: 600, 
    phone: '09012348789',
    status: "approved",
    createdAt: "2023/03/01",
  },
  {
    id: 8,
    user_id: "Jimmy",
    amount: 600, 
    phone: '09382348700',
    status: "approved",
    createdAt: "2023/04/16",
  },
];

export const selectUserSortData = [
  // all gems
  [
    { id: 1, label: "Less than 5", value: "5", slug: "lte" },
    { id: 2, label: "Less than 10", value: "10", slug: "lte" },
    { id: 3, label: "Less than 20", value: "20", slug: "lte" },
    { id: 4, label: "Less than 50", value: "50", slug: "lte" },
    { id: 5, label: "Less than 100", value: "100", slug: "lte" },
    { id: 6, label: "Less than 250", value: "250", slug: "lte" },
    { id: 7, label: "Less than 500", value: "500", slug: "lte" },
    { id: 8, label: "More than 500", value: "500", slug: "gte" },
  ],
  /// coins
  [
    { id: 1, label: "No coin", value: "0", slug: "ne" },
    { id: 2, label: "Less than 1000", value: "1000", slug: "lte" },
    { id: 3, label: "Less than 2000", value: "2000", slug: "lte" },
    { id: 4, label: "Less than 3000", value: "3000", slug: "lte" },
    { id: 5, label: "Less than 4000", value: "4000", slug: "lte" },
    { id: 6, label: "Less than 5000", value: "5000", slug: "lte" },
    { id: 7, label: "More than 5000", value: "5000", slug: "gte" },
  ],
  // craeted at
  [
    {
      id: 1,
      label: "1 day ago",
      value: moment().subtract(1, "days").format("YYYY-MM-DD"),
      slug: "lte",
    },
    {
      id: 2,
      label: "5 day ago",
      value: moment().subtract(5, "days").format("YYYY-MM-DD"),
      slug: "lte",
    },
    {
      id: 3,
      label: "10 day ago",
      value: moment().subtract(10, "days").format("YYYY-MM-DD"),
      slug: "lte",
    },
    {
      id: 4,
      label: "20 day ago",
      value: moment().subtract(20, "days").format("YYYY-MM-DD"),
      slug: "lte",
    },
    {
      id: 5,
      label: "50 day ago",
      value: moment().subtract(50, "days").format("YYYY-MM-DD"),
      slug: "lte",
    },
    {
      id: 6,
      label: "100 day ago",
      value: moment().subtract(100, "days").format("YYYY-MM-DD"),
      slug: "lte",
    },
    {
      id: 7,
      label: "150 day ago",
      value: moment().subtract(150, "days").format("YYYY-MM-DD"),
      slug: "lte",
    },
  ],
  // soccer level
  [
    { id: 1, label: "Less than 5", value: "5", slug: "lte" },
    { id: 2, label: "Less than 10", value: "10", slug: "lte" },
    { id: 3, label: "Less than 15", value: "15", slug: "lte" },
    { id: 4, label: "Less than 50", value: "50", slug: "lte" },
    { id: 5, label: "Less than 55", value: "55", slug: "lte" },
    { id: 6, label: "Less than 60", value: "60", slug: "lte" },
    { id: 7, label: "Less than 65", value: "65", slug: "lte" },
    { id: 8, label: "More than 65", value: "65", slug: "gte" },
  ],
  // billiard levels
  [
    { id: 1, label: "Less than 5", value: "5", slug: "lte" },
    { id: 2, label: "Less than 10", value: "10", slug: "lte" },
    { id: 3, label: "Less than 15", value: "15", slug: "lte" },
    { id: 4, label: "Less than 50", value: "50", slug: "lte" },
    { id: 5, label: "Less than 55", value: "55", slug: "lte" },
    { id: 6, label: "Less than 60", value: "60", slug: "lte" },
    { id: 7, label: "Less than 65", value: "65", slug: "lte" },
    { id: 8, label: "More than 65", value: "65", slug: "gte" },
  ],

  // soccer total games
  [
    { id: 1, label: "Less than 10 games", value: "10", slug: "lte" },
    { id: 2, label: "Less than 20 games", value: "20", slug: "lte" },
    { id: 3, label: "Less than 50 games", value: "50", slug: "lte" },
    { id: 4, label: "Less than 250 games", value: "250", slug: "lte" },
    { id: 5, label: "Less than 500 games", value: "500", slug: "lte" },
    { id: 6, label: "More than 500 games", value: "500", slug: "gte" },
  ],
  // billiard total games
  [
    { id: 1, label: "Less than 10 games", value: "10", slug: "lte" },
    { id: 2, label: "Less than 20 games", value: "20", slug: "lte" },
    { id: 3, label: "Less than 50 games", value: "50", slug: "lte" },
    { id: 4, label: "Less than 250 games", value: "250", slug: "lte" },
    { id: 5, label: "Less than 500 games", value: "500", slug: "lte" },
    { id: 6, label: "More than 500 games", value: "500", slug: "gte" },
  ],
  // cup
  [
    { id: 1, label: "Less than 500", value: "500", slug: "lte" },
    { id: 2, label: "Less than 1000", value: "1000", slug: "lte" },
    { id: 3, label: "Less than 2000", value: "2000", slug: "lte" },
    { id: 4, label: "Less than 5000", value: "5000", slug: "lte" },
    { id: 5, label: "Less than 10000", value: "10000", slug: "lte" },
    { id: 6, label: "More than 10000", value: "10000", slug: "gte" },
  ],
  // soccer total cup
  [
    { id: 1, label: "Less than 500", value: "500", slug: "lte" },
    { id: 2, label: "Less than 1000", value: "1000", slug: "lte" },
    { id: 3, label: "Less than 2000", value: "2000", slug: "lte" },
    { id: 4, label: "Less than 5000", value: "5000", slug: "lte" },
    { id: 5, label: "Less than 10000", value: "10000", slug: "lte" },
    { id: 6, label: "More than 10000", value: "10000", slug: "gte" },
  ],
  // billiard total cup
  [
    { id: 1, label: "Less than 500", value: "500", slug: "lte" },
    { id: 2, label: "Less than 1000", value: "1000", slug: "lte" },
    { id: 3, label: "Less than 2000", value: "2000", slug: "lte" },
    { id: 4, label: "Less than 5000", value: "5000", slug: "lte" },
    { id: 5, label: "Less than 10000", value: "10000", slug: "lte" },
    { id: 6, label: "More than 10000", value: "10000", slug: "gte" },
  ],
];

export const specialProductsData = [
  { id: 1, image: "avatar9",type: "gem", value: "5000", active: true },
  { id: 2, image: "avatar8",type: "gem", value: "5000", active: true },
  { id: 3, image: "avatar7",type: "coin", value: "3000", active: false },
  { id: 4, image: "avatar4",type: "gem", value: "2000", active: true },
  { id: 5, image: "avatar5",type: "coin", value: "2000", active: false },
  { id: 6, image: "avatar9",type: "coin", value: "4000", active: true },
  { id: 7, image: "avatar8",type: "gem", value: "1000", active: true },
  { id: 8, image: "avatar7",type: "coin", value: "500", active: false },
  { id: 9, image: "avatar10",type: "coin", value: "5000", active: true },
  { id: 10, image: "avatar11",type: "coin", value: "5000", active: false },
  { id: 11, image: "avatar12",type: "coin", value: "500", active: true },
  { id: 12, image: "avatar13",type: "coin", value: "500", active: false },
  { id: 13, image: "avatar14",type: "gem", value: "5000", active: true },
  { id: 14, image: "avatar15",type: "coin", value: "1000", active: false },
];
