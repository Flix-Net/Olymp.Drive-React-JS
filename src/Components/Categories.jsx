import React from 'react';
import styled from "styled-components";

const StyledBlockItemCat = styled.ul`
  display: flex;
  align-items: center;
  border-radius: 10px;
  margin-top: 20px;
  justify-content: space-between;
`

const StyledItemCat = styled.li`
  background-color: ${props => props.bgcolor || "transparent"};
  font-size: 18px;
  font-weight: 500;
  color: ${props => props.color || "Black"};
  padding: 10px 20px;
  margin: 10px 0;
  border: 1px solid black;
  border-radius: 20px;
  cursor: pointer;
  box-shadow:  ${props => props.shadow || "0"} ;
`

const Categories = ({value, onClickCategory}) => {


    let categoriesArr = ["Все", "Седаны", "Кроссоверы", "Джипы", "Минивены", "Гибриды", "Электрокары", "Грузовые"];

    return (
        <div>
            <StyledBlockItemCat>
                {categoriesArr.map((category, i) =>
                    (<StyledItemCat key={i} onClick={()=>onClickCategory(i)}
                                    color={value === i ? "White" : "Black"}
                                    shadow={value === i ? '2px 2px 5px black' : ''}
                                    bgcolor={value === i ? "Black" : "Transparent"}>{category}</StyledItemCat>))}
            </StyledBlockItemCat>
        </div>
    );
};

export default Categories;