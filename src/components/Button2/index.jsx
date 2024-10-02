export const Button = ( {children,onButtonClick}) => {

    return (
         <button style={{fontSize:'60px'}} onClick={onButtonClick}>{children}</button>
    );
}