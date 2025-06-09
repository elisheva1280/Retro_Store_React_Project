import { JUDAICA, MUSIC,FURNITURE,WATCHES,EARTHENWARE, SEARCH } from '../actionType';
import a from '../../img/judaica/a.jpg'; 
import l from '../../img/judaica/l.jpg'; 
import zb from '../../img/judaica/zb.jpg'; 
import x from '../../img/judaica/x.jpg'; 
import n from '../../img/judaica/n.jpg'; 
import i from '../../img/judaica/i.jpg'; 
import o from '../../img/judaica/o.jpg'; 
import y from '../../img/judaica/y.jpg'; 
import d from '../../img/judaica/d.jpg'; 
import z from '../../img/judaica/z.jpg';
import magen from '../../img/judaica/magen.jpg';
import shofar from '../../img/judaica/shofar.jpg'; 
import mezuza2 from '../../img/judaica/mezuza2.jpg'; 
import mezuza from '../../img/judaica/mezuza.jpg'; 
import sefel from '../../img/judaica/sefel.jpg';
import tfilin from '../../img/judaica/tfilin .jpg'; 
import Balalaika from '../../img/musical/Balalaika.JPG';
import gitary from '../../img/musical/gitary.jpg'; 
import kalimba from '../../img/musical/kalimba.jpg';
import kanon from '../../img/musical/kanon.jpg'; 
import Kinor from '../../img/musical/kinor.webp'; 
import marmelada from '../../img/musical/marmelada.jpg'; 
import nevel from '../../img/musical/nevel.jpg'; 
import piano from '../../img/musical/piano.jpg'; 
import piano1 from '../../img/musical/piano1.jpg'; 
import piano2 from '../../img/musical/piano2.jpg';
import tofh from '../../img/musical/tofh.png';
import veena from '../../img/musical/veena.png';

import AncientRomaUrn from '../../img/earthenware/AncientRomaUrn.jpg'; 
import AntiqueOilJar from '../../img/earthenware/AntiqueOilJar.png'; 
import ClayJug from '../../img/earthenware/ClayJug.webp'; 
import engraving from '../../img/earthenware/engraving.jpg'; 
// import ustratedPitcher from '../../img/earthenware/ustratedPitcher.jpg'; 
import IllustratedPitcher from '../../img/earthenware/IllustratedPitcher.jpg'; 
import IllustratedPorcelain from '../../img/earthenware/IllustratedPorcelain.jpg'; 
import jug from '../../img/earthenware/jug.jpg'; 
import pot from '../../img/earthenware/pot.webp';
import RomanUrn from '../../img/earthenware/RomanUrn.jpg';
import AntiquePouringVessel from '../../img/earthenware/AntiquePouringVessel.webp';
import GingerJar from '../../img/earthenware/GingerJar.jpg';
import RomanCeramicJug from '../../img/earthenware/RomanCeramicJug.jpg';

import clock from '../../img/Watches/clock.jpg';
import CuckooClock from '../../img/Watches/CuckooClock.jpg';
import MarineWatch from '../../img/Watches/MarineWatch.jpg';
import OrloginClock from '../../img/Watches/OrloginClock.jpg';
import PocketWatch from '../../img/Watches/PocketWatch.webp';
import WallClock from '../../img/Watches/WallClock.jpg';
import clockk from '../../img/Watches/clockk.png';
import DecoratedWatch from '../../img/Watches/DecoratedWatch.png';
import clock2 from '../../img/Watches/clock.png';
import clockopen from '../../img/Watches/clockopen.png';

