function Cars () {
    const cars = [
        'Tesla',
        'Jeep',
        'Hyundai',
        'Toyota',
        'Dodge'
    ]

    const carPTags = cars.map((car) => <p>{car}</p>);

    return (
        <>
            {carPTags}
        </>
    )
}

export default Cars;