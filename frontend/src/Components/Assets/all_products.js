import p1_img from './product1.jpg';
import p2_img from './product2.jpg';
import p3_img from './product3.jpg';
import p4_img from './product4.jpg';
import p5_img from './product5.jpg';
import p6_img from './product6.jpg';
import p7_img from './product7.jpg';
import p8_img from './product8.jpg';
import p9_img from './product9.jpg';
import p10_img from './product10.jpg';
import p11_img from './product11.jpg';
import p12_img from './product12.jpg';
import p13_img from './product13.jpg';
import p14_img from './product14.jpg';
import p15_img from './product15.jpg';

let all_products =[
    {
        id:1,
        name:"Googo Gaaga Boy's Cotton Full Sleeves Printed Sweatshirt and Pant Set in Multi Color",
        category:"kids",
        image:p1_img,
        new_price:50.0,
        old_price:80.5
    },
    {
        id:2,
        name:"Googo Gaaga Boy's Cotton Printed T-Shirt with Denim Shorts Set in Red Color",
        category:"kids",
        image:p2_img,
        new_price:46.0,
        old_price:83.5
    },
    {
        id:3,
        name:"BRANDONN Unisex Baby Flannel Jumpsuit Panda Style Cosplay Clothes Bunting Outfits Snowsuit Hooded Romper Outwear",
        category:"kids",
        image:p3_img,
        new_price:67.0,
        old_price:100.3
    },
    {
        id:4,
        name:"Badshah New DRESSES Cotton Blend Casual Printed Short Sleeves Long Kurta and Pallazzo Set for Girls Kids",
        category:"kids",
        image:p4_img,
        new_price:48.6,
        old_price:88.7
    },
    {
        id:5,
        name:"Hopscotch Boys Navy Cotton Blend Graphic Print Shirt And Pant Set",
        category:"kids",
        image:p5_img,
        new_price:50.0,
        old_price:80.5
    },
    {
        id:6,
        name:"KYDA KIDS® Boy's 100% Pure Cotton Premium Printed Tshirt and Shorts Set for Summer",
        category:"kids",
        image:p6_img,
        new_price:60.0,
        old_price:80.5
    },
    {
        id:7,
        name:"Hopscotch Girls Viscose All-Over Print Blouse And Shorts Set in Green Color",
        image:p7_img,
        category:"kids",
        new_price:60.0,
        old_price:98.5
    },
    {
        id:8,
        name:"Hopscotch Girls Knee-Length Dress",
        category:"kids",
        image:p8_img,
        new_price:58.0,
        old_price:85.5
    },
    {
        id:9,
        name:"Hopscotch Girl's Regular Fit Jeans",
        category:"kids",
        image:p9_img,
        new_price:42.0,
        old_price:60.0
    },
    {
        id:10,
        name:"Hopscotch Girls Knee-Length Party Dresses",
        category:"kids",
        image:p10_img,
        new_price:70.0,
        old_price:120.3
    },
    {
        id:11,
        name:"Lofn Stylish Printed Kids Clothing Sets baby boy dress baby girl dress (KDST85-SBWH)",
        category:"kids",
        image:p11_img,
        new_price:50.0,
        old_price:80.5
    },
    {
        id:12,
        name:"TAGAS Toddler Girls Floral Print Tiered Layer & Belted Dress",
        category:"kids",
        image:p12_img,
        new_price:67.3,
        old_price:99.3
    },
    {
        id:13,
        name:"Naughty Ninos Girls Cotton Tulip Knee-Length Dress",
        category:"kids",
        image:p13_img,
        new_price:40.5,
        old_price:67.5
    },
    {
        id:14,
        name:"TAGAS Dress for Girls II Baby Girl Dress, Frock Girls Infants Casual wear for Kids Dresses and Jump Suite Round Neck Full Sleeve Dress for Girls",
        category:"kids",
        image:p14_img,
        new_price:49.9,
        old_price:70.9
    },
    {
        id:15,
        name:"Viva Enterprise Latest Stylish Fancy Baby Girls Pista Green Pure Viscos Cotton Rayon Crop with Floral Printed Skirt on Birthday",
        category:"kids",
        image:p15_img,
        new_price:80.4,
        old_price:120.3
    },
    {
        id:16,
        name:"Googo Gaaga Boy's Cotton Full Sleeves Printed Sweatshirt and Pant Set in Multi Color",
        category:"kids",
        image:p1_img,
        new_price:50.0,
        old_price:80.5
    },
    {
        id:17,
        name:"Googo Gaaga Boy's Cotton Printed T-Shirt with Denim Shorts Set in Red Color",
        category:"kids",
        image:p2_img,
        new_price:46.0,
        old_price:83.5
    },
    {
        id:18,
        name:"BRANDONN Unisex Baby Flannel Jumpsuit Panda Style Cosplay Clothes Bunting Outfits Snowsuit Hooded Romper Outwear",
        category:"kids",
        image:p3_img,
        new_price:67.0,
        old_price:100.3
    },
    {
        id:19,
        name:"Badshah New DRESSES Cotton Blend Casual Printed Short Sleeves Long Kurta and Pallazzo Set for Girls Kids",
        category:"kids",
        image:p4_img,
        new_price:48.6,
        old_price:88.7
    },
    {
        id:20,
        name:"Hopscotch Boys Navy Cotton Blend Graphic Print Shirt And Pant Set",
        category:"kids",
        image:p5_img,
        new_price:50.0,
        old_price:80.5
    },
    {
        id:21,
        name:"KYDA KIDS® Boy's 100% Pure Cotton Premium Printed Tshirt and Shorts Set for Summer",
        category:"kids",
        image:p6_img,
        new_price:60.0,
        old_price:80.5
    },
    {
        id:22,
        name:"Hopscotch Girls Viscose All-Over Print Blouse And Shorts Set in Green Color",
        category:"kids",
        image:p7_img,
        new_price:60.0,
        old_price:98.5
    },
    {
        id:23,
        name:"Hopscotch Girls Knee-Length Dress",
        category:"kids",
        image:p8_img,
        new_price:58.0,
        old_price:85.5
    },
    {
        id:24,
        name:"Hopscotch Girl's Regular Fit Jeans",
        category:"kids",
        image:p9_img,
        new_price:42.0,
        old_price:60.0
    },
    {
        id:25,
        name:"Hopscotch Girls Knee-Length Party Dresses",
        category:"kids",
        image:p10_img,
        new_price:70.0,
        old_price:120.3
    },
    {
        id:26,
        name:"Lofn Stylish Printed Kids Clothing Sets baby boy dress baby girl dress (KDST85-SBWH)",
        category:"kids",
        image:p11_img,
        new_price:50.0,
        old_price:80.5
    },
    {
        id:27,
        name:"TAGAS Toddler Girls Floral Print Tiered Layer & Belted Dress",
        category:"kids",
        image:p12_img,
        new_price:67.3,
        old_price:99.3
    },
    {
        id:28,
        name:"Naughty Ninos Girls Cotton Tulip Knee-Length Dress",
        category:"kids",
        image:p13_img,
        new_price:40.5,
        old_price:67.5
    },
    {
        id:29,
        name:"TAGAS Dress for Girls II Baby Girl Dress, Frock Girls Infants Casual wear for Kids Dresses and Jump Suite Round Neck Full Sleeve Dress for Girls",
        category:"kids",
        image:p14_img,
        new_price:49.9,
        old_price:70.9
    },
    {
        id:30,
        name:"Viva Enterprise Latest Stylish Fancy Baby Girls Pista Green Pure Viscos Cotton Rayon Crop with Floral Printed Skirt on Birthday",
        category:"kids",
        image:p15_img,
        new_price:80.4,
        old_price:120.3
    },
];

export default all_products;