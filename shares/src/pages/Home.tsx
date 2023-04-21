import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SharesBlock from '../components/SharesBlock'
import { fethShares } from '../redux/slices/shares/slice'
import { RootState } from '../redux/store'

const Home = () => {
  const dispatch = useDispatch()
  React.useEffect(() => {
    //@ts-ignore
    dispatch(fethShares())
  },[])
  const { items, status } = useSelector((state:RootState) => state.shares) 
  const stocks = [
    { name: items.AAPL, symbol: "AAPL", price: 137.39, change: 1.12 },
    { name: items[1], symbol: "MSFT", price: 235.77, change: -0.22 },
    { name: items[2], symbol: "TSLA", price: 691.05, change: 4.44 },
    { name: items[3], symbol: "AMZN", price: 3249.90, change: 8.39 },
    // and so on
  ];
  console.log(stocks)

  const shares = stocks.map((obj:any) => (
    <SharesBlock key={obj} />
));

  if(status === 'loading'){
    return <div>...Loading</div>
  }
  return (
    <>
    <h2 className="content__title">Все акций</h2>
    <div className="content__items">
    
      {status === 'error' ? (
        <div className="content__error-info">
          <h2>
            Произошла ошибка <span>😕</span>
          </h2>
          <p>К сожалению, не удалось получить пиццы. Попробуйте повторить попытку позже</p>
        </div>
      ) : (
        <div className="content__items">{shares}</div>
      )}
    
{/* <div className="pizza-block">
<img
className="pizza-block__image"
src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
alt="Pizza"
/>
<h4 className="pizza-block__title">Чизбургер-пицца</h4>
<div className="pizza-block__selector">
<ul>
<li className="active">тонкое</li>
<li>традиционное</li>
</ul>
<ul>
<li className="active">26 см.</li>
<li>30 см.</li>
<li>40 см.</li>
</ul>
</div>
<div className="pizza-block__bottom">
<div className="pizza-block__price">от 395 ₽</div>
<div className="button button--outline button--add">
<svg
  width="12"
  height="12"
  viewBox="0 0 12 12"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
    fill="white"
  />
</svg>
<span>Добавить</span>
<i>2</i>
</div>
</div>
</div> <div className="pizza-block">
<img
className="pizza-block__image"
src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
alt="Pizza"
/>
<h4 className="pizza-block__title">Чизбургер-пицца</h4>
<div className="pizza-block__selector">
<ul>
<li className="active">тонкое</li>
<li>традиционное</li>
</ul>
<ul>
<li className="active">26 см.</li>
<li>30 см.</li>
<li>40 см.</li>
</ul>
</div>
<div className="pizza-block__bottom">
<div className="pizza-block__price">от 395 ₽</div>
<div className="button button--outline button--add">
<svg
  width="12"
  height="12"
  viewBox="0 0 12 12"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
    fill="white"
  />
</svg>
<span>Добавить</span>
<i>2</i>
</div>
</div>
</div> <div className="pizza-block">
<img
className="pizza-block__image"
src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
alt="Pizza"
/>
<h4 className="pizza-block__title">Чизбургер-пицца</h4>
<div className="pizza-block__selector">
<ul>
<li className="active">тонкое</li>
<li>традиционное</li>
</ul>
<ul>
<li className="active">26 см.</li>
<li>30 см.</li>
<li>40 см.</li>
</ul>
</div>
<div className="pizza-block__bottom">
<div className="pizza-block__price">от 395 ₽</div>
<div className="button button--outline button--add">
<svg
  width="12"
  height="12"
  viewBox="0 0 12 12"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
    fill="white"
  />
</svg>
<span>Добавить</span>
<i>2</i>
</div>
</div>

    </div> */}
  </div>
  </>
  )
}

export default Home

