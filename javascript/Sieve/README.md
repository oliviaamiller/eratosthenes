# Sieve of Eratosthenes

## How it works

The Sieve of Eratosthenes generates all prime numbers up to a given limit. Starting at 2, each number is checked. If it isn't marked as `notPrime`, its multiples are marked beginning at `p * p`, since all smaller multiples have been marked earlier in the loop. This repeats up to the `sieveLimit`, leaving only prime numbers unmarked.

A `sieveLimit` is calculated to avoid generating more numbers than necessary. For positions under `20`, a fixed limit of `71` is used, since `71` is the prime at position `19`, the highest position this fallback needs to cover.

For positions over `20`, the limit is estimated using the Prime Number Theorem: `pos * ln(pos)`. A multiplier of `1.2` was added on top of the theorem's estimate as a safety buffer, since the theorem is an approximation and is more likely to underestimate than overestimate. Both the `1.2` multiplier and `20` threshold were tuned by running the test suite incrementally to find the lowest reliable value.

### Efficiencies

`Uint8Array` is used to store each number's prime status as a single byte rather than a full JavaScript value, reducing memory usage for large inputs.

The collection loop returns early once the prime at `pos` has been found, avoiding unnecessary iteration through the remaining numbers in the `notPrime` array.

## Testing

Invalid inputs have been added to the test suite to verify that the correct error is thrown for negative numbers, floats, strings, null, and undefined.

Run tests with:

```bash
npm run test
```
