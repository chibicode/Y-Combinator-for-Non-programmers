// Tennent Correspondence Principle w/ Binding
export const mul3 = x => x * 3
export const tennentMul3WithBinding = x => (_ => x * 3)(100)

// Wrap function
export const makeAdder = x => n => x + n
export const makeAdderWrapped = x => v => (n => x + n)(v)

export const sum = (g => g(g))(f => n => (n === 1 ? 1 : n + f(f)(n - 1)))

export const sum2 = (f => n => (n === 1 ? 1 : n + f(n - 1)))(f => n =>
  n === 1 ? 1 : n + f(n - 1)
)
