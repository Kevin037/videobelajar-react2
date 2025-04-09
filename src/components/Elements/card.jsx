export const Card = (props) => {
    const {varian, children,type, onClick = () => {}} = props
    return (
      <div 
        className={`p-6 bg-white border border-gray-200 rounded-lg shadow-sm mx-auto sm:px-6 lg:px-8 dark:border-gray-300 ${varian}`} 
        type={type}
        onClick={onClick}
        >
      {children}
    </div>
  );
}