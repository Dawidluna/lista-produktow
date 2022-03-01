import React from 'react';
import '../index.css';
import Product from './Product';

export default class ProductList extends React.Component {
    render() {
        const products = [[2021, 10, "Lords of Ragnarok", "premiera", "../img/1.png"],
        [2021, 10, "ISS Vanguard", "premiera", "../img/2.png"],
        [2022, 2, "Tidal Blades: Obrońcy rafy", "premiera", "../img/3.png"],
        [2021, 1, "Wieczna zima: Wielki spływ", "dodruk", "../img/4.png"],
        [2021, 1, "Wieczna zima: Przodkowie", "premiera", "../img/5.png"],
        [2021, 10, "Zombicide 2 edycja: Waszyngton Z.C.", "premiera", "../img/6.png"],
        [2021, 3, "Jedyny Pierścień RPG", "premiera", "../img/7.png"],
        [2021, 4, "Black Rose Wars", "dodruk", "../img/8.png"],
        [2021, 4, "Wieczna zima: Malowidła Naskalne", "premiera", "../img/9.png"],
        [2021, 2, "Alone", "premiera", "../img/10.png"],
        [2021, 5, "Imperium: Legends", "premiera", "../img/11.png"],
        [2021, 6, "Coalitions", "premiera", "../img/12.png"],
        [2021, 7, "The Others: Drużyna Gamma", "premiera", "../img/13.png"],
        [2021, 8, "Bitoku", "premiera", "../img/14.png"],
        [2021, 9, "Dominant Species: Władcy Ziemi", "premiera", "../img/15.png"],
        [2021, 10, "Libertalia", "premiera", "../img/16.png"],
        [2021, 11, "Fog of Love", "premiera", "../img/17.png"],
        [2021, 12, "Iron, Blood, Snow & Mud", "premiera", "../img/18.png"],
        [2021, 2, "Pan Lodowego Ogrodu", "dodruk", "../img/19.png"],
        [2021, 6, "Race for the Galaxy", "premiera", "../img/20.png"],
        [2021, 8, "Beyond Humanity: Astrogórnicy", "premiera", "../img/21.png"],
        [2022, 1, "Tryolgia Husycka", "premiera", "../img/22.png"],
        [2022, 1, "Neuroshima: Last Aurora: Lodowa Stal", "premiera", "../img/23.png"],
        [2021, 1, "Kur-Nu-Gi", "premiera", "../img/24.png"],
        [2022, 1, "W grocie króla gór", "dodruk", "../img/25.png"],
        [2021, 7, "Miasta Luny", "premiera", "../img/26.png"],
        [2021, 8, "Paryż: Miasto Świateł - Eiffel", "premiera", "../img/27.png"],
        [2021, 6, "Suburbia", "premiera", "../img/28.png"],
        [2021, 5, "Suburbia Inc", "premiera", "../img/29.png"],
        [2021, 9, "Ankh Bogowie Egiptu", "dodruk", "../img/30.png"]];
        
        let productArray = [];

        for(let i=0; i<30; i++) {
            if((this.props.year == "" || products[i][0] == this.props.year) && (this.props.month == "" || products[i][1] == this.props.month)) productArray.push(<Product year={products[i][0]} month={products[i][1]} title={products[i][2]} premiera={products[i][3]} img={products[i][4]} />);
        }
        return(
            <div id="productList">{productArray}</div>
        );
    }
}