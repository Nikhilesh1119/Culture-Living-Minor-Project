import img1 from './image-1.jpg'
import img2 from './image-2.jpg'
import img3 from './image-3.jpg'
import img4 from './image-4.jpg'
import img5 from './image-5.jpg'
import img6 from './image-7.jpg'
const homestays = [
    {
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero iste modi praesentium voluptate optio sint, alias magnam temporibus amet similique?",
        images: [img1,img6 ,img2, img3, img4,img5],
        location:"231 gunjan bawan, ganesh nagar, indore MP",
        rooms:8,
        capacity:14,
        facility:['parking','internet','hot water','pick and drop','washing machine','power backup'],
        food:'simple homecooked food like rice ,capati, dal , poha, rajma',
        price:{
            single:1500,
            double:2500,
            extra:1100
        }

    },

    {
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero iste modi praesentium voluptate optio sint, alias magnam temporibus amet similique?",
        images: [img5, img1 ,img2, img3, img4,img6],
        location:"420 raj bawan, kalani nagar, bhopal MP",
        rooms:5,
        capacity:8,
        facility:['kitchen','smoking','garden','pick and drop','washing machine'],
        food:'simple homecooked food like rice ,capati, dal , poha, rajma',
        price:{
            single:3500,
            double:6000,
            extra:3000
        }

    }
    ,
    {
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero iste modi praesentium voluptate optio sint, alias magnam temporibus amet similique?",
        images: [img3,img1 ,img2, img4,img5,img6],
        location:"888 kamala bawan, rajesh nagar, delhi MP",
        rooms:5,
        capacity:15,
        facility:['bolocony','television','air conditioner','pick and drop','smoking allow','morning tea'],
        food:'simple homecooked food like rice ,capati, dal , poha, rajma',
        price:{
            single:800,
            double:1500,
            extra:700
        }

    },

    {
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero iste modi praesentium voluptate optio sint, alias magnam temporibus amet similique?",
        images: [ img6,img3,img1 ,img2,img5,img4],
        location:"231 rani bhag, vijay nagar, indore MP",
        rooms:8,
        capacity:14,
        facility:['free wifi','lift service','maid for cleaning','two vehiler','kitchen','air conditioner'],
        food:'simple homecooked food like rice ,capati, dal , poha, rajma',
        price:{
            single:2000,
            double:3500,
            extra:1500
        }

    },

    {
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero iste modi praesentium voluptate optio sint, alias magnam temporibus amet similique?",
        images: [img2,img1 , img3, img4,img5,img6],
        location:"231 rani bhag, vijay nagar, indore MP",
        rooms:8,
        capacity:14,
        facility:['parking','internet','kitchen','pick and drop','washing machine','ftelevision'],
        food:'simple homecooked food like rice ,capati, dal , poha, rajma',
        price:{
            single:2000,
            double:3500,
            extra:1500
        }

    }
    ,
    {
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero iste modi praesentium voluptate optio sint, alias magnam temporibus amet similique?",
        images: [img4,img3,img1 ,img2,img5,img6],
        location:"231 rani bhag, vijay nagar, indore MP",
        rooms:8,
        capacity:14,
        facility:['parking','internet','television','pick and drop','cold and hot water','garden', 'special dinner'],
        food:'simple homecooked food like rice ,capati, dal , poha, rajma',
        price:{
            single:2000,
            double:3500,
            extra:1500
        }

    }
    
]

export default homestays;