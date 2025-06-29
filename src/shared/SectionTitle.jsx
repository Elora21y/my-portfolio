import React from 'react';

const SectionTitle = ({title}) => {
    return (
         <h2 className='text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-8 md:mb-10 lg:mb-12 text-secondary'>{title}</h2>
    );
};

export default SectionTitle;