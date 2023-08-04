import style from './Button.module.css'

const Button = ({onLoadMore}) => {

    return (
       <button className={style.button} type="button" onClick={() => {onLoadMore()}}>Load more</button>
    )
}

export default Button;