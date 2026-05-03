class Sieve {
  NthPrime(pos) {
    if (!Number.isInteger(pos) || pos < 0) {
      throw new Error("Input must be a non-negative integer");
    }

    const limit = this.sieveLimit(pos);
    const notPrime = new Uint8Array(limit + 1);

    for (let p = 2; p * p <= limit; p++) {
      if (notPrime[p] === 0) {
        for (let mark = p * p; mark <= limit; mark += p) {
          notPrime[mark] = 1;
        }
      }
    }

    const collectPrimes = [];
    for (let prime = 2; prime <= limit; prime++) {
      if (notPrime[prime] === 0) {
        collectPrimes.push(prime);
      }
      if (collectPrimes.length > pos) {
        return prime;
      }
    }
  }

  sieveLimit(pos) {
    if (pos < 20) return 71;
    return Math.ceil(pos * Math.log(pos) * 1.2);
  }
}

module.exports = Sieve;
