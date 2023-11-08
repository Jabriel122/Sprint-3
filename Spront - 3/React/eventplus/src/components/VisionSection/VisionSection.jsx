import React from 'react';
import './VisionSection.css'
import Titulo from '../Titulo/Titulo';

const VisionSection = () => {
    return (
        <section className='vision'>
            <div className='vision__box'>
                <Titulo
                    titleText={"Visão"}
                    color ='white'
                    potatoClass='vision__title'
                />
                <p className='vision__text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni repellat, accusantium aliquam possimus veritatis voluptas facilis! Exercitationem esse voluptas ullam similique aspernatur illum, veniam autem ex nobis. Incidunt, quod dolorem.</p>
            </div>
        </section>
    );
};

export default VisionSection;