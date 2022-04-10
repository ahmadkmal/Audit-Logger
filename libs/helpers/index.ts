const getFiledOptions = (src: Array<any>, key: string) => {
    // get unique filed options from src.key
    const filedOptions = src?.reduce((acc, cur) => {
      if (!acc.includes(cur[key]) && cur?.[key]) acc.push(cur[key])
      return acc
    }, [])
    return filedOptions || []
  }
export {getFiledOptions}