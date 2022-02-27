import React from 'react';
import '../index.css';
import Product from './Product';

export default class ProductList extends React.Component {
    render() {
        const products = [[2021, 10, "Lords of Ragnarok", "premiera", "../img/1.png"],
        [2021, 10, "ISS Vanguard", "premiera", "../img/2.png"],
        [2021, 10, "Tidal Blades: Obrońcy rafy", "premiera", "../img/3.png"],
        [2021, 10, "Wieczna zima: Wielki spływ", "premiera", "../img/4.png"],
        [2021, 10, "Wieczna zima: Przodkowie", "premiera", "../img/5.png"],
        [2021, 10, "Zombicide 2 edycja: Waszyngton Z.C.", "premiera", "../img/6.png"],
        [2021, 10, "Jedyny Pierścień RPG", "premiera", "../img/7.png"],
        [2021, 10, "Black Rose Wars", "premiera", "../img/8.png"],
        [2021, 10, "Wieczna zima: Malowidła Naskalne", "premiera", "../img/9.png"],
        [2021, 10, "Alone", "premiera", "../img/10.png"],
        [2021, 10, "Imperium: Legends", "premiera", "../img/11.png"],
        [2021, 10, "Coalitions", "premiera", "../img/12.png"],
        [2021, 10, "The Others: Drużyna Gamma", "premiera", "../img/13.png"],
        [2021, 10, "Bitoku", "premiera", "../img/14.png"],
        [2021, 10, "Dominant Species: Władcy Ziemi", "premiera", "../img/15.png"],
        [2021, 10, "Libertalia", "premiera", "../img/16.png"],
        [2021, 10, "Fog of Love", "premiera", "../img/17.png"],
        [2021, 10, "Iron, Blood, Snow & Mud", "premiera", "../img/18.png"],
        [2021, 10, "Pan Lodowego Ogrodu", "premiera", "../img/19.png"],
        [2021, 10, "Race for the Galaxy", "premiera", "../img/20.png"],
        [2021, 10, "Beyond Humanity: Astrogórnicy", "premiera", "../img/21.png"],
        [2021, 10, "Tryolgia Husycka", "premiera", "../img/22.png"],
        [2021, 10, "Neuroshima: Last Aurora: Lodowa Stal", "premiera", "../img/23.png"],
        [2021, 10, "Kur-Nu-Gi", "premiera", "../img/24.png"],
        [2021, 10, "W grocie króla gór", "premiera", "../img/25.png"],
        [2021, 10, "Miasta Luny", "premiera", "../img/26.png"],
        [2021, 10, "Paryż: Miasto Świateł - Eiffel", "premiera", "../img/27.png"],
        [2021, 10, "Suburbia", "premiera", "../img/28.png"],
        [2021, 10, "Suburbia Inc", "premiera", "../img/29.png"],
        [2021, 10, "Ankh Bogowie Egiptu", "premiera", "../img/30.png"]];
        
        let productArray = [];

        for(let i=0; i<30; i++) {
            productArray.push(<Product year={products[i][0]} month={products[i][1]} title={products[i][2]} premiera={products[i][3]} img={products[i][4]} />);
        }
        return(
            <div id="productList">{productArray}</div>
        );
    }
}