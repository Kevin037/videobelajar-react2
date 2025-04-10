export const Card = (props) => {
    const {varian, children,type, onClick = () => {}} = props
    return (
      <div 
        className={`mt-3 mx-2 bg-white border border-gray-200 rounded-lg shadow-sm p-3 dark:border-gray-300 hover:opacity-80 ${varian}`} 
        type={type}
        onClick={onClick}
        >
      {children}
    </div>
  );
}