const DUMMY_EVENTS = [
  {
    id: "e1",
    title: "Programming for everyone",
    description:
      "Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.",
    location: "California 25, 12345 LA",
    date: "2021-05-12",
    image: "img/programming.jpg",
    isFeatured: false,
  },
  {
    id: "e2",
    title: "Networking for introverts",
    description:
      "We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
    location: "New Wall Street 5, 98765 New Work",
    date: "2021-05-30",
    image: "img/introverts.jpg",
    isFeatured: true,
  },
  {
    id: "e3",
    title: "Networking for extroverts",
    description:
      "You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.",
    location: "USA 12, 10115 Chinese Town",
    date: "2022-04-10",
    image: "img/extroverts.jpg",
    isFeatured: false,
  },
  {
    id: "e4",
    title: "Racing",
    description: "Challenge your self & show your driving skill to others",
    location: "Netherlands 99, 54756 Simon Street",
    date: "2021-11-11",
    image: "img/race.jpg",
    isFeatured: true,
  },
  {
    id: "e5",
    title: "Shopping Center Opening",
    description: "Find everything you need on our shopping mall",
    location: "Tehran Opal Shopping Center, Iran",
    date: "2020-04-04",
    image: "img/shop.jpg",
    isFeatured: false,
  },
  {
    id: "e6",
    title: "Meditation & Relaxing",
    description: "Refresh yourself & feel the peace",
    location: "New Mexico, Peter.c",
    date: "2020-01-30",
    image: "img/meditation.jpg",
    isFeatured: false,
  },
  {
    id: "e7",
    title: "Book Fair",
    description: "",
    location: "My Street 12, 10115 Broke City",
    date: "2021-04-18",
    image: "img/books.jpg",
    isFeatured: false,
  },
  {
    id: "e8",
    title: "toy exhibition for Kids",
    description:
      "Enjoy the greatest toys exhibition of the century with your kids",
    location: "Michel Street 88, UK",
    date: "2020-08-16",
    image: "img/toys.jpg",
    isFeatured: true,
  },
  {
    id: "e9",
    title: "Acrobat",
    description: "The Bigest Circus Of The Year",
    location: "Venice Beach, California, LA",
    date: "2020-03-09",
    image: "img/acrobat.jpg",
    isFeatured: true,
  },
  {
    id: "e10",
    title: "La Tomatina",
    description:
      "It's a festival which participants throw tomatoes and get involved in a tomato fight purely for entertainment purposes",
    location: "Spain, Valencian",
    date: "2021-12-17",
    image: "img/tomato.jpg",
    isFeatured: true,
  },
];

export function getFeaturedEvents() {
  return DUMMY_EVENTS.filter((event) => event.isFeatured);
}

export function getAllEvents() {
  return DUMMY_EVENTS;
}

export function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;

  let filteredEvents = DUMMY_EVENTS.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}

export function getEventById(id) {
  return DUMMY_EVENTS.find((event) => event.id === id);
}
