import countryCodes from '../data/countryCodes.json';

const calculateTakeHome = async (country, salary, pension) => {
    salary = salary - (salary * (pension / 100));
    const json = await jsonSearcher('name', country.toUpperCase());
    const tax = calculateTax(json.tax, salary);
    const nic = calculateNic(json.nic, salary);
    return (tax - nic).toFixed(2);
}

const jsonSearcher = async (key, value) => {
    for (let i = 0; i < countryCodes.length; i++) {
        if (countryCodes[i][key] === value) {
            return countryCodes[i];
        }
    }
    return null;
};
const calculateTax = (bands, salary) => {
    let result = 0;
    let money = salary;
    let skip = false;
    bands.forEach((band) => {
        if (skip) {
            return;
        }
        if (band.end < money) {
            result += (band.end - band.start) * band.rate;
        } else {
            result += (money - band.start) * band.rate;
            skip = true;
        }
    });
    return result;
};

const calculateNic = (bands, salary) => {
    let result = 0;
    let money = salary;
    let skip = false;
    bands.forEach((band) => {
        if (skip || band.rate === 1) {
            return;
        }
        if (band.end < money) {
            result += (band.end - band.start) * band.rate;
        } else {
            result += (money - band.start) * band.rate;
            if (result < 0) result = 0;
            skip = true;
        }
    });
    return result;
}

export default calculateTakeHome;