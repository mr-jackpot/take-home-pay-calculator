import countryCodes from '../data/countryCodes.json';

const jsonSearcher = async (key, value) => {
    for (let i = 0; i < countryCodes.length; i++) {
        if (countryCodes[i][key] === value) {
            return countryCodes[i].tax;
        }
    }
    return null;
};
const calculate = async (country, salary) => {
    const bands = await jsonSearcher('name', country.toUpperCase());
    let result = 0;
    let money = salary;
    let skip = false;
    bands.forEach((band) => {
        if (skip) {
            return;
        }
        if (band.end < money) {
            result += (band.end - band.start) * band.rate;
            money -= (band.end - band.start);
        } else {
            result += (money - band.start) * band.rate;
            money = 0;
            skip = true;
        }
    });
    return result;
};

export default calculate;