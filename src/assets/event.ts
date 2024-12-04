import img1 from '../imgs/1.png';
import img2 from '../imgs/2.png';
import img3 from '../imgs/3.png';
import img4 from '../imgs/4.jpg';
import img5 from '../imgs/5.jpg';
import img6 from '../imgs/6.jpg';

export type MyEvent = {
    id: string, 
    name: string, 
    description: string, 
    startDate: Date, 
    endDate: Date, 
    imgSrc: string, 
    city: string, 
    place: string,
    people: string[]
}

export const events: MyEvent[] = [
    {
        id: '1',
        name: 'BeerAndFries',
        description: 'A flavorful celebration pairing craft beers with gourmet fries. Enjoy a relaxed atmosphere, \
        live music, and a curated menu of unique fry creations and beer selections. Perfect for foodies and brew \
        enthusiasts alike!',
        startDate: new Date('2024-12-13'),
        endDate: new Date('2024-12-15'),
        imgSrc: img1,
        city: 'Moscow',
        place: 'Chechovskaya, 13',
        people: ['Ivan - small person in a big IT world', 
            'Artyom I - BIG brainer']
    },
    {
        id: '2',
        name: 'TimeClub "Green Door"',
        description: 'Step into an enchanting evening of mystery and camaraderie. Explore captivating activities, \
         thought-provoking discussions, and immersive games behind the "Green Door." A perfect blend of fun,\
          connection, and unforgettable moments awaits!',
        startDate: new Date('2024-12-07'),
        endDate: new Date('2024-12-08'),
        imgSrc: img2,
        city: 'Krasnodar',
        place: '',
        people: []
    },
    {
        id: '3',
        name: 'Small walk in the city center',
        description: 'Discover hidden gems and charming corners on a leisurely stroll through the city center. \
        Perfect for history buffs and urban explorers, this walk blends culture, stories, and scenic views.',
        startDate: new Date('2024-12-23'),
        endDate: new Date('2024-12-29'),
        imgSrc: img3,
        city: 'Moscow',
        place: 'Paveletskaya plaza',
        people: []
    },
    {
        id: '4',
        name: 'Cottage Party',
        description: 'Escape the city and immerse yourself in a 5-day relaxation and revelry at our exclusive Cottage Party! \
        Nestled in a picturesque countryside setting, this event offers the perfect blend of comfort and excitement.',
        startDate: new Date('2025-01-05'),
        endDate: new Date('2025-01-10'),
        imgSrc: img4,
        city: 'Moscow',
        place: 'Moscow region, Morozovo, 248',
        people: []
    },
    {
        id: '5',
        name: "Rostov's rally racing",
        description: 'Get ready for an adrenaline-pumping adventure like no other! Join us for the exhilarating event, \
        where drivers from across the region will test their skills on challenging off-road terrain. \
        You will recieve thrilling off-road course, competitive spirit and spectator fun. \
        There will be 4x4, ATVs and Motorcycles categories',
        startDate: new Date('2025-02-10'),
        endDate: new Date('2025-02-11'),
        imgSrc: img5,
        city: 'Volgodonsk',
        place: 'Solnecnhy village',
        people: []
    },
    {
        id: '6',
        name: 'Two of us, one at a time',
        description: 'Looking for a unique way to spend an evening? Look no further than "Vdvoem po Odnoy"! \
        This one-of-a-kind anti-cafe combines the best of both worlds: a wide selection of board games and a variety of alcoholic beverages.\
        "Vdvoem po Odnoy" - combining the pleasant with the pleasant',
        startDate: new Date('2024-12-25 20:00:00'),
        endDate: new Date('2024-12-25 23:59:59'),
        imgSrc: img6,
        city: 'Moscow',
        place: 'Aviamotornaya, 41B',
        people: []
    }
]