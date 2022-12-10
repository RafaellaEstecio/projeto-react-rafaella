import styled from "styled-components";


export const HeaderContainer = styled.header`

    width:100%;
    :root {
        --main-height: 40px;
    }

    .Logo {
        display:flex;
        justify-content:center;
        align-items: center;
        padding:20px;
        background-color:black;
        border-width: 50px;
        height: 20vh;
    }
    
    .Nav {
        /* margin-top:0,1px;
        background-color:blue;
        display: flex;
        width: 100%;
        justify-content: space-evenly ;
        align-items: center;
        height:40px;
        padding: 10px; */
        display: flex;
        justify-content: space-between;
        padding: 10px 15px;
        background-color:black;
    }
    button{
          :hover{
               cursor:pointer;
               filter:brightness(0.90);
          }
          :active{
               filter:brightness(0.80);
          }
     
    }
    .cart-button {
     position: relative;
 }

     .cart-badge {
     position: absolute;
     top: 0%;
     right: 0%;
     border:1px solid black;
     border-radius: 50%;
     background-color: white;
     height: 18px;
     width: 18px;
     display: flex;
     align-items: center;
     justify-content: center;
 }

    .Nav .nav-item {
        height:40px;
    }

   .search-container {
        display: flex;
        width:350px;
        
   }

   .search-container input{
        width: 300px;
    }

   .cart-icon {
        width:35px;
        height:var(--main-height);
   }

   .search-icon {
        width:35px;
        height:var(--main-height);
   }

   .menuBtn {
        width:35px;
        height:var(--main-height);
   }
   .btn-logo{
        outline: none;
        border:none;
   }

   .logo-img {
        width:300px;
   }

`
