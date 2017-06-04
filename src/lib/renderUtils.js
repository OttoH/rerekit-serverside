export const classNames = (...args) => {
  let list = (args && args.length) ? args.reduce(function (R, V) {
    if (typeof V === 'string') {
      R.push(V)
    }
    return R
  }, []) : undefined

  return (list && list.length) ? list.join(' ') : undefined
}