import AntiqueChestOfDrawers from '../../img/furniture/AntiqueChestOfDrawers.jpg';
import Armchairs from '../../img/furniture/Armchairs.jpg';
import buffet from '../../img/furniture/buffet.jpg';
import Chair from '../../img/furniture/Chair.png';
import ChestOfDrawers from '../../img/furniture/ChestOfDrawers.jpg';
import DesignedBuffet from '../../img/furniture/Designed buffet.jpg';
import DesignedShowcase from '../../img/furniture/DesignedShowcase.webp';
import Dresser from '../../img/furniture/Dresser.jpg';
// import RockingChair from '../../img/furniture/RockingChair.webp';
import Showcase from '../../img/furniture/Showcase.jpeg';
import StorageChest from '../../img/furniture/StorageChest.jpg';
import StylishBuffet from '../../img/furniture/StylishBuffet.jpg';
import StylishTable from '../../img/furniture/StylishTable.jpg';
import TableAndChair from '../../img/furniture/TableAndChair.jpg';
import TablesInSizes from '../../img/furniture/TablesInSizes.jpg';
import VienneseDresser from '../../img/furniture/VienneseDresser.jpg';
import WoodenChair from '../../img/furniture/WoodenChair.jpg';
import { Judaica } from '../action';












// import tavlit from '../../img/judaica/tavlit.jpg'; 





