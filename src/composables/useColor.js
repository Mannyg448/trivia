const useColor = () => {
    const colors = ['bg-blue-500', 'bg-red-500', 'bg-slate-500', 'bg-purple-500']
    const getColor = (index) => colors[index % colors.length]
    return { getColor }
  }
  
  export default useColor