import React from 'react';
import Card from './Card';
import ServiceData from './ServiceData';

const Services = () => {
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Nuestros Servicios</h1>
            </div>
            <div className="container-fluid mb-5">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row gy-4">
                        {
                        ServiceData.map((val) => {
                                return <Card 
                                    imgsrc={val.imgsrc}
                                    title={val.title}
                                    key={val.id}
                                />
                            }
                        )}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Services;
