import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from './UI/Card';

const ExpenseItem = ({ title, price, date }) => {
  // 숫자를 화폐 표기법으로 바꾸기
  const formattedPrice = new Intl.NumberFormat('ko-KR').format(price);

  const clickHandler = (e) => {
    console.log('클릭이벤트발생!');
  };

  return (
    <Card className='circle'>
      <div className='expense-item'>
        <ExpenseDate date={date} />
        <div className='expense-item__description'>
          <h2>{title}</h2>
          <div className='expense-item__price'>{formattedPrice}원</div>
        </div>
      </div>
      <button id='btn1' onClick={clickHandler}>
        수정
      </button>
      <button
        id='btn2'
        onClick={(e) => {
          console.log('삭제 버튼 클릭됨!');
        }}
      >
        삭제
      </button>
    </Card>
  );
};

export default ExpenseItem;
