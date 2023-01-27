import styled from "styled-components";

export const ProductCardContainer = styled.article`

border: 2px solid black;
margin: 8px 0;
margin-right: 8px;
border-radius: 12px;
overflow: hidden;

>div{
    padding: 8px;
}

.card-header{
    display: flex;
    justify-content:space-between;
    align-items:center;
}

.card-price{
    margin-top: 6px;

}
// button{
//     margin-top: 6px;
//     padding:4px;
//     border-radius:10px;
//     background:#808080
//}
button{
    margin-top: 6px;
    padding:4px;
    border-radius:10px;
    background:black;
    color:white;

    :hover{
         cursor:pointer;
         background:#808080;
         filter:brightness(0.90);
    }
    :active{
        
         filter:brightness(0.80);
    }
}
`