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
        background-color:green;
        border-width: 10px;
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
        background-color:red;
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
    

    
    
`
