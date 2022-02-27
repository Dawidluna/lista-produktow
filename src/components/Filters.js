import React from 'react';
import '../index.css';

export default class Filters extends React.Component {
    render() {
        return(
            <div>
                <div className="year">2021</div><div className="year">2022</div>
                <div className="month" id="firstMonth">styczeń</div><div className="month">luty</div><div className="month">marzec</div><div className="month">kwiecień</div><div className="month">maj</div><div className="month">czerwiec</div><div className="month">lipiec</div><div className="month">sierpień</div><div className="month">wrzesień</div><div className="month">październik</div><div className="month">listopad</div><div className="month">grudzień</div>
            </div>
        );
    }
}