import f from 'factri'
const { extend2, factory } = f

const A = factory((t) => {
	let z = 100
	t.a = () => console.log('a')
	t.a2 = () => z--
	t.a3 = () => z
	t.o = () => (z = z + 10)
})

const B = factory((t) => {
	let z = 101
	t.b = () => console.log('b')
	t.b2 = () => z--
	t.b3 = () => z
	t.o = () => (z = z + 20)
})

const C = factory((t) => {
	let z = 102
	t.c = () => console.log('c')
	t.c2 = () => z--
	t.c3 = () => z
	t.o = () => (z = z + 30)
})

const X = extend2(
	(t) => {
		let z = 103
		t.x = () => console.log('c')
		t.x2 = () => z--
		t.x3 = () => z
		t.o = () => (z = z + 40)
	},
	A,
	B,
	C
)

const x = X()

x.o()
console.log(x.a3())
console.log(x.x3())
