import './services.scss';

function Services() {
    const servicesData = [
        {
            title: 'Telegram Bot Development',
            info: ' Maecenas dictum efficitur felis non gravida. Vestibulum vitae ante luctus, accumsan mi vitae, pretium metus.',
            image: '../../assets/images/conifer-weather-forecast.png',
        },
        {
            title: 'Web Development',
            info: ' Maecenas dictum efficitur felis non gravida. Vestibulum vitae ante luctus, accumsan mi vitae, pretium metus.',
            image: '../../assets/images/conifer-weather-forecast.png',
        },
        {
            title: 'Premium Accounts',
            info: ' Maecenas dictum efficitur felis non gravida. Vestibulum vitae ante luctus, accumsan mi vitae, pretium metus.',
            image: '../../assets/images/conifer-weather-forecast.png',
        },
    ];

    return (
        <section id="services">
            <div className="services-container">
                <h1 className="services-title">Our Services</h1>
                <div className="services-row">
                    {servicesData.map(({ title, info, image }, idx) => {
                        return (
                            <article className="service-item" key={idx}>
                                <div className="hero-image">
                                    <img
                                        src={require('../../assets/images/conifer-weather-forecast.png')}
                                        alt="Service Illustration"
                                    />
                                </div>
                                <h2 className="service-title">{title}</h2>
                                <p className="service-info">{info}</p>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Services;
