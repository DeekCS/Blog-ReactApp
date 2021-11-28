import styled from "styled-components";

const Navigation = styled.header`
  width: 100% ; 
  border-bottom: 10px solid #222;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 100px 0;
  height: 140px;
  margin-bottom: 60px;
  background: #f8f8f8;

  .logo a {
    padding-top: 33px;
    display: flex;
    flex-direction: column;
    clear: both;
    padding-bottom: 30px;
    text-decoration: none;

    p {
      width: 500px;
      display: block;
    }

    em {
      font-size: 0.5em;
      float: left;
      display: block;

      img {
        display: inline-block;
        margin-top: 5px;
        width: 15px;
        float: left;
      }

      .letterhead {
        display: inline-block;
        line-height: 260%;
        float: left;
      }
    }
  }

  .gray {
    color: #ccc;
  }

  a {
    color: #222 !important;
    opacity: 0.55 !important;
    transition: all 0.6s ;
    font-size: 1em !important;
  }

  a:hover {
    opacity: 1 !important;
  }

  .fa-bars {
    display: none;
    color: #222;
    font-size: 2rem;
  }

  nav { 
    ul {
      display: flex;
      justify-content: space-between;
    }

    li {
      margin: 0 15px;
      justify-content: space-between;
      font-size: 1em;
    }

    a {
      font-size: 1em;
      text-decoration: none;

      .active {
        color: tomato;
      }
    }

    a.active {
      color: #222;
    }
  }

  @media only screen and (max-width: 800px) {
    padding: 0px;
    .logo {
      padding-left: 15px;
      padding-top: 0px !important;
    }
  }
  @media only screen and (max-width: 600px) {
    height: auto;
    min-height: 50px;
    display: block;
    position: relative;
    .logo {
      width: 100%;
      display: block;
      padding-top: 20px;
      margin: 0 0 0 -5px;

      a {
        padding: 20px 0;
      }
    }

    .fa-bars {
      display: inline-block;
      position: absolute;
      top: 10px;
      right: 10px;
      cursor: pointer;
    }

    ul.collapsed {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex-wrap: wrap;

      overflow: hidden;
      max-height: 0;
      -moz-transition-duration: 0.4s;
      -webkit-transition-duration: 0.4s;
      -o-transition-duration: 0.4s;
      transition-duration: 0.4s;
      -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
      transition-timing-function: cubic-bezier(0, 1, 0.5, 1);

      &.is-expanded {
        overflow: hidden;
        max-height: 500px; /* approximate max height */
        -moz-transition-duration: 0.4s;
        -webkit-transition-duration: 0.4s;
        -o-transition-duration: 0.4s;
        transition-duration: 0.4s;
        -moz-transition-timing-function: ease-in;
        -webkit-transition-timing-function: ease-in;
        -o-transition-timing-function: ease-in;
        transition-timing-function: ease-in;
      }

      li {
        padding: 15px 10px !important;
        margin: 0 0;
        width: 100%;
      }
    }
  }
`;
export default Navigation;