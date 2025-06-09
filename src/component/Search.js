// // import { useSelector } from 'react-redux';
// // import React, { useState } from 'react';
// // import ResultsComponent from './ResultsComponent'; // ייבוא הקומפוננטה שתציג את התוצאות

// const SearchComponent = () => {
//     const [searchTerm, setSearchTerm] = useState('');

//     // איחוד כל המערכים
//     // const items = useSelector((state) => [
//     //     ...(state.Judaica),
//     //     ...(state.furniture),
//     //     ...(state.music),
//     //     ...(state.watches),
//     //     ...(state.earthenware),
//     //     ...(state.cars)
//     // ]);
//     const judaica = useSelector((state) => state.Category.Judaica);
//     const furniture= useSelector((state) => state.Category.furniture);
//     const music = useSelector((state) => state.Category.music);
//     const watches = useSelector((state) => state.Category.watches);
//     const earthenware = useSelector((state) => state.Category.earthenware);
//     console.log('judaica:', judaica);
// console.log('furniture:', furniture);
// console.log('music:', music);
// console.log('watches:', watches);
// console.log('earthenware:', earthenware);

//     const items=[...judaica, ...furniture, ...music, ...watches, ...earthenware];
//     // console.log(items);

//     const handleInputChange = (event) => {
//         setSearchTerm(event.target.value);
//         console.log(event.target.value); 
//     };

//     const filteredItems = searchTerm === ''
//     ? " "
//     : items.filter(item =>
//         item.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );
    

//     return (
//         <div>
//             <input
//                 type="text"
//                 value={searchTerm}
//                 onChange={handleInputChange}
//                 placeholder="חפש..."
//             />
//             <ResultsComponent items={filteredItems} /> {/* העברת התוצאות לקומפוננטה */}
//         </div>
//     );
// };

// export default SearchComponent;



import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Search } from "../redux/action";
const SearchComponent = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch();
    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
        
        console.log("dispach"+event.target.value); 
        dispatch(Search(event.target.value));
        console.log("dispach1111"+event.target.value); 
    };
    return (
        <div>
            <input
                type="text"
                value={searchTerm}
                onChange={handleInputChange}
                placeholder="חפש..."
            />
        </div>
    );
};

export default SearchComponent;







