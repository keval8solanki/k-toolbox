
export const factory = (cb: any, { freeze = true } = {}) => {
	return (args?: any) => {
		const t = {}
		cb(t, args ?? {})
		return freeze ? Object.freeze(t) : t
	}
}

export const extend = (cb: any, ...parents: any) => {
	return (args?: any): any => {
		let parentInstances = {}
		parents.forEach((parent: any) => {
			parentInstances = Object.assign(parentInstances, parent(args))
		})
		cb(parentInstances, args ?? {})
		return Object.freeze(parentInstances)
	}
}

export const perf = (cb: any, { log = true, name = 'Time' } = {}) => {
	return (...args: any) => {
		const start = performance.now()
		const r = cb(...args)
		const end = performance.now()
		const ms = end - start
		if (log) console.table({ [name]: `${ms}ms` })
		return [ms, r]
	}
}

export const perfAsync = (cb: any, { log = true, name = 'Time' } = {}) => {
	return async (...args: any) => {
		const start = performance.now()
		const r = await cb(...args)
		const end = performance.now()
		const ms = end - start
		if (log) console.table({ [name]: `${ms}ms` })
		return [ms, r]
	}
}

export const memo = (cb: any) => {
	const cache = new Map()
	return (...args: any) => {
		const key = JSON.stringify(args)
		if (cache.has(key)) return cache.get(key)
		const v = cb(...args)
		cache.set(key, v)
		return v
	}
}

export const memoAsync = (cb: any) => {
	const cache = new Map()
	return async (...args: any) => {
		const key = JSON.stringify(args)
		if (cache.has(key)) return cache.get(key)
		const v = await cb(...args)
		cache.set(key, v)
		return v
	}
}
