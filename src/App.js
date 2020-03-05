import React from 'react';
import PropTypes from 'prop-types';

const FoodILike = [
  {id:1, name : '김치', rating:5.0, src : "https://i.pinimg.com/originals/6f/5f/be/6f5fbe5279611852a1e4175d6c3c6408.jpg"},
  {id:2, name : '삼겹살', rating:4.8, src : "https://i2.wp.com/www.gildedgingerbread.com/wp-content/uploads/2017/08/Samgyeopsal-1.jpg?resize=750%2C600&ssl=1"},
  {id:3, name : '불고기', rating:3.2, src : "https://recipe1.ezmember.co.kr/cache/recipe/2016/12/30/df939769792632a48a0eba8bc895e8601.jpg"},
  {id:4, name : '짜장면', rating:4.3, src : "https://zone-trt-bhxtb9xxzrrdpzhqr.netdna-ssl.com/wp-content/uploads/2016/11/seoul-jajangmyeon-860x576.jpg"},
  {id:5, name : '만두', rating:2.4, src : "https://previews.123rf.com/images/bbtreesubmission/bbtreesubmission1809/bbtreesubmission180917005/109253799-steamed-mandoo-korean-dumplings-on-plate.jpg"}
];

function Food({name,picture,rating}){
  return <div>
          <h3>I love {name}</h3>
          <h4>score : {rating}/5.0</h4>
          <img src={picture} alt={name}></img>
         </div>
}

Food.propTypes = {
  name : PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  rating : PropTypes.number.isRequired
}

function App() {
  return (
    <div className="App">
      {FoodILike.map(dish => 
        <Food key={dish.id} name={dish.name} picture={dish.src} rating={dish.rating}/>)}
      {/* 여기서 map함수가 받는 인자는 결국 '함수'이며, 
      그 리턴값은 '배열'의 형태라는 점이 중요하다. */}
    </div>
  );
}

export default App;
