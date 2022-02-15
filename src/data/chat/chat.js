import user1 from '../../Assets/chat/user1.png';
import user2 from '../../Assets/chat/user2.png';
import user3 from '../../Assets/chat/user3.png';
import user4 from '../../Assets/chat/user4.png';
import user5 from '../../Assets/chat/user5.png';
import user6 from '../../Assets/chat/user6.png';
let date = new Date();


let randomTime = () => {
    return Math.abs(new Date(Date.now()).getMinutes() - new Date(date - (Math.floor(Math.random() * 20 + 1) * 60 * 1000)).getMinutes());
}
let chatData = [
    {
        id: 1,
        name: "Lettie Erickson",
        image: user1,
        description: 'lorem ipsum dolor set amet lorem',
        time: `${randomTime()} min`
    },
    {
        id: 2,
        name: "Fanny Weber",
        image: user2,
        description: 'lorem ipsum dolor set amet lorem',
        time: `${randomTime()} min`
    },
    {
        id: 3,
        name: "Troy Ford",
        image: user3,
        description: 'lorem ipsum dolor set amet lorem',
        time: `${randomTime()} min`
    },
    {
        id: 4,
        name: "Jayden Medina",
        image: user4,
        description: 'lorem ipsum dolor set amet lorem',
        time: `${randomTime()} min`
    },
    {
        id: 5,
        name: "Oscar Cook",
        image: user5,
        description: 'lorem ipsum dolor set amet lorem',
        time: `${randomTime()} min`
    },
    {
        id: 6,
        name: "Viola Wagner",
        image: user6,
        description: 'lorem ipsum dolor set amet lorem',
        time: `${randomTime()} min`
    },
    {
        id: 6,
        name: "Viola Wagner",
        image: user6,
        description: 'lorem ipsum dolor set amet lorem',
        time: `${randomTime()} min`
    },
    {
        id: 6,
        name: "Viola Wagner",
        image: user6,
        description: 'lorem ipsum dolor set amet lorem',
        time: `${randomTime()} min`
    },
    {
        id: 6,
        name: "Viola Wagner",
        image: user6,
        description: 'lorem ipsum dolor set amet lorem',
        time: `${randomTime()} min`
    }
];
export let defaultMessages = ['I want to buy this item let me know how i can pay you.', 'Is it available?', 'I\'m interested in buying'];

let chatDataFunction = () => {
    let chatArr = [];
    chatData.forEach((element) => {
        chatArr.push({
            id: element.id,
            user: element.name,
            image: element.image,
            chat: []
        })
    })
    return chatArr
}
export let chatOfUsers = chatDataFunction();
export default chatData