const initialState = {
    arr: [],
    Judaica: [
        { categoryName: "Judaica", id: 1, name: "kandalabra", price: 40000, image: a, send: "$70", describe: "Elegant brass candelabra for Shabbat.", ifExist: true },
        { categoryName: "Judaica", id: 5, name: "Silver cup", price: 35000, image: x, send: "$45", describe: "Classic silver Kiddush cup.", ifExist: true },
        { categoryName: "Judaica", id: 6, name: "moznaim", price: 18000, image: n, send: "$40", describe: "Vintage decorative scale.", ifExist: true },
        { categoryName: "Judaica", id: 7, name: "Libra", price: 1000, image: i, send: "$25", describe: "Small nostalgic scale.", ifExist: true },
        { categoryName: "Judaica", id: 8, name: "silverware", price: 60000, image: o, send: "$85", describe: "Elegant vintage silverware set.", ifExist: true },
        { categoryName: "Judaica", id: 3, name: "kandalabra", price: 20000, image: l, send: "$55", describe: "Traditional Shabbat candelabra.", ifExist: true },
        { categoryName: "Judaica", id: 9, name: "chamsa", price: 600, image: y, send: "$20", describe: "Decorative Hamsa for protection.", ifExist: true },
        { categoryName: "Judaica", id: 10, name: "cup", price: 25000, image: d, send: "$40", describe: "Elegant silver Kiddush cup.", ifExist: true },
        { categoryName: "Judaica", id: 13, name: "magen david", price: 850, image: magen, send: "$15", describe: "Classic Star of David symbol.", ifExist: true },
        { categoryName: "Judaica", id: 14, name: "mezuza", price: 60000, image: mezuza2, send: "$65", describe: "Handcrafted decorative mezuzah.", ifExist: true },
        { categoryName: "Judaica", id: 15, name: "mezuza", price: 40000, image: mezuza, send: "$50", describe: "Vintage-style mezuzah case.", ifExist: true },
        { categoryName: "Judaica", id: 16, name: "sefel", price: 900, image: sefel, send: "$18", describe: "Ceramic ritual cup.", ifExist: true },
        { categoryName: "Judaica", id: 12, name: "cup", price: 20000, image: z, send: "$38", describe: "Minimalist Kiddush cup.", ifExist: true },
        { categoryName: "Judaica", id: 4, name: "Candlesticks", price: 40000, image: zb, send: "$60", describe: "Pair of Shabbat candlesticks.", ifExist: true },
        { categoryName: "Judaica", id: 17, name: "tfilin", price: 30000, image: tfilin, send: "$55", describe: "Elegant tefillin model.", ifExist: true },
        { categoryName: "Judaica", id: 18, name: "shofar", price: 11000, image: shofar, send: "$45", describe: "Authentic ram’s horn shofar.", ifExist: true }
      ],
      
      
      
      furniture: [
        {
          categoryName: "furniture",
          id: 20,
          name: "AntiqueChestOfDrawers",
          price: 1200,
          image: AntiqueChestOfDrawers,
          send: "50$",
          describe: "Handcrafted antique chest.",
          ifExist: true
        },
        {
          categoryName: "furniture",
          id: 21,
          name: "Armchairs",
          price: 850,
          image: Armchairs,
          send: "45$",
          describe: "Pair of cozy vintage armchairs.",
          ifExist: true
        },
        {
          categoryName: "furniture",
          id: 22,
          name: "Buffet",
          price: 950,
          image: buffet,
          send: "55$",
          describe: "Rustic buffet full of charm.",
          ifExist: true
        },
        {
          categoryName: "furniture",
          id: 23,
          name: "Chair",
          price: 450,
          image: Chair,
          send: "40$",
          describe: "Simple and sturdy wooden chair.",
          ifExist: true
        },
        {
          categoryName: "furniture",
          id: 24,
          name: "ChestOfDrawers",
          price: 1150,
          image: ChestOfDrawers,
          send: "60$",
          describe: "Elegant vintage chest.",
          ifExist: true
        },
        {
          categoryName: "furniture",
          id: 25,
          name: "DesignedBuffet",
          price: 1250,
          image: DesignedBuffet,
          send: "65$",
          describe: "Buffet with fine carving.",
          ifExist: true
        },
        {
          categoryName: "furniture",
          id: 26,
          name: "DesignedShowcase",
          price: 1400,
          image: DesignedShowcase,
          send: "70$",
          describe: "Glass showcase for treasures.",
          ifExist: true
        },
        {
          categoryName: "furniture",
          id: 27,
          name: "Dresser",
          price: 1050,
          image: Dresser,
          send: "60$",
          describe: "Vintage dresser with charm.",
          ifExist: true
        },
        {
          categoryName: "furniture",
          id: 28,
          name: "Showcase",
          price: 800,
          image: Showcase,
          send: "50$",
          describe: "Classic wooden display cabinet.",
          ifExist: true
        },
        {
          categoryName: "furniture",
          id: 29,
          name: "StorageChest",
          price: 950,
          image: StorageChest,
          send: "55$",
          describe: "Old chest for linens or keepsakes.",
          ifExist: true
        },
        {
          categoryName: "furniture",
          id: 30,
          name: "StylishBuffet",
          price: 1350,
          image: StylishBuffet,
          send: "60$",
          describe: "Mid-century style buffet.",
          ifExist: true
        },
        {
          categoryName: "furniture",
          id: 31,
          name: "StylishTable",
          price: 980,
          image: StylishTable,
          send: "50$",
          describe: "Stylish, timeless dining table.",
          ifExist: true
        },
        {
          categoryName: "furniture",
          id: 32,
          name: "TableAndChair",
          price: 950,
          image: TableAndChair,
          send: "52$",
          describe: "Charming vintage table set.",
          ifExist: true
        },
        {
          categoryName: "furniture",
          id: 33,
          name: "TablesInSizes",
          price: 1050,
          image: TablesInSizes,
          send: "53$",
          describe: "Elegant nesting tables set.",
          ifExist: true
        },
        {
          categoryName: "furniture",
          id: 34,
          name: "VienneseDresser",
          price: 1300,
          image: VienneseDresser,
          send: "75$",
          describe: "Viennese dresser with brass details.",
          ifExist: true
        },
        {
          categoryName: "furniture",
          id: 35,
          name: "WoodenChair",
          price: 450,
          image: WoodenChair,
          send: "40$",
          describe: "Worn wooden chair with soul.",
          ifExist: true
        }
      ],
      
      
      
      
    cars: [
        {categoryName:"cars",id:5, name: "מכונית 1", price: 10 ,image:a,send:"50$",describe:"blabla",ifExist:true},
        {categoryName:"cars",id:6, name: "מכונית 2", price: 10,image:a,send:"50$" ,describe:"blabla",ifExist:true},
    ],
    music: [
        {
          categoryName: "music",
          id: 40,
          name: "Balalaika",
          price: 22000,
          image: Balalaika,
          send: "55$",
          describe: "A traditional Russian string instrument with a distinctive triangular body and bright sound.",
          ifExist: true
        },
        {
          categoryName: "music",
          id: 41,
          name: "Gitary",
          price: 26000,
          image: gitary,
          send: "55$",
          describe: "A handcrafted guitar, perfect for folk, rock, and everything in between.",
          ifExist: true
        },
        {
          categoryName: "music",
          id: 42,
          name: "Kalimba",
          price: 31000,
          image: kalimba,
          send: "55$",
          describe: "A soulful African instrument with resonant metal tines, perfect for calming melodies.",
          ifExist: true
        },
        {
          categoryName: "music",
          id: 43,
          name: "Kanon",
          price: 11000,
          image: kanon,
          send: "55$",
          describe: "A stringed instrument with an ancient history, known for its captivating and melodic sound.",
          ifExist: true
        },
        {
          categoryName: "music",
          id: 44,
          name: "Kinor",
          price: 15000,
          image: Kinor,
          send: "60$",
          describe: "An ancient stringed instrument with a rich cultural history and a distinct resonance.",
          ifExist: true
        },
        {
          categoryName: "music",
          id: 45,
          name: "Marmelada",
          price: 42000,
          image: marmelada,
          send: "60$",
          describe: "A vibrant instrument that mixes traditional sound with modern influence, perfect for unique performances.",
          ifExist: true
        },
        {
          categoryName: "music",
          id: 46,
          name: "Nevel",
          price: 75000,
          image: nevel,
          send: "65$",
          describe: "A rare and majestic string instrument, known for its full, rich tones.",
          ifExist: true
        },
        {
          categoryName: "music",
          id: 47,
          name: "Piano",
          price: 62000,
          image: piano,
          send: "60$",
          describe: "A classical grand piano, offering a perfect balance between elegance and sound clarity.",
          ifExist: true
        },
        {
          categoryName: "music",
          id: 48,
          name: "Piano1",
          price: 12000,
          image: piano1,
          send: "55$",
          describe: "A compact piano with classic design and exceptional sound quality.",
          ifExist: true
        },
        {
          categoryName: "music",
          id: 49,
          name: "Piano2",
          price: 42000,
          image: piano2,
          send: "60$",
          describe: "A vintage-style piano, perfect for both professional musicians and enthusiasts.",
          ifExist: true
        },
        {
          categoryName: "music",
          id: 50,
          name: "Tofh",
          price: 1200,
          image: tofh,
          send: "50$",
          describe: "A traditional wind instrument, known for its simple yet mesmerizing sound.",
          ifExist: true
        },
        {
          categoryName: "music",
          id: 51,
          name: "Veena",
          price: 32000,
          image: veena,
          send: "55$",
          describe: "A classical Indian string instrument, renowned for its rich, resonant tones.",
          ifExist: true
        }
      ],
      
      watches: [
        { categoryName: "clocks", id: 54, name: "Clock", price: 850, image: clock, send: "55$", describe: "A timeless classic, this clock brings sophistication and elegance to any room.", ifExist: true },
        { categoryName: "clocks", id: 55, name: "CuckooClock", price: 650, image: CuckooClock, send: "55$", describe: "Traditional cuckoo clock with nostalgic charm.", ifExist: true },
        { categoryName: "clocks", id: 56, name: "MarineWatch", price: 950, image: MarineWatch, send: "55$", describe: "Rugged maritime-style watch.", ifExist: true },
        { categoryName: "clocks", id: 57, name: "OrloginClock", price: 550, image: OrloginClock, send: "55$", describe: "Modern minimalist design.", ifExist: true },
        { categoryName: "clocks", id: 58, name: "PocketWatch", price: 350, image: PocketWatch, send: "55$", describe: "Elegant antique pocket watch.", ifExist: true },
        { categoryName: "clocks", id: 59, name: "WallClock", price: 220, image: WallClock, send: "55$", describe: "Classic wall clock for any room.", ifExist: true },
        { categoryName: "clocks", id: 60, name: "Clockk", price: 180, image: clockk, send: "55$", describe: "Simple, clean design.", ifExist: true },
        { categoryName: "clocks", id: 61, name: "DecoratedWatch", price: 220, image: DecoratedWatch, send: "55$", describe: "Decorative wall watch with details.", ifExist: true },
        { categoryName: "clocks", id: 62, name: "Clock2", price: 210, image: clock2, send: "55$", describe: "Versatile modern clock.", ifExist: true },
        { categoryName: "clocks", id: 63, name: "ClockOpen", price: 210, image: clockopen, send: "55$", describe: "Open-design clock showing inner workings.", ifExist: true }
      ],
      
      earthenware: [
        { categoryName: "earthenware", id: 67, name: "AncientRomaUrn", price: 850, image: AncientRomaUrn, send: "55$", describe: "Crafted Roman urn for collectors.", ifExist: true },
        { categoryName: "earthenware", id: 68, name: "AntiqueOilJar", price: 750, image: AntiqueOilJar, send: "55$", describe: "Antique jar with rustic charm.", ifExist: true },
        { categoryName: "earthenware", id: 69, name: "ClayJug", price: 650, image: ClayJug, send: "55$", describe: "Traditional handmade clay jug.", ifExist: true },
        { categoryName: "earthenware", id: 70, name: "Engraving", price: 520, image: engraving, send: "55$", describe: "Engraved ceramic with intricate patterns.", ifExist: true },
        { categoryName: "earthenware", id: 71, name: "IllustratedPitcher", price: 1050, image: IllustratedPitcher, send: "55$", describe: "Pitcher with hand-drawn illustrations.", ifExist: true },
        { categoryName: "earthenware", id: 72, name: "IllustratedPorcelain", price: 850, image: IllustratedPorcelain, send: "55$", describe: "Porcelain with fine illustrations.", ifExist: true },
        { categoryName: "earthenware", id: 73, name: "Jug", price: 220, image: jug, send: "55$", describe: "Simple earthen jug with rustic style.", ifExist: true },
        { categoryName: "earthenware", id: 74, name: "Pot", price: 650, image: pot, send: "55$", describe: "Classic ceramic pot for decor or use.", ifExist: true },
        { categoryName: "earthenware", id: 75, name: "RomanUrn", price: 320, image: RomanUrn, send: "55$", describe: "Roman-style urn for history lovers.", ifExist: true },
        { categoryName: "earthenware", id: 76, name: "AntiquePouringVessel", price: 220, image: AntiquePouringVessel, send: "55$", describe: "Vintage vessel for pouring or decor.", ifExist: true },
        { categoryName: "earthenware", id: 77, name: "GingerJar", price: 120, image: GingerJar, send: "55$", describe: "Classic ginger jar with painted surface.", ifExist: true },
        { categoryName: "earthenware", id: 78, name: "RomanCeramicJug", price: 70, image: RomanCeramicJug, send: "55$", describe: "Small jug with Roman heritage.", ifExist: true }
      ],

     
      
};

export const CategoriesReducer = (state = initialState, action) => {
  console.log("Current State:", state);
  console.log("Action:", action);
    switch (action.type) {
        // case CARS:
        //     return { ...state, arr: state.cars };
        case JUDAICA:
            return { ...state, arr: state.Judaica };
        case MUSIC:
            return { ...state, arr: state.music };
        case WATCHES:
            return { ...state, arr: state.watches };
        case EARTHENWARE:
            return { ...state, arr: state.earthenware};
        case FURNITURE:
            return { ...state, arr: state.furniture };
        case SEARCH:
          console.log("Received Search Action:", action.payload);
              const searchTerm = action.payload.toLowerCase();
              console.log("Search Term:", searchTerm);
              const allProducts = [
                  ...state.Judaica,
                  ...state.music,
                  ...state.watches,
                  ...state.earthenware,
                  ...state.furniture
              ];
              const filteredProducts = allProducts.filter(product => 
                  product.name.toLowerCase().includes(searchTerm)
                  
              );
              return { ...state, arr: filteredProducts };
              
  
        default:
          console.log("Current State: ככגכשדכדש", state);
            return state;
    }
};
