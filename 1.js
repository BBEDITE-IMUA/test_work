function capitalize(str) {
    if (!str) {
        return str;
    }
    return str[0].toUpperCase() + str.slice(1)
}

console.log(capitalize('hello fffffff ffffff'))



class RationalNumber {
    constructor(numerator, denominator) {
        if (denominator === 0) {
            throw new Error("Знаменатель не может быть равен нулю");
        }
        this.numerator = numerator;
        this.denominator = denominator;
        this.reduce();
    }

    gcd(a, b) {
        return b === 0 ? a : this.gcd(b, a % b);
    }

    reduce() {
        const gcd = this.gcd(this.numerator, this.denominator);
        this.numerator /= gcd;
        this.denominator /= gcd;
    }

    static toCommonDenominator(r1, r2) {
        const commonDenominator = r1.denominator * r2.denominator;
        r1.numerator *= r2.denominator;
        r2.numerator *= r1.denominator;
        return commonDenominator;
    }

    add(rational) {
        const newNumerator = this.numerator * rational.denominator + rational.numerator * this.denominator;
        const newDenominator = this.denominator * rational.denominator;
        return new RationalNumber(newNumerator, newDenominator);
    }

    subtract(rational) {
        const newNumerator = this.numerator * rational.denominator - rational.numerator * this.denominator;
        const newDenominator = this.denominator * rational.denominator;
        return new RationalNumber(newNumerator, newDenominator);
    }

    multiply(rational) {
        return new RationalNumber(this.numerator * rational.numerator, this.denominator * rational.denominator);
    }

    divide(rational) {
        if (rational.numerator === 0) {
            throw new Error("Нельзя делить на ноль");
        }
        return new RationalNumber(this.numerator * rational.denominator, this.denominator * rational.numerator);
    }

    toString() {
        return `${this.numerator}/${this.denominator}`;
    }
}

const r1 = new RationalNumber(1, 2);
const r2 = new RationalNumber(1, 3);

const sum = r1.add(r2);
console.log(sum.toString());

const diff = r1.subtract(r2);
console.log(diff.toString());

const prod = r1.multiply(r2);
console.log(prod.toString());

const quot = r1.divide(r2);
console.log(quot.toString());
