
type CusImageData = {
    data: string,
    height: number,
    width: number
};

type Image = string  | CusImageData;

interface User {
    id: number;
    name: string;
    image: Image,
}

// bad User;

const badUser: User = {
    id: 1,
    name: 'dog',
    image: 'hello'
} satisfies User;


// good User
const cusImage : CusImageData = {
    data: 'image data',
    height: 100,
    width: 100
} ;

// satisfies , specify key type; 

const goodUser = {
    id: 2,
    name: 'good user',
    image: cusImage
} satisfies User


//Record

type  ColorS = 'blue' | 'yellow';

const data: Record<ColorS, string>= {
    blue: 'blue', 
    yellow: 'yellow',
}