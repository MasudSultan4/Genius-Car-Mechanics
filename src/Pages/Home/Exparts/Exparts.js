import React from 'react';
import Expert from '../Expart/Expert';



const experts = [
    {
        img: 'https://i.ibb.co/Ct7Z6kf/mechanic-1.jpg',
        name: 'Andrew Smith',
        expertize: '-Engine Expert-'
    },
    {
        img:'https://i.ibb.co/VCfLDj3/mechanic-2.jpg',
        name: 'John Anderson',
        expertize: '-Polish Expert-'
    },
    {
        img: 'https://i.ibb.co/thjkB4P/mechanic-3.jpg',
        name: 'Zakaria Smith',
        expertize: '-Coloring Expert-'
    },
    {
        img: 'https://i.ibb.co/tsQLVf7/mechanic-4.jpg',
        name: 'Sakib Anderson',
        expertize: '-Alrounder Expert-'
    },
]




const Exparts = () => {
    return (
        <div className="container">
             <h2 className="text-primary mt-5">Our Experts</h2>
            <div className="row">
                {
                    experts.map(expert => <Expert
                        key={expert.name}
                        expert={expert}
                    >

                    </Expert>)
                }
            </div>
        </div>
    );
};

export default Exparts;