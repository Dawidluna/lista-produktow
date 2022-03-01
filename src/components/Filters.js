import React from 'react';
import '../index.css';

export default class Filters extends React.Component {

    render() {
        var y1, y2, m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12;
        if(this.props.year == 2021) y1 = "year-selected";
        else y1 = "year";
        if(this.props.year == 2022) y2 = "year-selected";
        else y2 = "year";
        if(this.props.month == 1) m1 = "month-selected";
        else m1 = "month";
        if(this.props.month == 2) m2 = "month-selected";
        else m2 = "month";
        if(this.props.month == 3) m3 = "month-selected";
        else m3 = "month";
        if(this.props.month == 4) m4 = "month-selected";
        else m4 = "month";
        if(this.props.month == 5) m5 = "month-selected";
        else m5 = "month";
        if(this.props.month == 6) m6 = "month-selected";
        else m6 = "month";
        if(this.props.month == 7) m7 = "month-selected";
        else m7 = "month";
        if(this.props.month == 8) m8 = "month-selected";
        else m8 = "month";
        if(this.props.month == 9) m9 = "month-selected";
        else m9 = "month";
        if(this.props.month == 10) m10 = "month-selected";
        else m10 = "month";
        if(this.props.month == 11) m11 = "month-selected";
        else m11 = "month";
        if(this.props.month == 12) m12 = "month-selected";
        else m12 = "month";
        return(
            <div id="filtersBox">
                <div className={y1} onClick={() => this.props.yearFilter(2021)}>2021</div>
                <div className={y2} onClick={() => this.props.yearFilter(2022)}>2022</div>
                <div className={m1} id="firstMonth" onClick={() => this.props.monthFilter(1)}>styczeń</div>
                <div className={m2} onClick={() => this.props.monthFilter(2)}>luty</div>
                <div className={m3} onClick={() => this.props.monthFilter(3)}>marzec</div>
                <div className={m4} onClick={() => this.props.monthFilter(4)}>kwiecień</div>
                <div className={m5} onClick={() => this.props.monthFilter(5)}>maj</div>
                <div className={m6} onClick={() => this.props.monthFilter(6)}>czerwiec</div>
                <div className={m7} onClick={() => this.props.monthFilter(7)}>lipiec</div>
                <div className={m8} onClick={() => this.props.monthFilter(8)}>sierpień</div>
                <div className={m9} onClick={() => this.props.monthFilter(9)}>wrzesień</div>
                <div className={m10} onClick={() => this.props.monthFilter(10)}>październik</div>
                <div className={m11} onClick={() => this.props.monthFilter(11)}>listopad</div>
                <div className={m12} onClick={() => this.props.monthFilter(12)}>grudzień</div>
            </div>
        );
    }
}