// Step 1
// prettier-ignore
;(f => (x => x(x))(x => f(y => x(x)(y))))(f => x => f(x))(1)

// Step 2
// prettier-ignore
(x => x(x))(x => (f => x => f(x))(y => x(x)(y)))(1)

// Step 3
// prettier-ignore
(x => (f => x => f(x))(y => x(x)(y)))(x => (f => x => f(x))(y => x(x)(y)))(1)

// Step 4
// prettier-ignore
(f => x => f(x))(y => (x => (f => x => f(x))(y => x(x)(y)))(x => (f => x => f(x))(y => x(x)(y)))(y))(1)

// Step 5
// prettier-ignore
(x => (y => (x => (f => x => f(x))(y => x(x)(y)))(x => (f => x => f(x))(y => x(x)(y)))(y))(x))(1)

// Step 6
// prettier-ignore
(y => (x => (f => x => f(x))(y => x(x)(y)))(x => (f => x => f(x))(y => x(x)(y)))(y))(1)

// Now back to step 3
// prettier-ignore
(x => (f => x => f(x))(y => x(x)(y)))(x => (f => x => f(x))(y => x(x)(y)))(1)
