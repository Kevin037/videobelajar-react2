import { Link } from "react-router-dom";

export const Button = (props) => {
    const {varian, children,type, onClick = () => {}} = props
    return (
      <button 
        className={`h-10 px-6 font-semibold rounded-md ${varian} text-white`} 
        type={type}
        onClick={onClick}
        >
      {children}
    </button>
  );
}

export const ButtonTheme = (props) => {
  const {url, children, varian} = props
  return (
    <Link 
      className={`block text-center w-full py-2 rounded-theme transition ${varian}`} 
      to={url}
      >
    {children}
    </Link>
  );
}

export const ButtonPrimary = (props) => {
  const {url, children, varian} = props
  return (
    <ButtonTheme 
      url={url}
      varian={`bg-green-500 hover:bg-green-600 text-white ${varian}`}>
    {children}
    </ButtonTheme>
  );
}

export const ButtonYellow = (props) => {
  const {url, children, varian} = props
  return (
    <ButtonTheme 
      url={url}
      varian={`bg-yellow-400 text-white cursor-pointer ${varian}`}>
    {children}
    </ButtonTheme>
  );
}

export const ButtonSecondary = (props) => {
  const {url, children, varian} = props
  return (
      <ButtonTheme 
        url={url}
        varian={`bg-green-100 text-green-600 hover:bg-green-200 ${varian}`}>
      {children}
      </ButtonTheme>
  );
}

export const ButtonSpan = (props) => {
  const {url, children, varian} = props
  return (
    <ButtonTheme 
      url={url}
      varian={`border flex items-center justify-center gap-2 ${varian}`}>
    {children}
    </ButtonTheme>
  );
}